import React from 'react';


const Songs = (props) => {
  const album = props.album
  const {songs, artist} = album
  const start = props.start
  const currentSong = props.currentSong

return (
      songs.map((song, idx) => {
          return <tr key={idx} className={song.id === currentSong.id ? 'active' : ''}>
                  <td onClick={() => start(song, song.audioUrl)}><i className='fa fa-play-circle'/></td>
                  <td>{idx + 1}</td>
                  <td>{song.name}</td>
                  <td>{artist.name}</td>
                  <td>{song.genre}</td>
                </tr>
    })
  )
}
export default Songs;

