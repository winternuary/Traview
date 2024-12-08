import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./style";

type TravelInfo = {
  contentid: string;
  title: string;
  addr1: string;
  firstimage: string;
  mapx: string;
  mapy: string;
};

export const Main = () => {
  const [travelList, setTravelList] = useState<TravelInfo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTravelInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://apis.data.go.kr/B551011/KorService1/locationBasedList1",
        {
          params: {
            numOfRows: 10,
            pageNo: 1,
            MobileOS: "ETC",
            MobileApp: "TravelApp",
            _type: "json",
            listYN: "Y",
            arrange: "A",
            mapX: "126.97843",
            mapY: "37.56668",
            radius: "1000",
            serviceKey:
              "zx4y0EUfte4M0R0sNg35hPlDB+lTO7fGbsEx3Ztjv5YsVXEklR7mlEsOHvOLrGVZ10acMJRqvwE4qW4/0c8qrg==",
          },
        },
      );

      const items = response.data.response.body.items.item || [];
      setTravelList(items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTravelInfo();
  }, []);

  return (
    <S.MainLayout>
      <S.Title>여행 지역 정보</S.Title>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <S.TravelList>
          {travelList.map((info) => (
            <S.TravelCard key={info.contentid}>
              <img
                src={info.firstimage || "https://via.placeholder.com/300x200"}
                alt={info.title}
              />
              <div>
                <h2>{info.title}</h2>
                <p>{info.addr1 || "주소 정보 없음"}</p>
              </div>
              <button>자세히 보기</button>
            </S.TravelCard>
          ))}
        </S.TravelList>
      )}
    </S.MainLayout>
  );
};
