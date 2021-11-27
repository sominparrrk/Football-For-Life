import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  width: 100%;
`;

const ClubList = styled.ul`
  display: flex;
  color: #76766f;
  font-size: 0.75rem;
  margin-left: 10rem;
`;

const ClubItem = styled.li`
  margin: 0 1rem 0 1rem;
`;

const clubDummyData = [
  { name: 'Liverpool', code: 'LIV' },
  { name: 'Newcastle', code: 'NEW' },
  { name: 'Norwich', code: 'NOR' },
  { name: 'Brentford', code: 'BRE' },
  { name: 'Everton', code: 'EVE' },
  { name: 'Leeds', code: 'LEE' },
  { name: 'Arsenal', code: 'ARS' },
  { name: 'Aston Villa', code: 'AVL' },
  { name: 'Leicester', code: 'LEI' },
  { name: 'Southampton', code: 'SOU' },
  { name: 'Tottenham', code: 'TOT' },
  { name: 'Watford', code: 'WAT' },
  { name: 'Brighton and Hove', code: 'BHA' },
  { name: 'Man City', code: 'MCI' },
  { name: 'Man Utd', code: 'MUN' },
  { name: 'Burnley', code: 'BUN' },
  { name: 'Chelsea', code: 'CHE' },
  { name: 'Crystal Palace', code: 'CRY' },
  { name: 'West Ham', code: 'WHU' },
  { name: 'Wolves', code: 'WOL' },
];

// Needs to arrange in alphabetical order
// .sort() but elements are all object `team.name`

const ClubNavBar = () => {
  return (
    <>
      <Navbar>
        <ClubList>
          {clubDummyData
            .filter((club, index) => index < 12)
            .map((club) => (
              <ClubItem key={club.code}>{club.name}</ClubItem>
            ))}
        </ClubList>
      </Navbar>
    </>
  );
};

export default ClubNavBar;
