"use client";

import Audio from "react-h5-audio-player";

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  return (
    <div>
      <Audio className="rounded-md" src={src} />
    </div>
  );
};

export default AudioPlayer;
