import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getLatestNews from '../../lib/api/news';
import LatestNewsItem from './LatestNewsItem';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 10px;
  column-gap: 20px;
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
