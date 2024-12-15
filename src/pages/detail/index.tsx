import { useParams, useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { travelListAtom } from "../../atom/travelAtom";
import { Header } from "../../components";
import * as S from "./style";

export const Detail = () => {
  const { contentid } = useParams<{ contentid: string }>();
  const navigate = useNavigate();
  const travelList = useAtomValue(travelListAtom);
  const travelInfo = travelList.find((info) => info.contentid === contentid);

  if (!travelInfo) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <Header />
      <S.DetailLayout>
        <img
          src={travelInfo.firstimage || "https://via.placeholder.com/300x200"}
          alt={travelInfo.title}
        />
        <h2>{travelInfo.title}</h2>
        <p>{travelInfo.addr1 || "주소 정보 없음"}</p>
        <p>위도: {travelInfo.mapy}</p>
        <p>경도: {travelInfo.mapx}</p>
        <S.BackButton onClick={() => navigate("/")}>뒤로가기</S.BackButton>
      </S.DetailLayout>
    </>
  );
};
