import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 132px;
  background-color: #fff3e0;
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  background-color: #fb8c00;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e65100;
  }
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
  justify-content: space-between;
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
    flex: 1;
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
