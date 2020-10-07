import React from 'react';
import Link from 'next/link';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Header, Title, Body } from './Shelf.styles';

interface Props {
  title: string;
  link?: string;
}

const Shelf: React.FC<Props> = ({ title, link, children }) => (
  <Grid>
    <Header>
      <Title>{title}</Title>

      {link && (
        <Link href="/room/[pid]" as={`/room/${link}`}>
          <a>
            See All <FontAwesomeIcon icon={faChevronCircleRight} />
          </a>
        </Link>
      )}
    </Header>

    <Body>{children}</Body>
  </Grid>
);

export default Shelf;
