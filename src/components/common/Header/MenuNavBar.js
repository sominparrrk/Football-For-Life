import React, { useState } from 'react';
import styled from 'styled-components';
import { IconPath } from '../../../lib/staticPathData';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.black};
`;

const HamburgerMenuIcon = styled.img.attrs({
  src: IconPath.hamburgerMenu,
})`
  display: none;

  @media ${(props) => props.theme.laptop} {
    display: block;
    position: absolute;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

const MenuList = styled.ul`
  display: flex;
  margin-left: 10rem;
  color: ${(props) => props.theme.white};
  font-weight: 500;

  @media ${(props) => props.theme.desktop} {
    font-size: 0.875rem;
  }

  @media ${(props) => props.theme.laptopLg} {
    padding-left: 1rem;
    font-size: 0.75rem;
  }

  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
    position: absolute;
    top: 5rem;
    right: 0;
    background-color: ${(props) => props.theme.black};
    margin: 0;
    padding: 0 2rem;
    font-size: 2rem;
    display: ${({ isOpened }) => {
      return isOpened === false ? 'none' : 'block';
    }};
    z-index: 100;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem;
  cursor: pointer;

  @media ${(props) => props.theme.desktop} {
    margin: 0.75rem;
  }

  @media ${(props) => props.theme.laptopLg} {
    // margin: 1rem 0 1rem 10rem;
  }

  @media ${(props) => props.theme.laptop} {
    margin: 2rem 0;
  }
`;

const TriDownIcon = styled.img.attrs({
  src: IconPath.triangleDown,
})`
  padding-left: 0.5rem;

  @media ${(props) => props.theme.laptop} {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;

  @media ${(props) => props.theme.laptop} {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 14rem;
  height: 2rem;
  border-radius: 1.25rem;
  padding-left: 1rem;
  font-family: 'Outfit', sans-serif;
  &:valid {
    color: ${(props) => props.theme.black};
    font-style: italic;
  }

  @media ${(props) => props.theme.laptopLg} {
    width: 10rem;
  }
`;

const SerachIcon = styled.img.attrs({
  src: IconPath.search,
})`
  padding-left: 0.5rem;
`;

const MenuNavBar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <Navbar>
        <MenuList isOpened={isOpened}>
          <MenuItem>
            Premier League
            <TriDownIcon />
          </MenuItem>
          <MenuItem>
            La Liga
            <TriDownIcon />
          </MenuItem>
          <MenuItem>
            Bundesliga
            <TriDownIcon />
          </MenuItem>
          <MenuItem>
            Serie A<TriDownIcon />
          </MenuItem>
          <MenuItem>
            Ligue 1<TriDownIcon />
          </MenuItem>
          <MenuItem>
            Others
            <TriDownIcon />
          </MenuItem>
        </MenuList>

        <SearchWrapper>
          <SearchInput placeholder='Search Your Club' required='required' />
          <SerachIcon />
        </SearchWrapper>

        <HamburgerMenuIcon onClick={handleOpen} />
      </Navbar>
    </>
  );
};

export default MenuNavBar;
