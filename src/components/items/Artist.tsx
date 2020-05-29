import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Image from '../Image';

const Item = styled.li`
  scroll-snap-align: start;
  text-align: center;

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

// const ItemSubTitle = styled.h4`
//   font-size: 1.2rem;
//   margin: 4px 0;
//   color: #777;
//   font-weight: 500;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   overflow: hidden;
// `;

interface Props {
  readonly data: any;
}

export const Artist: React.FC<Props> = ({ data }) => (
  <Item>
    {data.images && (
      <Link href="/artist/[pid]" as={`/artist/${data.id}`}>
        <a>
          <Image
            src={data.images[1] ? data.images[1].url : ''}
            alt={data.name}
            size="lg"
            shape="circle"
          />
        </a>
      </Link>
    )}

    <ItemDetails>
      <Link href="/artist/[pid]" as={`/artist/${data.id}`}>
        <a>
          <ItemTitle>{data.name}</ItemTitle>
        </a>
      </Link>
    </ItemDetails>
  </Item>
);
