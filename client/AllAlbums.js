import React from 'react';
import AlbumInfo from "./AlbumInfo"

const AllAlbums = (props) => {
  const albums = props.albums
  const selectAlbum = props.selectAlbum
  return (
    <div id='albums' className='row wrap'>
      {
        albums.map(album => <AlbumInfo album={album} key={album.id} selectAlbum={selectAlbum} />)
      }
    </div>
  )
}


export default AllAlbums;


