import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet"
import Loader from "../../Components/Loader"
import Section from "../../Components/Section"
import Message from "../../Components/Message"
import Poster from "../../Components/Poster"


const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;


const SearchPresenter = ({ 
    movieResults, 
    tvResults, 
    searchTerm, 
    error, 
    loading, 
    handleSubmit, 
    updateTerm 
  }) => (
    <>
    <Helmet><title>Search | Jetflix</title></Helmet>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV Shows..." onChange={updateTerm} value={searchTerm}/>
      </Form>
      {loading ? <Loader /> : 
      <>
        {
        movieResults && movieResults.length > 0 && 
          <Section title="Movie Results">
            {movieResults.map( movie =>
              <Poster 
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.slice(0,4)}
              isMovie={true}
              />
            )}
          </Section>
        }
        {
        tvResults && tvResults.length > 0 && 
          <Section title="TV Show Results">
            {tvResults.map( show =>
              <Poster 
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.name}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.slice(0,4)}
              />
            )}
          </Section>
        }
        { error && <Message text={error} color="e74c3c"/> }
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 &&
          <Message text="Nothing Found" color="#bdc3c7"/>
          }
      </>
      }
    </Container>
    </>
);

SearchPresenter.propTypes = {
  movieResults : PropTypes.array,
  tvResults : PropTypes.array,
  searchTerm : PropTypes.string,
  error : PropTypes.string,
  loading : PropTypes.bool.isRequired,
  handleSubmit : PropTypes.func.isRequired,
  updateTerm : PropTypes.func.isRequired
}

export default SearchPresenter;
