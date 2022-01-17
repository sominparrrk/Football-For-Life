import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  //
`;

const Title = styled.h3`
  //
`;

const Thumbnail = styled.img`
  width: 569px;
  height: 297px;
  object-fit: cover;
`;

const Description = styled.p`
  //
`;

const LatestNewsItem = ({ news }) => {
  const { title, url, urlToImage, description } = news;
  return (
    <Container>
      <Thumbnail src={urlToImage} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default LatestNewsItem;
