'use client'

import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
  duration: string;
  captionsSrc?: string;
}

const PlayIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

const PauseIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
  </svg>
);

const ProgressBar = ({ progress, onClick }: { progress: number; onClick: (e: React.MouseEvent<HTMLDivElement>) => void }) => (
  <div 
    className="h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden cursor-pointer"
    onClick={onClick}
    role="slider"
    tabIndex={0}
    aria-valuenow={progress}
    aria-valuemin={0}
    aria-valuemax={100}
    onKeyDown={(e) => {
      if (e.key === 'ArrowRight') {
        onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      } else if (e.key === 'ArrowLeft') {
        onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }
    }}
  >
    <div 
      className="h-full bg-black dark:bg-white rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const PlayButton = ({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white transition-colors"
  >
    {isPlaying ? <PauseIcon /> : <PlayIcon />}
  </button>
);

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title, duration, captionsSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * audio.duration;
    
    audio.currentTime = newTime;
    setProgress(percentage * 100);
  };

  return (
    <div className="w-full max-w-md bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg rounded-2xl p-4 border border-zinc-200 dark:border-white/10">
      <audio ref={audioRef} src={src}>
        <track kind="captions" src="" label="English captions" />
      </audio>
      
      <div className="flex items-center gap-3 mb-3">
        <PlayButton isPlaying={isPlaying} onClick={togglePlay} />
        
        <div className="flex-1">
          <h3 className="text-sm text-black dark:text-white">{title}</h3>
          <p className="text-xs text-black/60 dark:text-white/60">
            {formatTime(currentTime)} / {duration}
          </p>
        </div>
      </div>

      <ProgressBar progress={progress} onClick={handleProgressClick} />
    </div>
  );
};

export default AudioPlayer; 