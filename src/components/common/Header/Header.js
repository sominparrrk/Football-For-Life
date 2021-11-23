import React from 'react';
import styled from 'styled-components';
import { LogoPath } from '../../../lib/staticPathData';
import FavClubBar from './FavClubBar';
import MenuNavBar from './MenuNavBar';

const MenuWrapper = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 200px;
`;

const Header = () => {
  return (
    <>
      <FavClubBar />
      <MenuWrapper>
        <Logo src={LogoPath.logo} alt='logo' />
        <MenuNavBar />
      </MenuWrapper>
    </>
  );
};

export default Header;
