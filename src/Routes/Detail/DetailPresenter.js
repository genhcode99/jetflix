import React , { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Video from "../../Components/Video";
import Helmet from "react-helmet";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`

`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: .7;
  line-height: 1.5;
  width: 50%;
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  margin-top: 10px;
  display: grid;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  background-color: rgba(225,225,225, .3);
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: repeat(auto-fill, 100px);
  gap: 30px;
  width: 50%;
`;

const TitleCompanies =styled.h3`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  color: black;
  width: 100px;
  height: 100px;
`;

const Companies =styled.img`
  object-fit: contain;
  width: 100px;
  height: 100px;
`;


class DetailPresenter extends React.Component {
  render(){
    const { result, logoPath, error, loading } =this.props
    return(
      <>
      <Helmet><title>Loading | Jetflix</title></Helmet>
      {loading ? 
        (
          <Loader />
        )  
        : 
        ( 
          <Container>
            <Helmet><title>{ result.original_title? result.original_title : result.original_name } | Jetflix</title></Helmet>
            <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
            <Content>
              <Cover bgImage={result.poster_path ?
                `https://image.tmdb.org/t/p/original${result.poster_path}`
                :require("../../assets/이순신.png") } 
              />
              <Data>
                <Title>{ result.original_title ? result.original_title : result.original_name }</Title>
                <ItemContainer>
                  <Item>{ result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4) }</Item>
                  <Divider> • </Divider>
                  <Item>{ result.runtime ? result.runtime : result.episode_run_time[0] } min</Item>
                  <Divider> • </Divider>
                  <Item>{result.genres &&
                    result.genres.map((genre, index) => index === result.genres.length -1 ? genre.name : `${genre.name}/`)}</Item>
                </ItemContainer>
                <Overview>{ result.overview }</Overview>
                <Video 
                  youtubeKey={result.videos.results[0] ? result.videos.results[0].key : null}
                  />
                <LogoContainer>
                  <TitleCompanies>Production Companies</TitleCompanies>
                  {logoPath && logoPath.length >0 && logoPath.map((path)=> <Companies src={`https://image.tmdb.org/t/p/w200${path}`}/>)}
                </LogoContainer>
              </Data>
            </Content>
          </Container>
        )}
        </>
    )
  }
};

DetailPresenter.propTypes = {
  result : PropTypes.object,
  error : PropTypes.string,
  loading : PropTypes.bool.isRequired
}

export default DetailPresenter;