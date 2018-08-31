const MUSIC_API = 'https://itunes.apple.com/';
const LYRICS_API = 'https://api.lyrics.ovh/v1/';

let res, data;

export async function search(query) {
  res = await fetch(
    `${MUSIC_API}search?term=${query.term}&entity=${query.entity}&limit=${
      query.limit
    }`
  );

  data = await res.json();

  return data;
}

export async function list(value) {
  res = await fetch(
    `${MUSIC_API}lookup?id=${value.id}&entity=${value.entity}&limit=${
      value.limit
    }`
  );

  data = await res.json();

  return data;
}

export async function song(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}`);
  data = await res.json();

  return data;
}

export async function album(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}&entity=song`);
  data = await res.json();

  return data;
}

export async function video(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}&entity=album`);
  data = await res.json();

  return data;
}

export async function artist(id) {
  res = await fetch(`${MUSIC_API}lookup?id=${id}`);
  data = await res.json();

  return data;
}

export async function lyrics(artist, album) {
  res = await fetch(`${LYRICS_API}${artist}/${album}`);
  data = await res.json();

  return data;
}
