import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardInfo } from "../../../components/common/Card/CardInfo";

export const Section1 = () => {
  const { singerID } = useParams();

  const [dataFinal, setDataFinal] = useState();

  useEffect(() => {
    axios.get(`http://localhost:9999/singers/${singerID}`).then((res) => {
      setDataFinal(res.data);
    });
  }, []);

  return (
    <>
      {dataFinal && (
        <>
          <CardInfo
            image={dataFinal.image}
            title={dataFinal.title}
            description={dataFinal.description}
          />
        </>
      )}
    </>
  );
};
