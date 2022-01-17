import React from 'react';
import styled from 'styled-components';
import LatestNewsList from '../../components/News/LatestNewsList';
import LastestVideoList from '../../components/Video/LastestVideoList';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 43px 105px 43px 105px;
  background-color: ${(props) => props.theme.mainLight};
`;

const Title = styled.h1``;

const Home = () => {
  return (
    <Container>
      <Title>Latest Highlights</Title>
      <LastestVideoList />
      <LatestNewsList />
    </Container>
  );
};

export default Home;
