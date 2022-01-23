import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal/Modal';

const Container = styled.div`
  cursor: pointer;
`;

const DarkBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Title = styled.h3`
  //
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const LatestVideoItem = ({ video }) => {
  const [isVideoClicked, setIsVideoClicked] = useState(false);

  const handleClick = () => {
    setIsVideoClicked(!isVideoClicked);
  };

  const { title, thumbnail } = video;
  const { embed } = video.videos[0];

  return (
    <Container onClick={handleClick}>
      {isVideoClicked && (
        <DarkBg>
          <Modal title={title} embed={embed} />
        </DarkBg>
      )}
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
    </Container>
  );
};

export default LatestVideoItem;
