import React from 'react';

import { Site, Container } from './Layout.styles';

import Menu from '../../molecues/Menu';

import SEO from '../../SEO';

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ title, children }) => (
  <Site>
    <SEO title={title} />

    <Menu />

    <Container>{children}</Container>
  </Site>
);

export default Layout;
