import axios from "axios";

const API_ENDPOINT = "http://apis.data.go.kr/B551011/KorService1/areaCode1";
const API_KEY =
  "zx4y0EUfte4M0R0sNg35hPlDB%2BlTO7fGbsEx3Ztjv5YsVXEklR7mlEsOHvOLrGVZ10acMJRqvwE4qW4%2F0c8qrg%3D%3D";

const fetchData = async () => {
  try {
    const response = await axios.get(API_ENDPOINT, {
      params: {
        serviceKey: API_KEY,
        numOfRows: 10,
        pageNo: 1,
        MobileOS: "ETC",
        MobileApp: "TestApp",
        _type: "json",
      },
    });

    console.log("응답 데이터:", response.data);
    return response.data;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    throw error;
  }
};

fetchData()
  .then((data) => {
    console.log("API 호출 성공:", data);
  })
  .catch((error) => {
    console.error("API 호출 실패:", error);
  });
