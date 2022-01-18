import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal/Modal';

const Container = styled.div`
  cursor: pointer;
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
      {isVideoClicked && <Modal title={title} embed={embed} />}
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
    </Container>
  );
};

export default LatestVideoItem;
