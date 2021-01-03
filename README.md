# Muzika

## About

React app build with Spotify API. Muzika allows you search music, display artists, albums, songs (with lyrics & 30s preview), playlists and more

##### Main Features

-

[Open Muzika](https://muzika.now.sh/)

## Prerequisites

- Node.js
- npm/Yarn
- Spotify client ID and client secret

## Setup

##### 1. Clone repo

```sh
$ git clone https://github.com/JB1905/muzika.git
```

##### 2. Go to directory

```sh
$ cd /path/to/muzika
```

##### 3. Set environment variables

- Copy `.env.local.example` file to `.env.local`
- Set environment variables in `.env.local`

### Development

##### 4. Install dependencies

```sh
yarn

# Or use npm
npm i
```

##### 5. Run

```sh
yarn dev

# Or use npm
npm run dev
```

### Production

##### 4. Build image

```sh
docker build -t muzika .
```

##### 5. Run a container with port forwarding

```sh
docker run --rm -p 3000:3000 muzika
```

## Build with

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [SWR](https://swr.vercel.app/)
- [Next Auth](https://next-auth.js.org/)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [axios](https://github.com/axios/axios/)
- [Docker](https://www.docker.com/)
- [Vercel (ZEIT) Now](https://vercel.com/)
- [Spotify API](https://developer.spotify.com/)

## License

This project is licensed under the MIT License © 2018-present Jakub Biesiada
