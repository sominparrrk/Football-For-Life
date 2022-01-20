import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getClubInfo from '../../lib/api/clubInfo';
import Players from './Players';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.75rem 0 1.75rem 9rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.mainLight};
`;

const InfoWrapper = styled.div`
  margin-left: 3rem;
`;

const Name = styled.h1`
  margin: 0;
`;

const Logo = styled.img`
  //
`;

const StadiumName = styled.h3``;

const Address = styled.p`
  margin: 0;
`;

const StadiumImg = styled.img`
  //
`;

const ClubItem = ({ currentClub }) => {
  const [club, setClub] = useState([]);

  useEffect(() => {
    if (currentClub.includes('-')) {
      currentClub = currentClub.replace('-', ' ');
    }
    getClubInfo(currentClub).then((club) => setClub(club));
  }, [currentClub]);

  return (
    <div>
      {club[0] && (
        <>
          <Container>
            <Logo src={club[0].team.logo} alt="club_logo" />
            <InfoWrapper>
              <Name>{club[0].team.name}</Name>
              <StadiumName>{club[0].venue.name}</StadiumName>
              <Address>
                {club[0].venue.address}, {club[0].venue.city}
              </Address>
            </InfoWrapper>
            <StadiumImg src={club[0].venue.image} alt="stadium" />
          </Container>
          <Players id={club[0].team.id} />
        </>
      )}
    </div>
  );
};

export default ClubItem;
