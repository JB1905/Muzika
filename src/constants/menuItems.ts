import {
  faHeart,
  faGlobe,
  faGuitar,
  faCompactDisc,
  faHeadphones,
  faList,
} from '@fortawesome/free-solid-svg-icons';

export const menuItems = {
  explore: {
    items: [
      {
        title: 'For You',
        link: '/',
        icon: faHeart,
      },
      {
        title: 'Browse',
        link: '/browse',
        icon: faGlobe,
      },
    ],
  },
  library: {
    name: 'Library',
    items: [
      {
        title: 'Artists',
        link: '/',
        icon: faGuitar,
      },
      {
        title: 'Albums',
        link: '/',
        icon: faCompactDisc,
      },
      {
        title: 'Songs',
        link: '/',
        icon: faHeadphones,
      },
      {
        title: 'Playlists',
        link: '/',
        icon: faList,
      },
    ],
  },
};
