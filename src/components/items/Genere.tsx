import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Item = styled.li`
  margin: 0;
  width: 100%;
  border-radius: 8px;
  /* background-color: #f7f7f9; */

  /* @media (prefers-color-scheme: dark) {
    background-color: rgba(0, 0, 0, 0.3);
  } */

  &:hover {
    /* background-color: rgba(60, 60, 67, 0.05); */

    /* @media (prefers-color-scheme: dark) {
      background-color: #1115;
    } */
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
  }

  svg {
    color: var(--secondary-color);
  }
`;

const ItemTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
`;

interface Props {
  readonly data: any;
  // readonly year?: string;
}

export const Genere: React.FC<Props> = ({ data }) => (
  <Item>
    <Link href="/genere/[pid]" as={`/genere/${data.id}`}>
      <a>
        <ItemTitle>{data.name}</ItemTitle>

        <FontAwesomeIcon icon={faChevronRight} />
      </a>
    </Link>
  </Item>
);
