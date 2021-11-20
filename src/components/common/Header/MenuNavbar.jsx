import React from 'react';
import styled from 'styled-components';
import { IconPath } from '../../../lib/data';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  background-color: #242424;
`;

const MenuList = styled.ul`
  display: flex;
  margin: 0;
  color: #ffffff;
  font-weight: 500;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem;
  cursor: pointer;
`;

const TriDownIcon = styled.img.attrs({
  src: IconPath.triangleDown,
})`
  padding-left: 0.5rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
`;

const SearchInput = styled.input`
  width: 14rem;
  height: 2rem;
  border-radius: 1.25rem;
  padding-left: 1rem;
  font-family: 'Outfit', sans-serif;
  &:valid {
    color: #242424;
    font-style: italic;
  }
`;

const SerachIcon = styled.img.attrs({
  src: IconPath.search,
})`
  padding-left: 0.5rem;
`;

const MenuNavbar = () => {
  return (
    <>
      <Navbar>
        <MenuList>
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
      </Navbar>
    </>
  );
};

export default MenuNavbar;
