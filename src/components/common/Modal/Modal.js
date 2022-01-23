import React from 'react';
import styled from 'styled-components';
import { IconPath } from '../../../lib/staticPathData';

const Container = styled.div`
  position: fixed;
  background-color: white;
  border-radius: 1.25rem;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 711px;
  height: 475px;
  padding: 2rem;
  z-index: 50;
`;

const Title = styled.h3`
  margin-top: 1rem;
`;

const VideoWrapper = styled.div`
  margin-top: 2rem;
`;

const VideoDisplay = styled.div`
  //
`;

const CloseIcon = styled.img.attrs({
  src: IconPath.modalClose,
})`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Modal = ({ title, embed }) => {
  const videoURL = embed.slice(
    embed.indexOf('https'),
    embed.lastIndexOf(`' frameborder`)
  );
  return (
    <Container>
      <CloseIcon />
      <VideoWrapper>
        <VideoDisplay>
          <iframe
            src={videoURL}
            style={{
              width: '711px',
              height: '400px',
            }}
            frameBorder="0"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
          ></iframe>
        </VideoDisplay>
        <Title>{title}</Title>
      </VideoWrapper>
    </Container>
  );
};

export default Modal;
