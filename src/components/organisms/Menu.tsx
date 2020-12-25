import Link from 'next/link';
import styled from 'styled-components';

import SearchForm from '../molecues/SearchForm';

import { name, version } from '../../../package.json';

export const Navigation = styled.nav`
  width: 100%;
  height: 44px;
  z-index: 100;
  position: fixed;
  overflow: hidden;
  /* background-color: var(--sidebar); */
  transition: height 500ms ease;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55px auto 1fr auto;
  /* grid-template-areas: 'header' 'search' 'scrollable' 'upsell'; */

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 0;
    position: sticky;
    width: 260px;
    height: 100vh;
    z-index: 100;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    /* background-color: ${({ theme }) => theme.colors.background}; */
    box-shadow: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 18px;

  &:first-of-type {
    margin: 19px 0 18px;
  }
`;

export const Brand = styled.h1`
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

const SearchBox = styled.div`
  padding: 0 25px;
  height: 54px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// TODO rename?
const Scrollable = styled.div`
  overflow: auto;

  // TODO 25px -> var
  padding: 9px 25px 16px;
`;

const Section = styled.div``;

const SectionTitle = styled.h2``;

const List = styled.ul``;

const ListItem = styled.li``;

const Menu = () => (
  <Navigation>
    <Link href="/browse">
      <Brand>
        {name} <span>{version}</span>
      </Brand>
    </Link>

    <SearchBox>
      <SearchForm />
    </SearchBox>

    <Scrollable>
      <Section>
        <List>
          <ListItem></ListItem>
        </List>
      </Section>
    </Scrollable>
  </Navigation>
);

export default Menu;
