import React from "react";
import styled from "styled-components";
import { NavLarge } from "./Nav";

export const Header = ({
  text,
}: {
  text: { top: string[]; mid: string; bottom: string };
}) => {
  return (
    <Wrapper>
      <div>
        <div>
          <Top>{text.top[0]}</Top>
          <TopAnd>{text.top[1]}</TopAnd>
        </div>
        <Mid>{text.mid}</Mid>
        <Bottom>{text.bottom}</Bottom>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 8.858vw;
  font-size: calc(var(--vw, 1vw) * 8.858);

  padding: 0 4vw;
  padding: 0 calc(var(--vw, 1vw) * 4);

  @media (max-width: 749px) {
    padding: 0 4vw;
    padding: 0 calc(var(--vw, 1vw) * 4);
  }
`;

const Top = styled.span`
  font-family: "Suisse";
`;

const TopAnd = styled.span`
  color: #00ff29;
  font-family: "Suisse";
`;

const Mid = styled.div`
  font-family: "SuisseWorks";
`;

const Bottom = styled.div`
  font-size: 3.387vw;
  font-size: calc(var(--vw, 1vw) * 3.387);
  font-family: "SuisseWorksItalic";
`;
