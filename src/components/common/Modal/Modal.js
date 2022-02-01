import React, { useEffect } from 'react';
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
  z-index: 100;

  @media ${(props) => props.theme.laptop} {
    left: 50%;
    width: calc(100% - 10rem);
  }
`;

const Title = styled.h3`
  margin-top: 1rem;

  @media ${(props) => props.theme.mobileLg} {
    font-size: 0.75rem;
  }
`;

const VideoWrapper = styled.div`
  margin-top: 2rem;
`;

const VideoDisplay = styled.div`
  //
`;

const VideoIFrame = styled.iframe`
  width: 711px;
  height: 400px;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
  }
`;

const CloseIcon = styled.img.attrs({
  src: IconPath.modalClose,
})`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Modal = ({ title, embed }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
    `;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  const videoURL = embed.slice(
    embed.indexOf('https'),
    embed.lastIndexOf(`' frameborder`)
  );
  return (
    <Container>
      <CloseIcon />
      <VideoWrapper>
        <VideoDisplay>
          <VideoIFrame src={videoURL} />
        </VideoDisplay>
        <Title>{title}</Title>
      </VideoWrapper>
    </Container>
  );
};

export default Modal;
