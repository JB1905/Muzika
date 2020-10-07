import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import SEO from '../components/SEO';

import { name, descripton } from '../../package.json';

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
`;

export const LoginMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  max-width: 360px;
  color: #fff;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: scale(1.3);
  }
`;

export const LoginTitle = styled.h1`
  font-weight: 700;
  text-align: center;
  font-size: 4.4rem;
  margin: 0;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const LoginDescription = styled.p`
  margin: 15px 0;
  text-align: center;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.3;
`;

export const LoginButton = styled.a<{ clear?: boolean }>`
  display: flex;
  align-items: center;
  margin: 5px 0;
  line-height: 32px;
  padding: 0 16px;
  min-width: 125px;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  height: 32px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;

  ${({ clear }) => `
    background-color: ${clear ? 'transparent' : '#fff'};
    color:  ${clear ? '#fff' : '#6972fb'};
  `}
`;

export const LoginButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 6px;
`;

export const LoginBackground = styled.div`
  top: 0;
  left: 0;
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f56461, #ad54e2, #6972fb, #1bc8f3);
`;

const Login: NextPage = () => (
  <LoginPage>
    <SEO />

    <LoginMessage>
      <LoginTitle>{name}</LoginTitle>

      <LoginDescription>{descripton}</LoginDescription>

      <Link href="/get_spotify_uri">
        <LoginButton>Login with Spotify</LoginButton>
      </Link>

      <LoginButton href="https://github.com/JB1905/muzika" clear>
        Browse code on GitHub
        <LoginButtonIcon icon={faArrowCircleRight} />
      </LoginButton>
    </LoginMessage>

    <LoginBackground />
  </LoginPage>
);

export default Login;
