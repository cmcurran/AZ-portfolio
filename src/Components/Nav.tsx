import React, { useState } from "react";
import styled from "styled-components";
import { IconHamburger, IconX } from "./NavIcons";

// "header" | "subheader" | "list" | "reference";
export const NavLarge = ({
  content,
}: {
  content: {
    variant: string;
    copy: React.ReactNode;
    linkTo?: string;
  }[];
}) => {
  return (
    <Wrapper>
      {content.map((navItem) => {
        switch (navItem.variant) {
          case "header":
            return <Header>{navItem.copy}</Header>;

          case "subheader":
            return <SubHeader>{navItem.copy}</SubHeader>;

          case "list":
            return <List href={`#${navItem.linkTo}`}>{navItem.copy}</List>;

          case "reference":
            return (
              <Reference href={`#${navItem.linkTo}`}>{navItem.copy}</Reference>
            );

          default:
            return null;
        }
      })}
    </Wrapper>
  );
};

export const NavSmall = ({
  content,
  show,
}: {
  content: {
    variant: string;
    copy: React.ReactNode;
    linkTo?: string;
  }[];
  show: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {!isOpen && (
        <IconWrapper onClick={() => setIsOpen(true)} show={show}>
          <IconHamburger />
        </IconWrapper>
      )}
      <WrapperSmall open={isOpen}>
        <InnerWrapperSmall>
          <NavWrapperSmall>
            {content.map((navItem, i) => {
              switch (navItem.variant) {
                case "header":
                  return <Header key={`navItem${i}`}>{navItem.copy}</Header>;

                case "subheader":
                  return (
                    <SubHeader key={`navItem${i}`}>{navItem.copy}</SubHeader>
                  );

                case "list":
                  return (
                    <List
                      key={`navItem${i}`}
                      href={`#${navItem.linkTo}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {navItem.copy}
                    </List>
                  );

                case "reference":
                  return (
                    <Reference
                      key={`navItem${i}`}
                      href={`#${navItem.linkTo}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {navItem.copy}
                    </Reference>
                  );

                default:
                  return null;
              }
            })}
          </NavWrapperSmall>
        </InnerWrapperSmall>
        <IconWrapper onClick={() => setIsOpen(false)} show={true}>
          <IconX />
        </IconWrapper>
      </WrapperSmall>
    </>
  );
};

const Wrapper = styled.div`
  font-size: 18px;

  padding-right: 8.333vw;
  padding-right: calc(var(--vw, 1vw) * 8.333);
  padding-top: 246.74px;
  padding-left: 6.666vw;
  padding-left: calc(var(--vw, 1vw) * 6.666);

  @media (max-width: 749px) {
    display: none;
  }
`;

const Header = styled.div`
  font-family: "Suisse";
  text-transform: uppercase;
  padding-bottom: 16px;
  font-size: 20px;

  @media (max-width: 750px) {
    font-size: 5.563vw;
    font-size: calc(var(--vw, 1vw) * 5.563);
  }
`;

const SubHeader = styled.div`
  font-family: "Suisse";
  font-style: italic;
  padding-bottom: 8px;

  @media (max-width: 750px) {
    font-size: 5.0069vw;
    font-size: calc(var(--vw, 1vw) * 5.0069);
  }
`;

const Reference = styled.a`
  font-family: "Suisse";
  display: block;
  text-decoration: underline;
  cursor: pointer;
  color: black;
  padding-bottom: 8px;

  @media (max-width: 750px) {
    padding-bottom: 16px;
    font-size: 5.0069vw;
    font-size: calc(var(--vw, 1vw) * 5.0069);
  }

  :hover {
    font-style: italic;
  }
`;

const List = styled(Reference)`
  font-family: "SuisseWorks";
  white-space: nowrap;
  padding-left: 2rem;

  padding-left: 1.666vw;
  padding-left: calc(var(--vw, 1vw) * 1.666);

  @media (max-width: 750px) {
    padding-left: 8vw;
    padding-left: calc(var(--vw, 1vw) * 8);
  }
`;

const WrapperSmall = styled.div<{ open: boolean }>`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.2s ease-in;
  pointer-events: ${({ open }) => !open && "none"};

  padding: 2vw;
  padding: calc(var(--vw, 1vw) * 2);

  background-color: #f0f0f0;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  @media (min-width: 750px) {
    display: none;
  }
`;

const InnerWrapperSmall = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black;
  background-image: linear-gradient(90deg, #03ff54 6%, #f0f0f0 26%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavWrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-left: 12vw;
  padding-left: calc(var(--vw, 1vw) * 12);
`;

const IconWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  cursor: pointer;

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 200ms ${(props) => (props.show ? "ease-in" : "ease-out")};
  transform: ${(props) => (props.show ? "none" : "translate(100%, 0)")};

  top: 6.1vw;
  top: calc(var(--vw, 1vw) * 6.1);

  right: 6.1vw;
  right: calc(var(--vw, 1vw) * 6.1);

  width: 9vw;
  width: calc(var(--vw, 1vw) * 9);

  height: 9vw;
  height: calc(var(--vw, 1vw) * 9);

  @media (min-width: 750px) {
    display: none;
  }
`;
