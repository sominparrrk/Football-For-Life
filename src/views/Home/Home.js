import React from 'react';
import styled from 'styled-components';
import LatestNewsList from '../../components/News/LatestNewsList';
import LastestVideoList from '../../components/Video/LastestVideoList';

const Container = styled.div`
  padding: 2.5rem 6.5rem 2.5rem 6.5rem;
  background-color: ${(props) => props.theme.mainLight};
`;

const Title = styled.h1`
  margin: 1.5rem 0 3.75rem 0;
`;

const Home = () => {
  return (
    <Container>
      <Title>Latest Highlights</Title>
      <LastestVideoList />
      <Title>Latest News</Title>
      <LatestNewsList />
    </Container>
  );
};

export default Home;
