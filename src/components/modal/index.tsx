import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 400px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #fb8c00;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e65100;
  }
`;

interface ModalProps {
  onClose: () => void;
  onSearch: (filters: {
    keyword: string;
    contentTypeId?: string;
    areaCode?: string;
    sigunguCode?: string;
  }) => void;
}

const FilterModal = ({ onClose, onSearch }: ModalProps) => {
  const [keyword, setKeyword] = useState("");
  const [contentTypeId, setContentTypeId] = useState("");

  const handleSearch = () => {
    onSearch({ keyword, contentTypeId });
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>검색 필터</ModalTitle>
        <Input
          type="text"
          placeholder="키워드 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Select
          value={contentTypeId}
          onChange={(e) => setContentTypeId(e.target.value)}
        >
          <option value="">전체</option>
          <option value="12">관광지</option>
          <option value="14">문화시설</option>
          <option value="15">축제/공연/행사</option>
          <option value="25">여행코스</option>
          <option value="28">레포츠</option>
          <option value="32">숙박</option>
          <option value="38">쇼핑</option>
          <option value="39">음식점</option>
        </Select>

        <Button onClick={handleSearch}>검색</Button>
        <Button onClick={onClose}>닫기</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FilterModal;
