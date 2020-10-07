export interface RootObject {
  message: string;
  playlists: Playlists;
}

interface Playlists {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

interface Item {
  collaborative: boolean;
  description: string;
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color?: any;
  public?: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

interface Tracks {
  href: string;
  total: number;
}

interface Owner {
  display_name: string;
  external_urls: Externalurls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Image {
  height?: any;
  url: string;
  width?: any;
}

interface Externalurls {
  spotify: string;
}
