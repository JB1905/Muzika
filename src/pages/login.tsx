import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { signIn } from 'next-auth/client';

import SEO from '../components/SEO';

import { name, descripton } from '../../package.json';

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    /* --vh: -webkit-fill-available; */
    height: -webkit-fill-available;

    @media (display-mode: standalone) {
      /* --vh: 100vh; */
      height: 100vh;
    }
  }
`;

export const LoginMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  /* min-height: 250px; */
  /* max-width: 440px; */
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
  /* font-weight: 500; */
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
    /* font-weight: ${clear ? '400' : '500'}; */
    background-color: ${clear ? 'transparent' : '#fff'};
    color:  ${clear ? '#fff' : '#6972fb'};
  `}
`;

export const LoginButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 6px;
  width: 1.3rem;
  height: 1.3rem;
  /* font-size: 1.3rem; */
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

function Login() {
  return (
    <LoginPage>
      <SEO />

      <LoginMessage>
        <LoginTitle>{name}</LoginTitle>

        <LoginDescription>{descripton}</LoginDescription>

        <LoginButton
          onClick={(e) => {
            e.preventDefault();

            signIn('spotify');
          }}
        >
          Login with Spotify
        </LoginButton>

        <LoginButton href="https://github.com/JB1905/muzika" clear>
          Browse code on GitHub
          <LoginButtonIcon icon={faArrowCircleRight} />
        </LoginButton>
      </LoginMessage>

      <LoginBackground />
    </LoginPage>
  );
}

export default Login;
