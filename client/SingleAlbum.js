import React from 'react';
import Songs from './Songs'

const SingleAlbum = (props) => {
const albumInProp = props.album
const start = props.start
const currentSong = props.currentSong
const { name, artist, artworkUrl} = albumInProp

return (
    <div className='container'>
          <div id='single-album' className='column'>
            <div className='album'>
              <a>
                <img src={artworkUrl} />
                <p>{name}</p>
                <small>{artist.name}</small>
              </a>
            </div>
            <table id='songs'>
              <tbody>
                <tr className='gray'>
                  <td />
                  <td>#</td>
                  <td>Name</td>
                  <td>Artist</td>
                  <td>Genre</td>
                </tr>
                <Songs album={albumInProp} start={start} currentSong={currentSong}/>
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default SingleAlbum;
