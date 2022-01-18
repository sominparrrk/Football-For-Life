import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  //
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
  const { title, thumbnail } = video;
  return (
    <Container>
      <Thumbnail src={thumbnail} />
      <Title>{title}</Title>
    </Container>
  );
};

export default LatestVideoItem;
