import React from 'react';

import { Grid, Header, Title, SeeAll, List, Body } from './Shelf.styled';

const Shelf: React.FC = () => (
  <Grid>
    <Header>
      <Title></Title>

      <SeeAll></SeeAll>
    </Header>

    <Body>
      <List></List>
    </Body>
  </Grid>
);

export default Shelf;
