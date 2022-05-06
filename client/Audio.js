import React, { Component } from 'react';
import Main from './Main'; //import main component since props are passed to it

// this file creates the html5 Audio element
const AUDIO = document.createElement('audio');

// Some utility functions
const mod = (num, m) => ((num % m) + m) % m;

//
const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map((song) => song.id).indexOf(currentSong.id); //map func returns array of all the song ids in the currentSongList of the album user is viewing, then we use the currentSong's id and find it's index in this returned mapped array, this will be the index of the song in the entire song list
  idx = mod(idx + interval, currentSongList.length); //find idx of new song
  const next = currentSongList[idx]; //grab new song obj
  return [next, currentSongList]; //returns an array containing the new song object, and the song list of the album again because
};

//creates a stateful Audio react component that won't show up visually in the document
export default class Audio extends Component {
  constructor() {
    super();
    this.state = {
      currentSong: {},
      currentSongList: [], //song list use to keep track of indexes of songs for changing/skipping
      isPlaying: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleOne = this.toggleOne.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    //HTMLMediaElement: ended event
    //The ended event is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.
    //event listener added after mount, 'ended' event will trigger next() func which plays next song
    AUDIO.addEventListener('ended', () => this.next());
  }

  play() {
    //func just initates song to play and sets state isPLaying variable to true- a song is currently playing
    //does not get passed down as prop to any child components but doesnt need to since its referenced in
    //other methods that do get passed down, and it has it's 'this' context bound to Audio component
    AUDIO.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    //pausing functionality, this func will get called when user clicks pause button on player footer
    //or when a new song is chosen and the one that was playing needs to be paused first, resets state to
    //indicate a song is no longer playing.
    AUDIO.pause();
    this.setState({ isPlaying: false });
  }

  load(currentSong, currentSongList) {
    //this func will retrieve the url to fetch the media, and load it up, but the startSong func
    //will take care of triggering the playback

    AUDIO.src = currentSong.audioUrl; //The address or URL of the a media resource that is to be considered.
    AUDIO.load(); //Resets the audio or video object and loads a new media resource.
    this.setState({
      currentSong: currentSong,
      currentSongList: currentSongList,
    });
  }

  startSong(song, list) {
    //this func is invoked when user chooses a new song from song list, or skips to previous or next song
    this.pause(); //stop current playing song if one is playing
    this.load(song, list); //update AUDIO.src/load/update state
    this.play();
  }

  toggleOne(selectedSong, selectedSongList) {
    //this func gets passed down all the way to Songs.js and is an onclick handler
    //on each individual song(row), on the play button,
    //takes it the selected song obj, and the obj of ALL the songs on the album that was being viewed

    //if the user selected a new song to play and not the same song that is already playing
    //then we invoke the startSong func which will first pause, then load, then play the new song, and pass in the entire list of songs of this album
    if (selectedSong.id !== this.state.currentSong.id) {
      this.startSong(selectedSong, selectedSongList);
    } else {
      //in this case the user did click on the same song that is playing and instead the song will toggle between play and pause,
      this.toggle();
    }
  }

  toggle() {
    //callback passed down to Player.js and is the pause/play button
    //if a song is playing then itll call pause method, if its paused itll call play method
    if (this.state.isPlaying) this.pause();
    else this.play();
  }

  next() {
    this.startSong(...skip(1, this.state));
  }

  prev() {
    this.startSong(...skip(-1, this.state));
  }

  render() {
    return (
      <Main
        {...this.state}
        prev={this.prev}
        next={this.next}
        toggleOne={this.toggleOne}
        toggle={this.toggle}
      />
    );
  }
}
