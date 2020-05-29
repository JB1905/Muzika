import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { msToTime } from '../../helpers/msToTime';

const Item = styled.li`
  list-style: none;
  display: flex;
  padding: 12px 0;
  font-size: 1.4rem;
  position: relative;
  align-items: center;
  height: 55px;
  max-width: calc(100vw - 40px);
  border-bottom: 1px solid var(--border-color);
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0;
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
`;

const ItemSide = styled.div``;

const Index = styled.p`
  text-align: center;
  min-width: 40px;
`;

const ItemMain = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;

  time {
    padding: 0;
    margin-left: 6px;
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
  margin: 4px 0;
  /* color: #777; */
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

interface Props {
  readonly data: any;
  readonly showArtist?: boolean;
  readonly topPlace?: boolean;
}

export const AlbumTrack: React.FC<Props> = ({ data, showArtist, topPlace }) => (
  <Item>
    <ItemSide>
      <Index>{data.track_number}.</Index>
    </ItemSide>

    <ItemMain>
      <ItemInfo>
        <Link href="/song/[pid]" as={`/song/${data.id}`}>
          <a>
            <ItemTitle>{data.name}</ItemTitle>
          </a>
        </Link>

        {showArtist && (
          <Link href="/artist/[pid]" as={`/artist/${data.artists[0].id}`}>
            <a>
              <ItemSubTitle>{data.artists[0].name}</ItemSubTitle>
            </a>
          </Link>
        )}
      </ItemInfo>

      <time>{msToTime(data.duration_ms)}</time>
    </ItemMain>
  </Item>
);
