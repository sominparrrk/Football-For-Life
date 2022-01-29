import React from 'react';
import styled from 'styled-components';
import LatestNewsList from '../../components/News/LatestNewsList';
import LastestVideoList from '../../components/Video/LastestVideoList';

const Container = styled.div`
  padding: 2.5rem 6.5rem 2.5rem 6.5rem;
  background-color: ${(props) => props.theme.mainLight};

  @media ${(props) => props.theme.laptopLg} {
    padding: 2.5rem 3rem 2.5rem 3rem;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 1rem 3rem 1rem 3rem;
  }
`;

const Title = styled.h1`
  margin: 1.5rem 0 3.75rem 0;

  @media ${(props) => props.theme.tablet} {
    margin: 1.5rem 0 2.5rem 0;
  }

  @media ${(props) => props.theme.mobileLg} {
    font-size: 1.5rem;
  }
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
