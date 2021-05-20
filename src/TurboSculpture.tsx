import { useState, useMemo } from "react";
import styled from "styled-components";
import { Header } from "./Components/Header";
import SectionWithHeader from "./Components/SectionWithHeader";
import { Nav } from "./Components/Nav";

import { useScrollPosition } from "./UseScrollPosition.js";
import { RouteComponentProps } from "@reach/router";
import { turboSculpture } from "./Copy";
import marleyMaps from "./Images/marleyMaps.png";
//TODO debounce window listeners?

// if on small view and nav open -> resize over 750 px -> setOpen(false)

//hover [1]

//turn off scroll position on larger screens

export const TurboSculpture = (_props: RouteComponentProps) => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return useMemo(
    () => (
      <OuterWrapper onClick={() => setHideOnScroll(true)}>
        <Header text={turboSculpture.header} />
        <ImgWrapper>
          <img src={marleyMaps} style={{ width: "90%" }} />
        </ImgWrapper>

        <Wrapper>
          <NavWrapper>
            <Nav
              content={turboSculpture.nav}
              // show={hideOnScroll}
            />
          </NavWrapper>
          <BodyWrapper>
            {turboSculpture.sections.map((section, i) => {
              return (
                <SectionWithHeader
                  key={`SectionWithHeader${i}`}
                  section={section.header.section}
                  header={section.header.title}
                  variant={section.body.variant}
                  body={section.body.copy}
                />
              );
            })}
          </BodyWrapper>
        </Wrapper>
      </OuterWrapper>
    ),
    [hideOnScroll]
  );
};
// linear-gradient(90deg,#03ff54 6%,#F0f0f0 26%)

const BodyWrapper = styled.div`
  padding: 26vh 4vw 10vh 4vw;
  padding: calc(var(--vh, 1vh) * 26) calc(var(--vw, 1vw) * 4)
    calc(var(--vh, 1vh) * 10) calc(var(--vw, 1vw) * 4);

  @media (max-width: 749px) {
    padding: 26vh 4vw 10vh 4vw;
    padding: calc(var(--vh, 1vh) * 26) calc(var(--vw, 1vw) * 4)
      calc(var(--vh, 1vh) * 10) calc(var(--vw, 1vw) * 4);
  }
`;

const OuterWrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #03ff54 6%, #f0f0f0 26%);
`;

const NavWrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  align-self: flex-start;
`;

const ImgWrapper = styled.div`
  padding: 0 4vw;
  padding: 0 calc(var(--vw, 1vw) * 4);
  display: flex;
  justify-content: center;
  @media (max-width: 749px) {
    padding: 0 4vw;
    padding: 0 calc(var(--vw, 1vw) * 4);
  }
`;

const Wrapper = styled.div`
  display: flex;
`;
