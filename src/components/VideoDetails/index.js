import React from 'react';
import './index.css';

const VideoDetail = () => {
  const trailerId = 'hl1U0bxTHbY'; // Rick and Morty trailer

  return (
    <div className="video-detail">
      <div className="video-bg">
        <iframe
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${trailerId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Rick and Morty Trailer"
        />
        <div className="black-overlay" />
      </div>

      <div className="video-content">
        <h1 className="title">Rick and Morty</h1>
        <p className="subtitle">Watch anywhere. Cancel anytime.</p>
        <div className="email-form">
          <input type="email" placeholder="Email address" />
          <button>Join Now</button>
        </div>
        <p className="note">Plans starting at ₹149</p>
      </div>
    </div>
  );
};

export default VideoDetail;
