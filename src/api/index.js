const MUSIC_API = 'https://itunes.apple.com/';
const LYRICS_API = 'https://api.lyrics.ovh/v1/';

export const search = (query, callback) => {
  fetch(
    `${MUSIC_API}search?term=${query.term}&entity=${query.entity}&limit=${
      query.limit
    }`
  )
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};

export const list = (data, callback) => {
  fetch(
    `${MUSIC_API}lookup?id=${data.id}&entity=${data.entity}&limit=${data.limit}`
  )
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

export const artist = (id, callback) => {
  fetch(`${MUSIC_API}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }))
    .catch(err => callback({ data: err }));
};
