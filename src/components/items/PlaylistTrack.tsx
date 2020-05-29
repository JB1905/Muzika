import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Image from '../Image';

import { msToTime } from '../../helpers/msToTime';

const Item = styled.li`
  list-style: none;
  display: flex;
  padding: 0;
  font-size: 1.4rem;
  position: relative;
  align-items: center;
  border-top: 1px solid var(--border-color);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    width: calc(100% + 40px);
    border-radius: 4px;
    left: -20px;
    z-index: -1;
    height: 100%;
  }

  /* &:hover {
    &::before {
      background-color: #eee5;

      @media (prefers-color-scheme: dark) {
        background-color: #1115;
      }
    }
  } */

  &:last-of-type {
    border-bottom: 1px solid var(--border-color);
  }
`;

const ItemSide = styled.div`
  margin-right: 16px;
`;

const ItemMain = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  height: 55px;

  > div {
    padding-right: 6%;

    @media (min-width: 1260px) {
      width: 50%;
    }
  }

  > a {
    display: none;

    @media (min-width: 1260px) {
      width: 50%;
      display: flex;
      padding-right: 6%;
    }
  }

  time {
    padding: 0;
    margin-left: 6px;
    font-size: 1.2rem;
  }
`;

const ItemInfo = styled.div`
  overflow: hidden;
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
`;

interface Props {
  readonly data: any;
}

export const PlaylistTrack: React.FC<Props> = ({ data }) => (
  <Item>
    <ItemSide>
      <Image
        src={data.track.album.images[2].url}
        alt={data.track.name}
        shape="square"
        size="sm"
      />
    </ItemSide>

    <ItemMain>
      <ItemInfo>
        <Link href="/song/[pid]" as={`/song/${data.track.id}`}>
          <a>
            <ItemTitle>{data.track.name}</ItemTitle>
          </a>
        </Link>

        <Link href="/artist/[pid]" as={`/artist/${data.track.artists[0].id}`}>
          <a>
            <ItemSubTitle>{data.track.artists[0].name}</ItemSubTitle>
          </a>
        </Link>
      </ItemInfo>

      <Link href="/album/[pid]" as={`/album/${data.track.album.id}`}>
        <a>
          <ItemSubTitle>{data.track.album.name}</ItemSubTitle>
        </a>
      </Link>
    </ItemMain>

    <time>{msToTime(data.track.duration_ms)}</time>
  </Item>
);
