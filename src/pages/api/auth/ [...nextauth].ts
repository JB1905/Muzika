import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
// import Providers from 'next-auth/providers';

const options = {
  providers: [
    // Providers.Spotify({
    //   clientId: process.env.SPOTIFY_CLIENT_ID,
    //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    // }),
  ],
  session: {
    jwt: true,
  },
  // callbacks: {
  //   async jwt(token, _, account) {
  //     if (account) {
  //       token.id = account.id
  //       token.accessToken = account.accessToken
  //     }
  //      return token
  //   },
  //   async session(session, user) {
  //     session.user = user
  //     return session
  //   }
  // },
  // pages: {
  //   signIn: '/login',
  //   error: '/login',
  // }
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
