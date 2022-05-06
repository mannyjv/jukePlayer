import React from 'react';

const Player = (props) => {
  const { prev, toggle, next, isPlaying } = props;

  return (
    <div id="player-container">
      <div id="player-controls">
        <div className="row center">
          <i className="fa fa-step-backward" onClick={prev}></i>
          <i
            className={isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
            onClick={toggle}
          ></i>
          <i className="fa fa-step-forward" onClick={next}></i>
        </div>
      </div>
    </div>
  );
};

export default Player;
