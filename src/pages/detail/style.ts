import styled from "styled-components";

export const DetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff3e0;
  min-height: 100vh;

  img {
    width: 300px;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 26px;
    margin-bottom: 15px;
    color: #f57c00;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  p:nth-of-type(2),
  p:nth-of-type(3) {
    font-weight: bold;
    color: #f57c00;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f57c00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e65100;
  }
`;
