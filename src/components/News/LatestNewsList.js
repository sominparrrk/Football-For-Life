import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getLatestNews from '../../lib/api/news';
import LatestNewsItem from './LatestNewsItem';

const Container = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 5rem;
  column-gap: 2rem;

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 10rem;
  }
`;

const LatestNewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getLatestNews().then((news) => setNews(news));
  }, []);
  console.log('[LatestNews Component]: ', news);
  return (
    <Container>
      {news.map((news) => (
        <LatestNewsItem key={news.url} news={news} />
      ))}
    </Container>
  );
};

export default LatestNewsList;
