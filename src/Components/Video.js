import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
`;

const TapContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
`;

const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const MovieSlider = ({youtubeKey}) => {
  

  return (
  <Container>    
    <TapContainer>
      <VideoContainer>
        { youtubeKey &&
          <iframe 
          src={`http://www.youtube.com/embed/${youtubeKey}`} 
          width="100%" 
          height="100%"
          allow="
            accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen" 
          msallowfullscreen="msallowfullscreen" 
          oallowfullscreen="oallowfullscreen" 
          webkitallowfullscreen="webkitallowfullscreen"
          frameborder="0">
        </iframe>
        }
      </VideoContainer>
    </TapContainer>
  </Container>
  )
};

MovieSlider.propTypes = {
  youtubeKey : PropTypes.string
}


export default MovieSlider;
