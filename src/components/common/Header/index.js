import React from 'react';
import { Link } from 'react-router-dom';
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

const Logo = styled.img.attrs({
  src: LogoPath.logo,
})`
  position: absolute;
  left: -2.5rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;

  @media ${(props) => props.theme.laptop} {
    display: none;
  }
`;

const LogoMobile = styled.img.attrs({
  src: LogoPath.logoMobile,
})`
  display: none;
  position: absolute;
  left: -2.5rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;

  @media ${(props) => props.theme.laptop} {
    display: block;
    top: 1rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
  }
`;

const Header = () => {
  return (
    <>
      <Link to='/'>
        <Logo alt='logo' />
      </Link>
      <Link to='/'>
        <LogoMobile alt='logo' />
      </Link>
      <FavClubBar />
      <Container>
        <MenuNavBar />
        <ClubNavBar />
      </Container>
    </>
  );
};

export default Header;
