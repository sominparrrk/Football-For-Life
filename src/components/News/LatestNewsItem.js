import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
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
  const { title, url, urlToImage, description } = news;

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Container onClick={() => openInNewTab(url)}>
      <Thumbnail src={urlToImage} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default LatestNewsItem;
