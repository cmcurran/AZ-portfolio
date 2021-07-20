import React from "react";
import styled from "@emotion/styled";
import { turboSculptureEndnotes } from "../../Copy";
const findIndexes = (str: string, searchFor: string) => {
  const indices = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === searchFor) indices.push(i);
  }
  return indices;
};

const embedTitle = (copy: any) => {
  const addTitleToString = (str: string) => {
    const copySubstrings = str.split(/(?=\[)/);

    const newCopy = (
      <>
        {copySubstrings.map((str: string) => {
          if (str.charAt(0) !== "[") {
            return str;
          }
          if (str.charAt(1) === "…") {
            return str;
          }
          return str.charAt(2) === "]" ? (
            <>
              <span
                className="endNote"
                title={turboSculptureEndnotes[`${str[1]}` as const]}
              >
                {str.substr(0, 3)}
              </span>{" "}
              {str.substr(4)}
            </>
          ) : (
            <>
              <span
                className="endNote"
                title={turboSculptureEndnotes[`${str.substr(1, 2)}` as const]}
              >
                {str.substr(0, 4)}
              </span>{" "}
              {str.substr(5)}
            </>
          );
        })}
      </>
    );
    return newCopy;
  };

  if (typeof copy === "object") {
    if (typeof copy.props.children !== "object") {
      //if copy item has no html inside it will be a string and not an array

      const indexesOfStartFootnote = findIndexes(copy.props.children, "[");

      if (indexesOfStartFootnote.length === 0) {
        return copy;
      }
      return addTitleToString(copy.props.children);
    } else {
      return copy.props.children.map((child: any) => {
        if (typeof child !== "object") {
          if (findIndexes(child, "[").length === 0) {
            return child;
          } else {
            return addTitleToString(child);
          }
        } else if (findIndexes(child.props.children, "[").length === 0) {
          return child;
        } else {
          return child;
        }
      });
    }
  }
};

export const SectionWithHeader = ({
  section,
  header,
  body,
  variant,
}: {
  section: string;
  header: { header: React.ReactNode; preHeader?: string };
  body: any;
  variant:
    | "xl"
    | "paragraphWithEndnotes"
    | "glossary"
    | "endnotes"
    | "shareButton"
    | "download"
    | string;
}) => (
  <Wrapper>
    <HeaderWrapper id={section}>
      {header.preHeader && <Header italic>{header.preHeader}</Header>}
      <Header>{header.header}</Header>
    </HeaderWrapper>

    {variant === "paragraphWithEndnotes" &&
      body.map((item: React.ReactNode, i: number) => {
        if (item === "IMAGES") {
          return (
            <ImageWrapper>
              <Image
                src={"/Images/birdseye.jpg"}
                alt="An aerial photograph of the village of Banatski Sokolac, surrounded by fields."
              />
              <Image
                src={"/Images/musiciansWithMarley.jpg"}
                alt="A group of 7 musicians posing around  the Bob Marley monument."
              />
              <Caption>
                Images of Banatski Sokolac and the Bob Marley monument from the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://plandiste-opstina.rs/o-plandistu/naselja/banatski-sokolac/?script=lat"
                >
                  Opština Plandište website
                </a>
                .
              </Caption>
            </ImageWrapper>
          );
        }

        return <Body key={`${section}${i}`}>{embedTitle(item)}</Body>;
      })}

    {variant === "paragraph" &&
      body.map((item: React.ReactNode, i: number) => (
        <Body key={`${section}${i}`}>{item}</Body>
      ))}

    {variant === "endnotes" && (
      <ColumnInnerWrapper>
        {body.map((item: React.ReactNode, i: number) => (
          <BibliographyListItem key={`endnotes${i}`}>
            {item}
          </BibliographyListItem>
        ))}
      </ColumnInnerWrapper>
    )}
  </Wrapper>
);

const ImageWrapper = styled.div`
  padding-top: 3rem;
`;

const Image = styled.img`
  padding-bottom: 2rem;
  width: 80%;
`;

const Caption = styled.div`
  font-family: "Suisse";
  padding-bottom: 5rem;
  font-size: 0.5208vw;
  font-size: calc(var(--vw, 1vw) * 0.5208);

  > a {
    color: #03ff54;
  }

  @media (max-width: 549px) {
    font-size: 2.5vw;
    font-size: calc(var(--vw, 1vw) * 2.5);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 1.45vw;
    font-size: calc(var(--vw, 1vw) * 1.45);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 0.95vw;
    font-size: calc(var(--vw, 1vw) * 0.95);
  }
`;

const BibliographyListItem = styled.div<{ variant?: "noLink" }>`
  font-family: "Suisse", Arial, Helvetica, sans-serif;

  font-size: 0.8333vw;
  font-size: calc(var(--vw, 1vw) * 0.8333);
  text-decoration: none;
  padding-bottom: 0.833vw;
  padding-bottom: calc(var(--vw, 1vw) * 0.833);

  > a {
    color: black;
  }

  @media (max-width: 549px) {
    font-size: 4vw;
    font-size: calc(var(--vw, 1vw) * 4);

    padding-bottom: 4vw;
    padding-bottom: calc(var(--vw, 1vw) * 4);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3vw;
    font-size: calc(var(--vw, 1vw) * 3);

    padding-bottom: 3vw;
    padding-bottom: calc(var(--vw, 1vw) * 3);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);

    padding-bottom: 1.5vw;
    padding-bottom: calc(var(--vw, 1vw) * 1.5);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 5vw;
  padding-bottom: calc(var(--vw, 1vw) * 5);
`;

const ColumnInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding-bottom: 3.333vw;
  padding-bottom: calc(var(--vw, 1vw) * 3.333);
`;

const Header = styled.span<{ italic?: boolean }>`
  font-family: "Suisse";
  font-size: 2.8125vw;
  font-size: calc(var(--vw, 1vw) * 2.8125);
  font-style: ${({ italic }) => italic && "italic"};

  @media (max-width: 549px) {
    font-size: 6.65vw;
    font-size: calc(var(--vw, 1vw) * 6.65);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 5.5vw;
    font-size: calc(var(--vw, 1vw) * 5.5);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 3.7vw;
    font-size: calc(var(--vw, 1vw) * 3.7);
  }
`;

const Body = styled.div`
  font-family: "SuisseWorks";

  font-size: 1.0416vw;
  font-size: calc(var(--vw, 1vw) * 1.0416);

  padding-bottom: 1.666vw;
  padding-bottom: calc(var(--vw, 1vw) * 1.666);

  > a {
    color: black;
  }

  @media (max-width: 549px) {
    font-size: 5vw;
    font-size: calc(var(--vw, 1vw) * 5);

    padding-bottom: 6vw;
    padding-bottom: calc(var(--vw, 1vw) * 6);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 2.9vw;
    font-size: calc(var(--vw, 1vw) * 2.9);

    padding-bottom: 4vw;
    padding-bottom: calc(var(--vw, 1vw) * 4);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);

    padding-bottom: 2vw;
    padding-bottom: calc(var(--vw, 1vw) * 2);
  }
`;
