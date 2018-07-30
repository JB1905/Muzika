const music = 'https://itunes.apple.com/';
const songLyrics = 'https://api.lyrics.ovh/v1/';
const concerts = null;
const socialMedia = [
  { facebook: null },
  { twitter: null },
  { instagram: null }
];

export const artist = (id, callback) => {
  fetch(`${music}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }));
};

export const song = (id, callback) => {
  fetch(`${music}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }));
};

export const lyrics = (artist, album, callback) => {
  fetch(`${songLyrics}${artist}/${album}`)
    .then(res => res.json())
    .then(data => callback({ data: data.lyrics }))
    .catch(err => callback({ data: null }));
};

export const album = (id, callback) => {
  fetch(`${music}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data.results }));
};

export const video = (id, callback) => {
  fetch(`${music}lookup?id=${id}`)
    .then(res => res.json())
    .then(data => callback({ data: data }));
};

export const search = (value, callback) => {
  fetch(
    `${music}search?term=${value}&entity=musicArtist,musicTrack,album,song,mix,musicVideo`
  )
    .then(res => res.json())
    .then(data => callback({ data: data.results }));
};

export const facebook = id => {
  fetch(`${socialMedia.facebook}${id}`)
    .then(res => res.json())
    .then(data => console.log(data));
};

export const twitter = id => {
  fetch(`${socialMedia.twitter}${id}`)
    .then(res => res.json())
    .then(data => console.log(data));
};

export const instagram = id => {
  fetch(`${socialMedia.instagram}${id}`)
    .then(res => res.json())
    .then(data => console.log(data));
};

export const tickets = id => {
  fetch(`${concerts}${id}`)
    .then(res => res.json())
    .then(data => console.log(data));
};
