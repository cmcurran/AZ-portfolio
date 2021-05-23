import styled from "styled-components";
import { turboSculptureEndnotes } from "../Copy";
import birdseye from "../Images/birdseye.jpg";
import musiciansWithMarley from "../Images/musiciansWithMarley.jpg";

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
        console.log("cmc 1", copy);
        return copy;
      }
      return addTitleToString(copy.props.children);
    } else {
      return copy.props.children.map((child: any) => {
        if (typeof child !== "object") {
          if (findIndexes(child, "[").length === 0) {
            console.log("cmc 2", child);
            return child;
          } else {
            console.log("cmc 3", child);
            return addTitleToString(child);
          }
        } else if (findIndexes(child.props.children, "[").length === 0) {
          console.log("cmc 4", child);
          return child;
        } else {
          console.log("cmc", child.props.children);
          return addTitleToString(child.props.children);
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
      {/* <Section>{section}</Section> */}
      {/* {variant === "paragraphWithEndnotes" &&
        console.log(body, body[0]?.props?.children && body[1]?.props?.children)} */}
      {header.preHeader && <Header italic>{header.preHeader}</Header>}
      <Header>{header.header}</Header>
    </HeaderWrapper>

    {variant === "paragraphWithEndnotes" &&
      body.map((item: React.ReactNode, i: number) => {
        if (item === "IMAGES") {
          return (
            <div>
              <Image src={birdseye} />
              <Image src={musiciansWithMarley} />
            </div>
          );
        }

        return <Body key={`${section}${i}`}>{embedTitle(item)}</Body>;
      })}

    {variant === "paragraph" &&
      body.map((item: React.ReactNode, i: number) => (
        <Body key={`${section}${i}`}>{item}</Body>
      ))}
    {/* {variant === "glossary" && (
      <ColumnInnerWrapper>
        {body.map((item: { word: string; definition: string }) => (
          <ColumnInnerWrapper key={item.word}>
            <GlossaryHeader>{item.word}</GlossaryHeader>
            <Body>{item.definition}</Body>
          </ColumnInnerWrapper>
        ))}
      </ColumnInnerWrapper>
    )} */}

    {variant === "endnotes" && (
      <ColumnInnerWrapper>
        {body.map((item: React.ReactNode, i: number) => (
          <BibliographyListItem key={`endnotes${i}`}>
            {item}
          </BibliographyListItem>
        ))}
      </ColumnInnerWrapper>
    )}

    {/* {variant === "shareButton" && (
      <ColumnInnerWrapper>
        <Body>{body.body}</Body>
        <ButtonLink href={body.button.url} target="_blank">
          {body.button.copy}
        </ButtonLink>
      </ColumnInnerWrapper>
    )}

    {variant === "download" && (
      <>
        <HiddenMobile>
          <ColumnInnerWrapper>
            {body.map((item: { copy: string; url: string }, i: number) => (
              <ButtonLink
                key={`DesktopDownload${i}`}
                href={item.url}
                download
                fullWidth={true}
              >
                {item.copy}
              </ButtonLink>
            ))}
          </ColumnInnerWrapper>
        </HiddenMobile>

        <HiddenDesktop>
          <ColumnInnerWrapper>
            {body.map(
              (
                item: { copy: string; copyShort: string; url: string },
                i: number
              ) => (
                <ButtonLink
                  key={`MobileDownload${i}`}
                  href={item.url}
                  download
                  fullWidth={true}
                >
                  {item.copyShort}
                </ButtonLink>
              )
            )}
          </ColumnInnerWrapper>
        </HiddenDesktop>
      </>
    )} */}
  </Wrapper>
);

const Image = styled.img`
  padding-bottom: 2rem;
  width: 80%;
`;

const HiddenMobile = styled.div`
  display: none;

  @media (min-width: 750px) {
    display: block;
  }
`;

const HiddenDesktop = styled.div`
  display: none;
  @media (max-width: 749px) {
    display: block;
  }
`;

const ButtonLink = styled.a<{ fullWidth?: boolean }>`
  font-family: "MG Mono";
  color: #00ff29;
  text-decoration: none;
  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);
  border: 1px solid #00ff29;
  align-self: flex-start;
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  :hover {
    text-decoration: underline;
  }

  @media (max-width: 549px) {
    font-size: 5vw;
    font-size: calc(var(--vw, 1vw) * 5);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 2.9vw;
    font-size: calc(var(--vw, 1vw) * 2.9);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);
  }

  /* @media (max-width: 749px) {
    width: ${({ fullWidth }) => fullWidth && "50%"};
  }

  @media (min-width: 750px) {
    width: ${({ fullWidth }) => fullWidth && "95%"};
  } */
`;

const BibliographyListItem = styled.div<{ variant?: "noLink" }>`
  font-family: "Suisse";

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

const GlossaryHeader = styled.div`
  font-family: "MG Mono";
  color: #00ff29;

  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);

  padding-bottom: 0.833vw;
  padding-bottom: calc(var(--vw, 1vw) * 0.833);

  @media (max-width: 549px) {
    font-size: 5vw;
    font-size: calc(var(--vw, 1vw) * 5);

    padding-bottom: 2vw;
    padding-bottom: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3.5vw;
    font-size: calc(var(--vw, 1vw) * 3.5);

    padding-bottom: 2vw;
    padding-bottom: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);
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

const Section = styled.span`
  font-family: "MG Mono";
  color: #00ff29;

  font-size: 1.354vw;
  font-size: calc(var(--vw, 1vw) * 1.354);

  line-height: 2.447vw;
  line-height: calc(var(--vw, 1vw) * 2.447);

  padding-right: 0.625vw;
  padding-right: calc(var(--vw, 1vw) * 0.625);

  @media (max-width: 549px) {
    font-size: 4vw;
    font-size: calc(var(--vw, 1vw) * 4);

    line-height: 7vw;
    line-height: calc(var(--vw, 1vw) * 7);

    padding-right: 2vw;
    padding-right: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3vw;
    font-size: calc(var(--vw, 1vw) * 3);

    line-height: 5.3vw;
    line-height: calc(var(--vw, 1vw) * 5.3);

    padding-right: 2vw;
    padding-right: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.8vw;
    font-size: calc(var(--vw, 1vw) * 1.8);

    line-height: 3.4vw;
    line-height: calc(var(--vw, 1vw) * 3.4);

    padding-right: 1vw;
    padding-right: calc(var(--vw, 1vw) * 1);
  }
`;

const Header = styled.span<{ italic?: boolean }>`
  font-family: "Suisse";
  /* font-size: 54px; */
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

const BodyXL = styled(Body)`
  /* 32px */
  font-size: 1.875vw;
  font-size: calc(var(--vw, 1vw) * 1.875);

  @media (max-width: 549px) {
    font-size: 6vw;
    font-size: calc(var(--vw, 1vw) * 6);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3.7vw;
    font-size: calc(var(--vw, 1vw) * 3.7);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 2.4vw;
    font-size: calc(var(--vw, 1vw) * 2.4);
  }
`;
