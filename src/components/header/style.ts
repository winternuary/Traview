import styled from "styled-components";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  height: 60px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

export const Logo = styled.img`
  height: 40px;
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
  padding: 8px 16px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
