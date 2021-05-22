import {
  // Link,
  RouteComponentProps,
} from "@reach/router";
import styled from "styled-components";

export const Home = (_props: RouteComponentProps) => (
  <Wrapper>
    <InnerWrapper>
      <Header>Major redesign on the way.</Header>

      <div style={{ padding: "1rem" }} />

      <div>
        In the meantime, check out my ongoing projects at{" "}
        <ExternalLink href="https://degrowthtoolbox.net/" target="_blank">
          degrowthtoolbox.net
        </ExternalLink>
        .
      </div>
      <div style={{ padding: "1rem" }} />

      <div>Questions? Comments?</div>
      <div>Opinions no-one else wants to hear?</div>
      <div>Just feeling lonely?</div>

      <div style={{ padding: ".5rem" }} />

      <div>
        Pester me at{" "}
        <ExternalLink
          href="mailto:papademetriou.alexandra@gmail.com"
          target="_blank"
        >
          papademetriou.alexandra@gmail.com
        </ExternalLink>
        .
      </div>
    </InnerWrapper>
    {/* <LinkStyled to="turbo-sculpture">Turbo-Sculpture</LinkStyled> */}
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  width: 28%;
  /* min-width: 600px; */
  font-family: "MG Mono";
  display: flex;
  flex-direction: column;
  font-size: 18px;

  @media (max-width: 749px) {
    width: 80%;
    /* min-width: 300px; */
    font-size: 14px;
  }
`;

const Header = styled.h1`
  font-size: 32px;
  font-weight: normal;
  @media (max-width: 749px) {
    font-size: 26px;
  }
`;

// const LinkStyled = styled(Link)`
//   color: #00ff29;
//   font-family: "MG Mono";
//   text-decoration: none;
// `;

const ExternalLink = styled.a`
  color: #00ff29;
  font-family: "MG Mono";
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;
