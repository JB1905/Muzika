const MUSIC_API = 'https://itunes.apple.com/';
const LYRICS_API = 'https://api.lyrics.ovh/v1/';

export const searchSongs = (query, callback) => {
  fetch(`${MUSIC_API}search?term=${query}&entity=song&limit=12`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const searchAlbums = (query, callback) => {
  fetch(`${MUSIC_API}search?term=${query}&entity=album&limit=16`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const searchVideos = (query, callback) => {
  fetch(`${MUSIC_API}search?term=${query}&entity=musicVideo&limit=8`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const searchArtists = (query, callback) => {
  fetch(`${MUSIC_API}search?term=${query}&entity=musicArtist`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const listSongs = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}&entity=song&limit=12`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const listAlbums = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}&entity=album&limit=16`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const listVideos = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}&entity=musicVideo&limit=8`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const song = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const lyrics = (artist, album, callback) => {
  fetch(`${LYRICS_API}${artist}/${album}`)
    .then(res => res.json())
    .then(data => callback({ data: data.lyrics }))
    .catch(err => callback({ data: err }));
};

export const album = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}&entity=song`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const video = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}&entity=album`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const musicItems = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const artist = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};
