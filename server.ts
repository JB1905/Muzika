// @ts-nocheck

import express, { Request, Response } from 'express';
import passport from 'passport';
import { Strategy as SpotifyStrategy } from 'passport-spotify';
import cookieParser from 'cookie-parser';
import next from 'next';

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';

const PORT = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: '/callback',
    },
    (
      accessToken: string,
      _refreshToken: string,
      _expires_in: any,
      _profile: any,
      done: any
    ) => {
      return done(null, accessToken);
    }
  )
);

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cookieParser());
    server.use(passport.initialize());
    server.use(passport.session());

    server.get(
      '/get_spotify_uri',
      passport.authenticate('spotify', {
        scope: [
          'user-top-read',
          'user-read-recently-played',
          'user-read-playback-state',
          'user-read-currently-playing',
          'user-modify-playback-state',
          'user-library-modify',
          'user-library-read',
          'streaming',
          'app-remote-control',
          'user-read-private',
          'user-read-birthdate',
          'user-read-email',
          'user-follow-modify',
          'user-follow-read',
          'playlist-modify-public',
          'playlist-read-collaborative',
          'playlist-read-private',
          'playlist-modify-private',
        ],
      })
    );

    server.get(
      '/callback',
      passport.authenticate('spotify', { failureRedirect: '/get_spotify_uri' }),
      (req, res) => {
        console.log(req);

        res.cookie('spotify_token', req.user, {
          maxAge: 1800000,
          httpOnly: true,
        });

        return res.redirect('/browse');
      }
    );

    server.get('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(PORT as number, '0.0.0.0', (err?: any) => {
      if (err) throw err;

      console.log(`Ready on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.stack);

    process.exit(1);
  });
