import React from 'react';

const Songs = (props) => {
  const { songs, toggleOne, currentSong, isPlaying, artist } = props;
  return (
    <table id="songs">
      <tbody>
        <tr className="gray">
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        {songs.map((song, idx) => {
          const isCurrentlyPlaying = currentSong.id === song.id && isPlaying;

          return (
            <tr key={song.id} className={isCurrentlyPlaying ? 'active' : ''}>
              <td>
                <i
                  className={isCurrentlyPlaying ? '' : 'fa fa-play-circle'}
                  onClick={() => toggleOne(song, songs)}
                />
              </td>
              <td>{idx + 1}</td>
              <td>{song.name}</td>
              <td>{artist.name}</td>
              <td>{song.genre}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Songs;
