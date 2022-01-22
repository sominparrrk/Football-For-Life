import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getClubInfo from '../../lib/api/clubInfo';
import Players from './Players';

const Container = styled.div`
  height: 100%;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.mainLight};

  @media ${(props) => props.theme.laptop} {
    flex-direction: column-reverse;
    padding-left: 0;
  }

  @media ${(props) => props.theme.tablet} {
    position: relative;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
    justify-content: space-around;
    padding: 2rem 0 2rem 0;
  }

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
`;

const Name = styled.h1`
  margin: 0 0 0 3rem;
  font-size: 4rem;

  @media ${(props) => props.theme.tablet} {
    margin: 1rem 0 1rem 0;
    font-size: 2.5rem;
  }

  @media ${(props) => props.theme.mobileLg} {
    font-size: 2rem;
  }
`;

const Logo = styled.img`
  @media ${(props) => props.theme.tablet} {
    position: absolute;
    top: 7rem;
  }
`;

const Location = styled.div`
  margin-left: 3rem;

  @media ${(props) => props.theme.tablet} {
    margin-left: 0;
  }
`;

const StadiumName = styled.h3`
  margin: 0;
`;

const Address = styled.p`
  margin: 0;
`;

const StadiumImg = styled.img`
  width: 30%;
  height: 13.75rem;
  object-fit: cover;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
  }
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
            <Wrapper>
              <Logo src={club[0].team.logo} alt="club_logo" />
              <Name>{club[0].team.name}</Name>
              <Location>
                <StadiumName>{club[0].venue.name}</StadiumName>
                <Address>
                  {club[0].venue.address}, {club[0].venue.city}
                </Address>
              </Location>
            </Wrapper>
            <StadiumImg src={club[0].venue.image} alt="stadium" />
          </Container>
          <Players id={club[0].team.id} />
        </>
      )}
    </div>
  );
};

export default ClubItem;
