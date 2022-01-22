import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getPlayerInfo from '../../lib/api/playerInfo';
import Player from './Player';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  padding: 3rem;

  @media ${(props) => props.theme.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.tabletLg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Players = ({ id }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getPlayerInfo(id).then((players) => setPlayers(players));
  }, [id]);
  console.log('PLAYER COMPONENT', players);

  return (
    <Container>
      {players.map((player, index) => (
        <Player key={index} player={player} />
      ))}
    </Container>
  );
};

export default Players;
