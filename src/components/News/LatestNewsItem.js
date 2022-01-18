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
  height: 70%;
  object-fit: fill;
`;

const Description = styled.p`
  //
`;

const LatestNewsItem = ({ news }) => {
  const { title, urlToImage, description } = news;
  return (
    <Container>
      <Thumbnail src={urlToImage} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default LatestNewsItem;
