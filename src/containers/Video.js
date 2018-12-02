import React, { useState, useEffect } from 'react';

import Preloader from '../components/Preloader';
import Row from '../components/Row';
import Col from '../components/Col';
import { VideoPlayer } from '../components/Players';
import ContentHeader from '../components/ContentHeader';
import Title from '../components/Title';
import { AlbumLink, ArtistLink } from '../components/Links';
import Info from '../components/Info';

import { setPageTitle } from '../helpers';

import { getVideo } from '../api';

export default function Video(props) {
  const { id } = props.match.params;

  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideo(id).then(data => {
      data = data.results[0];

      setVideo(data);
      setPageTitle(`Video: ${data.trackName}`);
    });

    return null;
  }, []);

  return video ? (
    <Row className="video">
      <Col className="primary">
        <VideoPlayer value={video} />
      </Col>

      <Col className="secondary">
        <ContentHeader type="video" isVideo>
          <Title title={video.trackName} explicit={video.trackExplicitness} />
          {video.collectionId && <AlbumLink value={video} />}
          <ArtistLink value={video} />
          <Info value={video} />
        </ContentHeader>
      </Col>
    </Row>
  ) : (
    <Preloader />
  );
}
