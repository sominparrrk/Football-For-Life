import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getClubs from '../../../lib/api/clubs';

const Navbar = styled.nav`
  width: 100%;
`;

const ClubList = styled.ul`
  display: flex;
  color: ${(props) => props.theme.gray};
  font-size: 0.75rem;
  margin: 1rem 0 1rem 10rem;

  @media ${(props) => props.theme.desktop} {
    margin: 1rem 0 1rem 10rem;
  }

  @media ${(props) => props.theme.laptopLg} {
    padding-left: 1rem;
  }
`;

const ClubItem = styled.li`
  margin: 0 1rem 0 1rem;

  @media ${(props) => props.theme.desktop} {
    margin: 0 0.5rem 0 0.5rem;
  }
`;

// Needs to arrange in alphabetical order
// .sort() but elements are all object `team.name`

const ClubNavBar = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    getClubs().then((clubs) => setClubs(clubs));
  }, []);
  return (
    <>
      <Navbar>
        <ClubList>
          {clubs
            .filter((club, index) => index < 12)
            .map((club) => (
              <ClubItem key={club.team.id}>
                <Link to={`/club/${club.team.name.replace(/ /gi, '-')}`}>
                  {club.team.name}
                </Link>
              </ClubItem>
            ))}
        </ClubList>
      </Navbar>
    </>
  );
};

export default ClubNavBar;
