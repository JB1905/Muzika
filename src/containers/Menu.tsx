import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import SearchForm from './SearchForm';

import { name, version } from '../../package.json';

const Navigation = styled.nav`
  width: 100%;
  height: 44px;
  z-index: 100;
  position: fixed;
  overflow: hidden;
  background-color: var(--navigation-mobile-bg);
  transition: height 500ms ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 0;
    position: sticky;
    width: 260px;
    height: 100vh;
    z-index: 100;
    border-right: 1px solid var(--sidebar-border-color);
    background-color: var(--sidebar-bg-color);
    box-shadow: none;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 18px;

  &:first-of-type {
    margin: 19px 0 18px;
  }
`;

const Brand = styled.h1`
  margin: 11px 0 13px;
  text-align: center;
  padding-right: 26px;
  position: relative;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: left;
    padding: 0 25px;
    font-size: 2.6rem;
  }

  &::first-letter {
    text-transform: uppercase;
  }

  span {
    position: absolute;
    bottom: 3px;
    margin-left: 5px;
    font-size: 0.6rem;
    font-weight: 900;
    padding: 2px 4px;
    border-radius: 4px;
    display: inline-block;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      bottom: 6px;
      font-size: 0.8rem;
      border-radius: 5px;
    }
  }
`;

const MenuWrapper = styled.div`
  padding: 0 25px;
  overflow: auto;
  height: auto;
`;

const MenuItem = styled.li``;

const Menu = () => (
  <Navigation>
    <Link href="/browse">
      <Brand>
        {name} <span>{version}</span>
      </Brand>
    </Link>

    <MenuWrapper>
      <SearchForm />

      {/* <MenuList>
          <MenuItem>For You</MenuItem>
          <MenuItem>Browse</MenuItem>
        </MenuList>

        <MenuList>
          <MenuItem>For You</MenuItem>
          <MenuItem>Browse</MenuItem>
          <MenuItem>For You</MenuItem>
          <MenuItem>Browse</MenuItem>
        </MenuList> */}
    </MenuWrapper>
  </Navigation>
);

export default Menu;
