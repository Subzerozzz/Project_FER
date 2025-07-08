import React, { useState, useRef } from 'react';
import { FaHeart } from 'react-icons/fa';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import favoriteSongs from './favorite-data';


const Favorite = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = (index) => {
    if (currentSongIndex === index) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Bài Hát Yêu Thích</h2>
      <ul className="space-y-2">
        {favoriteSongs.map((song, index) => (
          <li
            key={song.id}
            className="relative flex items-center justify-between bg-gray-800 rounded-lg px-4 py-2"
          >
            <div className="flex items-center gap-4 w-[300px]">
              <button onClick={() => togglePlay(index)} className="text-white">
                {currentSongIndex === index && isPlaying ? (
                  <BsPauseFill size={40} />
                ) : (
                  <BsFillPlayFill size={40} />
                )}
              </button>
              <img
                src={song.image}
                alt="cover"
                className="w-10 h-10 rounded object-cover"
              />
              <p className="font-semibold">{song.title}</p>
            </div>

            <p className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-400">
              {song.artist}
            </p>

            <div className="flex items-center gap-2 w-[150px] justify-end">
              <span className="text-gray-400">{song.duration}</span>
              <FaHeart className="text-blue-500" />
            </div>
          </li>
        ))}
      </ul>

      {currentSongIndex !== null && (
        <audio
          ref={audioRef}
          src={favoriteSongs[currentSongIndex].audio}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default Favorite;
