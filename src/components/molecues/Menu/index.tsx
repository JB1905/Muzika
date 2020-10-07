import React from 'react';
import Link from 'next/link';

import { Navigation, Brand } from './Menu.styles';

import SearchForm from '../SearchForm';

import { name, version } from '../../../../package.json';

const Menu: React.FC = () => (
  <Navigation>
    <Link href="/browse">
      <Brand>
        {name} <span>{version}</span>
      </Brand>
    </Link>

    <SearchForm />
  </Navigation>
);

export default Menu;
