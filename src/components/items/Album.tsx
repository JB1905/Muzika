import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Image from '../Image';

import { getYear } from '../../helpers/getYear';

const Item = styled.li`
  scroll-snap-align: start;

  figure {
    transition: transform 200ms ease;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
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

const ItemSubTitle = styled.h5`
  font-size: 1.2rem;
  margin: 4px 0;
  color: #777;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface Props {
  readonly data: any;
  readonly year?: boolean;
}

export const Album: React.FC<Props> = ({ data, year }) => (
  <Item>
    {data.images && (
      <Link href="/album/[pid]" as={`/album/${data.id}`}>
        <a>
          <Image
            src={data.images[1] ? data.images[1].url : ''}
            alt={data.name}
            shape="square"
          />
        </a>
      </Link>
    )}

    <ItemDetails>
      <Link href="/album/[pid]" as={`/album/${data.id}`}>
        <a>
          <ItemTitle>{data.name}</ItemTitle>
        </a>
      </Link>

      {year ? (
        <Link href="/album/[pid]" as={`/album/${data.id}`}>
          <a>
            <ItemSubTitle>{getYear(data.release_date)}</ItemSubTitle>
          </a>
        </Link>
      ) : (
        <Link href="/artist/[pid]" as={`/artist/${data.artists[0].id}`}>
          <a>
            <ItemSubTitle>{data.artists[0].name}</ItemSubTitle>
          </a>
        </Link>
      )}
    </ItemDetails>
  </Item>
);
