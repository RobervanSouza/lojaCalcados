// Header.tsx
import React from "react";
import * as S from "./headerStyled";
import Logo from "../../img/logo.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <S.StyledHeader>
        <S.StyledLogo>
          <div>
            <Image
              src={Logo}
              alt="Logo da Loja de Sapatos"
              width={120}
              height={60}
            />
          </div>
        </S.StyledLogo>
      </S.StyledHeader>
    </div>
  );
};

export default Header;
