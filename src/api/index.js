const MUSIC_API = 'https://itunes.apple.com/';
const LYRICS_API = 'https://api.lyrics.ovh/v1/';

let res, data;

export const getSearch = async query => {
  res = await fetch(
    `${MUSIC_API}search?term=${query.term}&entity=${query.entity}&limit=${
      query.limit
    }`
  );

  data = await res.json();

  return data;
};

export const getList = async value => {
  res = await fetch(
    `${MUSIC_API}lookup?id=${value.id}&entity=${value.entity}&limit=${
      value.limit
    }`
  );

  data = await res.json();

  return data;
};

export const getSong = async id => {
  res = await fetch(`${MUSIC_API}lookup?id=${id}`);
  data = await res.json();

  return data;
};

export const getAlbum = async id => {
  res = await fetch(`${MUSIC_API}lookup?id=${id}&entity=song`);
  data = await res.json();

  return data;
};

export const getVideo = async id => {
  res = await fetch(`${MUSIC_API}lookup?id=${id}&entity=album`);
  data = await res.json();

  return data;
};

export const getArtist = async id => {
  res = await fetch(`${MUSIC_API}lookup?id=${id}`);
  data = await res.json();

  return data;
};

export const getLyrics = async (artist, album) => {
  res = await fetch(`${LYRICS_API}${artist}/${album}`);
  data = await res.json();

  return data;
};
