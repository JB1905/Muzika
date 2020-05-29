import React, { ReactChild } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Box = styled.section``;

const BoxHeader = styled.div`
  display: flex;
  padding: 14px 0 8px;
  margin: 0 var(--body-gutter);
  border-top: 1px solid var(--border-color);
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 var(--body-gutter);
  }

  a {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.5rem;

    svg {
      margin-left: 5px;
      font-size: 1.4rem;
    }
  }
`;

const BoxTitle = styled.h3`
  font-size: 1.8rem;
`;

interface Props {
  readonly title: string;
  readonly link?: string;
  readonly children: ReactChild | ReactChild[];
}

export default ({ title, link, children }: Props) => (
  <Box>
    <BoxHeader>
      <BoxTitle>{title}</BoxTitle>

      {link && (
        <Link href="/room/[pid]" as={`/room/${link}`}>
          <a>
            See All <FontAwesomeIcon icon={faChevronCircleRight} />
          </a>
        </Link>
      )}
    </BoxHeader>

    {children}
  </Box>
);
