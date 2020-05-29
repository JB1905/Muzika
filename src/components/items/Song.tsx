import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Image from '../Image';

import { getYear } from '../../helpers/getYear';

const Item = styled.li`
  display: flex;
  height: 55px;
  align-items: center;
  justify-content: center;
  position: relative;
  scroll-snap-align: start;

  > div {
    overflow: hidden;
    border-top: 1px solid var(--border-color);
    padding: 6px;
    flex: 1;

    a:first-child {
      display: flex;
      align-items: center;
    }
  }
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
  margin: 4px 0 0;
  /* color: #777; */
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  span {
    padding: 0 3px;
  }
`;

interface Props {
  readonly data: any;
  // readonly year?: any;
}

export const Song: React.FC<Props> = ({ data }) => (
  <Item>
    {data.album.images.length > 0 && (
      <Image
        src={data.album.images[1].url}
        alt={data.name}
        size="sm"
        shape="square"
      />
    )}

    <div>
      <Link href="/song/[pid]" as={`/song/${data.id}`}>
        <a>
          <ItemTitle>{data.name}</ItemTitle>
        </a>
      </Link>

      <Link href="/album/[pid]" as={`/album/${data.album.id}`}>
        <a>
          <ItemSubTitle>
            {data.album.name}
            <span>&bull;</span>
            {getYear(data.album.release_date)}
          </ItemSubTitle>
        </a>
      </Link>
    </div>
  </Item>
);
