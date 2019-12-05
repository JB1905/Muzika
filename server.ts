const express = require("express");
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const next = require("next");
require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";

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
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/callback"
    },
    (accessToken, refreshToken, expires_in, profile, done) => {
      return done(null, accessToken);
    }
  )
);

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(passport.initialize());
    server.use(passport.session());

    server.get(
      "/get_spotify_uri",
      passport.authenticate("spotify", {
        scope: [
          "user-top-read",
          "user-read-recently-played",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-modify-playback-state",
          "user-library-modify",
          "user-library-read",
          "streaming",
          "app-remote-control",
          "user-read-private",
          "user-read-birthdate",
          "user-read-email",
          "user-follow-modify",
          "user-follow-read",
          "playlist-modify-public",
          "playlist-read-collaborative",
          "playlist-read-private",
          "playlist-modify-private"
        ]
      })
    );

    server.get(
      "/callback",
      passport.authenticate("spotify", { failureRedirect: "/get_spotify_uri" }),
      (req, res) => {
        res.redirect(`/?code=${req.user}`);
      }
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, "0.0.0.0", err => {
      if (err) throw err;

      console.log(`Ready on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err.stack);

    process.exit(1);
  });
