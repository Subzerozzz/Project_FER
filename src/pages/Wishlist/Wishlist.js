import axios from "axios";
import { useEffect, useState } from "react";
import { SongItem2 } from "../../components/common/Song/SongItem2";
import { Title } from "../../components/common/Title/Title";

export const Wishlist = () => {
  const [data, setData] = useState([]);

  const handleData = async () => {
    const accountId = sessionStorage.getItem("account");
    //call toi api wishlist
    const { data: wishlist } = await axios.get(
      "http://localhost:9999/wishlists"
    );
    const songWithAccountId = wishlist.filter(
      (item) => item.accountId == accountId
    );

    //lay ra cac bai hat chi tiet
    const { data: song } = await axios.get(`http://localhost:9999/songs`);
    const songArray = songWithAccountId.map((item) => {
      return song.find((item2) => item2.id == item.songId);
    });
    axios.get("http://localhost:9999/singers").then((res2) => {
      const songArray2 = songArray.map((item) => {
        const singerId = item.singerId;
        let singerString = singerId.map((id) => {
          return res2.data.find((item) => item.id == id).title;
        });

        const newItem = {
          ...item,
          link: `/song/${item.id}`,
          singer: singerString,
        };
        return newItem;
      });
      setData(songArray2);
    });
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <div>
        <Title text="Bài Hát Yêu Thích" />

        <div>
          {data.length > 0 ? (
            <>
              {data.map((item, index) => (
                <div className="mb-[10px]">
                  <SongItem2 key={index} {...item} />
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
