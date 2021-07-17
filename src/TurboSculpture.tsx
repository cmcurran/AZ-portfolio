import React, { useState, useMemo } from "react";
import styled from "@emotion/styled";
import { Header } from "./Components/Header";
import { SectionWithHeader } from "./Components/SectionWithHeader";
import { NavLarge, NavSmall } from "./Components/Nav";

import { useScrollPosition } from "./UseScrollPosition.js";
import { RouteComponentProps } from "@reach/router";
import { turboSculpture } from "./Copy";
import marleyMaps from "./Images/marleyMaps.png";
import { css, Global } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";
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
        <GlobalStyles />
        <Global styles={turboSculptureGlobalStyles} />
        <Header text={turboSculpture.header} />
        <NavSmall content={turboSculpture.nav} show={hideOnScroll} />
        <ImgWrapper>
          <img
            src={marleyMaps}
            style={{ width: "90%" }}
            alt="A Google Maps screenshot of the Bob Marley monument in Banatski Sokolac, dated July 2013."
          />
        </ImgWrapper>

        <Wrapper>
          <NavWrapper>
            <NavLarge
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
                  header={{
                    header: section.header.title,
                    preHeader: section.header.preHeader,
                  }}
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
  max-width: 100%;

  @media (max-width: 749px) {
    padding: 26vh 8vw 10vh 8vw;
    padding: calc(var(--vh, 1vh) * 26) calc(var(--vw, 1vw) * 8)
      calc(var(--vh, 1vh) * 10) calc(var(--vw, 1vw) * 8);
  }

  @media (min-width: 750px) {
    width: 55%;
  }
`;

const OuterWrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;

  @media (min-width: 750px) {
    background-image: linear-gradient(90deg, #03ff54 6%, #f0f0f0 26%);
  }
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
    padding: 0 8vw;
    padding: 0 calc(var(--vw, 1vw) * 8);
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const turboSculptureGlobalStyles = css`
  em,
  i {
    font-family: "SuisseWorks";
    font-style: italic;
    font-weight: 400;
  }

  strong {
    font-family: "Suisse";
    font-style: normal;
    font-weight: 600;
  }

  .endNote {
    color: #03ff54;
    cursor: help;
  }

  *::selection {
    background-color: #03ff54;
  }
  .endNote::selection {
    background: black;
  }
`;
