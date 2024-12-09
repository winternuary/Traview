import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff3e0;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 20px;
`;

export const TravelList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
export const TravelCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 상단 콘텐츠와 하단 버튼 사이를 채움 */
  width: 300px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    flex: 1; /* 내부 콘텐츠가 버튼 위 공간을 채우도록 설정 */
    padding: 15px;
  }

  h2 {
    font-size: 1.25rem;
    color: #495057;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #868e96;
  }

  button {
    margin-top: auto;
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #fb8c00;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0 0 8px 8px;

    &:hover {
      background-color: #f57c00;
    }
  }
`;
