import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;


const HomePresenter = ( nowPlaying, upcoming, popular, error, loading ) => {
  console.log("nowplaying in Presenter : ", nowPlaying);
  console.log("upcoming in Presenter : ", upcoming);
  console.log("popular in Presenter : ", popular);

    return loading ? null : 
      <Container>
        {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">movie</Section>}
      </Container>
  }
  


HomePresenter.propTypes = {
  nowPlaying : PropTypes.array,
  upcoming : PropTypes.array,
  popular : PropTypes.array,
  error : PropTypes.string,
  loading : PropTypes.bool.isRequired
}

export default HomePresenter;
