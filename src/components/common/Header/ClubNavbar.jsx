import React from 'react';
import styled from 'styled-components';
import { ClubPath, IconPath } from '../../../lib/data';

const Navbar = styled.nav`
  width: 100%;
  background-color: #ffffff;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 13.5rem;
`;

const Title = styled.h4`
  margin: 0;
  color: #76766f;
  font-weight: 400;
  font-size: 0.75rem;
`;

const RedirectIcon = styled.img.attrs({
  src: IconPath.redirect,
})`
  padding-left: 0.5rem;
`;

const ClubImg = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0.75rem;
`;

const ClubNavbar = () => {
  return (
    <>
      <Navbar>
        <ContentWrapper>
          <Title>FAVOURITE CLUB SITES</Title>
          <RedirectIcon />
          {ClubPath.map((club) => (
            <ClubImg src={club.img} />
          ))}
        </ContentWrapper>
      </Navbar>
    </>
  );
};

export default ClubNavbar;
