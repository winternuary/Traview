import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  height: 60px;
  background-color: #fff3e0;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ced4da;
  border-radius: 4px 0 0 4px;
  outline: none;

  &:focus {
    border-color: #495057;
  }
`;

export const SearchButton = styled.button`
  padding: 7.5px 14.5px;
  font-size: 14px;
  background-color: #fb8c00;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #e65100;
  }
`;
