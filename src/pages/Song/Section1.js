import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardInfo } from "../../components/common/Card/CardInfo";

export const Section1 = () => {
  const { songID } = useParams();
  console.log(songID);

  const [dataFinal, setDataFinal] = useState();

  useEffect(() => {
    axios.get(`http://localhost:9999/songs/${songID}`).then((res) => {
      const songDetailRaw = res.data;
      const singerID = songDetailRaw.singerId;

      axios.get("http://localhost:9999/singers").then((res2) => {
        const singerName = singerID.map((id) => {
          return res2.data.find((item) => item.id === id).title;
        });
        const songDetail = { ...songDetailRaw, singerName };
        setDataFinal(songDetail);
      });
    });
  }, []);

  return (
    <>
      {dataFinal && (
        <>
          <CardInfo
            image={dataFinal.image}
            title={dataFinal.title}
            singerName={dataFinal.singerName}
          />
        </>
      )}
    </>
  );
};