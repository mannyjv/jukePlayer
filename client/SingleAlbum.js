import React from 'react';
import Songs from './Songs';
import AlbumInfo from './AlbumInfo';

const SingleAlbum = (props) => {
  const { album, toggleOne, isPlaying, currentSong } = props;

  return (
    <div id="single-album" className="column">
      <AlbumInfo album={album} />
      <Songs
        songs={album.songs}
        artist={album.artist}
        toggleOne={toggleOne}
        currentSong={currentSong}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default SingleAlbum;
