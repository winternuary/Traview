import React from "react";
import * as S from "./style";
import Logo from "../../assets/TraviewLogo.svg";

export const Header = () => {
  return (
    <S.HeaderLayout>
      <S.SearchBarWrapper>
        <S.SearchInput type="text" placeholder="검색어를 입력하세요..." />
        <S.SearchButton>검색</S.SearchButton>
      </S.SearchBarWrapper>
    </S.HeaderLayout>
  );
};
