import React from 'react';

const AlbumInfo = (props) => {
  const name = props.album.name
  const artworkUrl = props.album.artworkUrl
  const artist = props.album.artist.name
  const selectAlbum = props.selectAlbum
  return (
    <div className='album'>
      <a onClick={() => selectAlbum(props.album.id)}>
        <img src={artworkUrl} />
        <p>{name}</p>
        <small>{artist}</small>
      </a>
    </div>
  )
}


export default AlbumInfo;
