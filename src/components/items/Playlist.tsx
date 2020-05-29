import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Image from '../Image';

const Item = styled.li`
  scroll-snap-align: start;

  figure {
    transition: transform 200ms ease;
    /* box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1); */
  }

  &:hover {
    figure {
      transform: scale(1.03) translateY(-1.5%);
    }
  }
`;

const ItemDetails = styled.div`
  margin: 8px 0 0;
`;

const ItemTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface Props {
  readonly data: any;
  // readonly year?: string;
}

export const Playlist: React.FC<Props> = ({ data }) => (
  <Item>
    {data.images && (
      <Link href="/playlist/[pid]" as={`/playlist/${data.id}`}>
        <a>
          <Image
            src={data.images[0] ? data.images[0].url : ''}
            alt={data.name}
            shape="square"
          />
        </a>
      </Link>
    )}

    <ItemDetails>
      <Link href="/playlist/[pid]" as={`/playlist/${data.id}`}>
        <a>
          <ItemTitle>{data.name}</ItemTitle>
        </a>
      </Link>
    </ItemDetails>
  </Item>
);
