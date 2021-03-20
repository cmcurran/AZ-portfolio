import logo from "./logo.svg";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import SectionWithHeader from "./Components/SectionWithHeader";
import Nav from "./Components/Nav";
import Degrowth from "./Copy";

//TODO debounce window listeners?
//Turn off window listeners when scrolled past header on page to stop nav from yeeting away
//possible solution is to not directly take top value from beta --
//take the percentage from offsetTop and window height

//hover [1]

//midview - dropdown nav menu (cavet icon?)
//below 1250 pixels
// increase body to fullwidth
//increase font sizes for all copy

//mobile full screen menu modal fade in

const App = () => {
  const [betaBottom, setBetaBottom] = useState<number | null>(null);

  return (
    <Wrapper>
      <Nav content={Degrowth.nav} betaBottom={betaBottom} />

      <InnerWrapper>
        <Header text={Degrowth.header} setBetaBottom={setBetaBottom} />

        {Degrowth.sections.map((section, i) => {
          if (
            section.body.variant !== "xl" &&
            section.body.variant !== "paragraph" &&
            section.body.variant !== "glossary" &&
            section.body.variant !== "link"
          ) {
            return;
          }
          return (
            <SectionWithHeader
              key={i}
              section={section.header.section}
              header={section.header.title}
              variant={section.body.variant}
              body={section.body.copy}
            />
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 10vw;

  /* padding-top: 4vh; */

  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 55%;
  @media (max-width: 1249px) {
    width: 70%;
  }
`;

export default App;
