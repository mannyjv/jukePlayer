import React from 'react';
import axios from 'axios';
import SideBar from './SideBar';
import SingleAlbum from './SingleAlbum';
import AllAlbums from './AllAlbums';
import Player from './Player';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {},
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/albums');
      const albums = res.data;
      this.setState({ albums });
    } catch (err) {
      console.log('There was a problem getting the albums!');
    }
  }

  async selectAlbum(albumId) {
    const res = await axios.get(`/api/albums/${albumId}`);
    const selectedAlbum = res.data;
    this.setState({ selectedAlbum });
  }

  deselectAlbum() {
    this.setState({
      selectedAlbum: {},
    });
  }

  render() {
    const { next, prev, toggle, toggleOne, currentSong, isPlaying } =
      this.props;
    return (
      <div id="main" className="row container">
        {/* The visible components start here */}
        <SideBar deselectAlbum={this.deselectAlbum} />
        <div className="container">
          {this.state.selectedAlbum.id ? (
            <SingleAlbum
              album={this.state.selectedAlbum}
              toggleOne={toggleOne}
              isPlaying={isPlaying}
              currentSong={currentSong}
            />
          ) : (
            <AllAlbums
              albums={this.state.albums}
              selectAlbum={this.selectAlbum}
            />
          )}
        </div>
        <Player prev={prev} next={next} toggle={toggle} isPlaying={isPlaying} />
      </div>
    );
  }
}
