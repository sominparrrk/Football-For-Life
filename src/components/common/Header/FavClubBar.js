import React from 'react';
import styled from 'styled-components';
import { ClubPath, IconPath } from '../../../lib/staticPathData';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.white};

  @media ${(props) => props.theme.laptop} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 13.5rem;

  @media ${(props) => props.theme.laptopLg} {
    padding-left: 11.5rem;
  }
`;

const Title = styled.h4`
  margin: 0;
  color: ${(props) => props.theme.gray};
  font-weight: 400;
  font-size: 0.75rem;
`;

const RedirectIcon = styled.img.attrs({
  src: IconPath.redirect,
})`
  padding: 0 1rem 0 0.5rem;
`;

const ClubImg = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.75rem;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.4);
  }

  @media ${(props) => props.theme.desktop} {
    width: 1.75rem;
    height: 1.75rem;
    padding: 0.5rem;
  }
`;

const FavClubBar = () => {
  return (
    <>
      <Navbar>
        <ContentWrapper>
          <Title>FAVOURITE CLUB SITES</Title>
          <RedirectIcon />
          {ClubPath.map((club, index) => (
            <a key={index} href={club.link} target="_blank">
              <ClubImg src={club.img} />
            </a>
          ))}
        </ContentWrapper>
      </Navbar>
    </>
  );
};

export default FavClubBar;
