import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader"
import Section from "../../Components/Section"

const Container = styled.div`
  padding: 0 20px;
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
              <span key={movie.id}>{movie.title}</span>
            )}
          </Section>
        }
        {
        tvResults && tvResults.length > 0 && 
          <Section title="TV Show Results">
            {tvResults.map( show =>
              <span key={show.id}>{show.name}</span>
            )}
          </Section>
        }
      </>
      }
    </Container>
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
