import React from 'react';
import styled from 'styled-components';
import { LogoPath } from '../../../lib/staticPathData';
import ClubNavBar from './ClubNavBar';
import FavClubBar from './FavClubBar';
import MenuNavBar from './MenuNavBar';

const Container = styled.div`
  /* position: sticky;
  top: 0; */
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  position: absolute;
  left: -2rem;
  width: 12rem;
  height: 12rem;
  border-radius: 200px;
`;

const Header = () => {
  return (
    <>
      <Logo src={LogoPath.logo} alt="logo" />
      <FavClubBar />
      <Container>
        <MenuNavBar />
        <ClubNavBar />
      </Container>
    </>
  );
};

export default Header;
