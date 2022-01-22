import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 15%);
  border-radius: 3px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PlayerImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const PlayerName = styled.h4`
  margin: 0;
  font-size: 1.25rem;
`;

const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.grayLight};
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.theme.white};
`;

const InfoKey = styled.p`
  justify-self: start;
`;

const InfoValue = styled.p`
  //
`;
const Player = ({ player }) => {
  const { firstname, lastname, nationality, photo } = player.player;
  const { appearences } = player.statistics[0].games;
  const { total, assists } = player.statistics[0].goals;
  return (
    <Container>
      <Header>
        <PlayerName>
          {firstname} {lastname}
        </PlayerName>
        <PlayerImage src={photo} />
      </Header>
      <InfoList>
        <InfoItem>
          <InfoKey>Nationality</InfoKey>
          <InfoValue>{nationality}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoKey>Appearances</InfoKey>
          <InfoValue>{appearences}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoKey>Goals</InfoKey>
          <InfoValue>{total}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoKey>Assists</InfoKey>
          <InfoValue>{assists}</InfoValue>
        </InfoItem>
      </InfoList>
    </Container>
  );
};

export default Player;
