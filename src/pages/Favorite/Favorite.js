import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { BsFillPlayFill } from 'react-icons/bs';

const songs = [
  {
    title: 'Nơi Này Có Anh',
    artist: 'Sơn Tùng M-TP',
    duration: '4:22',
    image: '/demo/home/image-1.png',
  },
  {
    title: 'Em Của Ngày Hôm Qua',
    artist: 'Sơn Tùng M-TP',
    duration: '3:45',
    image: '/demo/home/image-2.png',
  },
  {
    title: 'Có Chắc Yêu Là Đây',
    artist: 'Sơn Tùng M-TP',
    duration: '4:10',
    image: '/demo/home/image-3.png',
  },
  {
    title: 'Chúng Ta Không Thuộc Về Nhau',
    artist: 'Sơn Tùng M-TP',
    duration: '4:01',
    image: '/demo/home/image-4.png',
  },
  {
    title: 'Chạy Ngay Đi',
    artist: 'Sơn Tùng M-TP',
    duration: '4:01',
    image: '/demo/home/image-5.png',
  },
];

export const Favorite = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Bài Hát Yêu Thích</h2>
      <ul className="space-y-2">
        {songs.map((song, index) => (
          <li
            key={index}
            className="relative flex items-center justify-between bg-gray-800 rounded-lg px-4 py-2"
          >
            {/* Trái: Nút + Ảnh + Tên bài */}
            <div className="flex items-center gap-4 w-[300px]">
              <button className="text-white">
                <BsFillPlayFill size={40} />
              </button>
              <img
                src={song.image}
                alt="cover"
                className="w-10 h-10 rounded object-cover"
              />
              <p className="font-semibold">{song.title}</p>
            </div>

            {/* Giữa: Tên ca sĩ */}
            <p className="absolute left-1/2 transform -translate-x-1/2 text-sm text-gray-400">
              {song.artist}
            </p>

            {/* Phải: Thời gian + icon heart */}
            <div className="flex items-center gap-4 w-[150px] justify-end">
              <span className="text-gray-400">{song.duration}</span>
              <FaHeart className="text-blue-400" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
