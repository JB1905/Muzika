import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Lyrics = styled.section`
  font-size: 1.6rem;
  margin: 20px 0;
`;

interface Props {}

export default ({ artist, song }: any) => {
  const [lyrics, setLyrics] = useState<any>();

  useEffect(() => {
    const getLyrics = async () => {
      try {
        const { data } = await axios.get(
          `https://api.lyrics.ovh/v1/${artist.toLowerCase()}/${song.toLowerCase()}`
        );

        setLyrics(data.lyrics);
      } catch {}
    };

    getLyrics();
  }, [artist, song]);

  return (
    <Lyrics>
      {lyrics?.split('\n').map((line: any, index: any) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </Lyrics>
  );
};
