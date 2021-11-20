import React from 'react';
import styled from 'styled-components';
import { LogoPath } from '../../../lib/data';
import ClubNavbar from './ClubNavbar';
import MenuNavbar from './MenuNavbar';

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
      <ClubNavbar />
      <MenuWrapper>
        <Logo src={LogoPath.logo} alt='logo' />
        <MenuNavbar />
      </MenuWrapper>
    </>
  );
};

export default Header;
