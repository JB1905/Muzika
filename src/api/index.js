const MUSIC_API = 'https://itunes.apple.com/';
const LYRICS_API = 'https://api.lyrics.ovh/v1/';

let res, data;

export async function getSearch(query) {
  res = await fetch(
    `${MUSIC_API}search?term=${query.term}&entity=${query.entity}&limit=${
      query.limit
    }`
  );

  data = await res.json();

  return data;
}

export async function getList(value) {
  res = await fetch(
    `${MUSIC_API}lookup?id=${value.id}&entity=${value.entity}&limit=${
      value.limit
    }`
  );

  data = await res.json();

  return data;
}

export async function getSong(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}`);
  data = await res.json();

  return data;
}

export async function getAlbum(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}&entity=song`);
  data = await res.json();

  return data;
}

export async function getVideo(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}&entity=album`);
  data = await res.json();

  return data;
}

export async function getArtist(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}`);
  data = await res.json();

  return data;
}

export async function getLyrics(artist, album) {
  res = await fetch(`${LYRICS_API}${artist}/${album}`);
  data = await res.json();

  return data;
}
