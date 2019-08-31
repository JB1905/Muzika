const app = require('express')();
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
require('dotenv').config();

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:8888/callback'
    },
    (accessToken, refreshToken, expires_in, profile, done) => {
      return done(null, accessToken);
    }
  )
);

app.get(
  '/login',
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
      'playlist-modify-private'
    ]
  })
);

app.get(
  '/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`http://localhost:3000/?code=${req.user}`);
  }
);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
