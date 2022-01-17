import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getLatestVideo from '../../lib/api/video';
import LatestVideoItem from './LatestVideoItem';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 10px;
  column-gap: 20px;
`;

const LastestVideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getLatestVideo().then((videos) => setVideos(videos));
  }, []);
  console.log('[LatestVideo Component]: ', videos);

  return (
    <Container>
      {videos.map((video) => (
        <LatestVideoItem key={video.matchviewUrl} video={video} />
      ))}
    </Container>
  );
};

export default LastestVideoList;
