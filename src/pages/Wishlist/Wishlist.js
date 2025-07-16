import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { SongItem2 } from "../../components/common/Song/SongItem2";
import { Title } from "../../components/common/Title/Title";

export const Wishlist = () => {
  const [songs, setSongs] = useState([]);
  const [singers, setSingers] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    axios.get("http://localhost:9999/songs").then((res) => setSongs(res.data));
    axios.get("http://localhost:9999/singers").then((res) => setSingers(res.data));
  }, []);

  const getSingerNames = (ids) => 
  Array.isArray(ids)
    ? ids.map(id => singers.find(s => s.id === String(id))?.title || "Unknown")
    : [];


  const togglePlay = (song) => {
    if (currentSong?.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
      setTimeout(() => {
        audioRef.current?.load();
        audioRef.current?.play().catch((err) => console.error(err));
      }, 100);
    }
  };

  return (
    <div className="p-6">
      <Title text="Bài Hát Yêu Thích" />
      <div className="space-y-3">
        {songs.map((song) => (
          <SongItem2
            key={song.id}
            image={song.image}
            title={song.title}
            singerName={getSingerNames(song.singerId)}
            time={"4:00"}
            link={`/song/${song.id}`}
            singerId={song.singerId.join(", ")}
            isPlaying={currentSong?.id === song.id && isPlaying}
            onTogglePlay={() => togglePlay(song)}
          />
        ))}
      </div>

      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};
