import React, { useEffect, useState } from "react";
import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "./AppViewWrapper";
import debounce from "lodash.debounce";
import { ScrollDiv } from "./Styled/ScrollDiv";

export const Degrowth: React.FC<
  RouteComponentProps & {
    navHeight: number | undefined;
    content: DegrowthContent;
  }
> = ({ content, navHeight }) => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (!window) {
      return;
    }

    if (!height) {
      setHeight(window.innerHeight);
    }

    const resizeListener = () => {
      setHeight(window.innerHeight);
    };

    const debounced = debounce(resizeListener, 100);
    window.addEventListener("resize", debounced);

    return () => {
      debounced.cancel();
      window.removeEventListener("resize", resizeListener);
    };
  }, [height, setHeight]);

  return navHeight && height ? (
    <AppViewWrapper>
      <ScrollDiv
        navHeight={navHeight}
        height={height}
        css={[styles.left, styles.section]}
      >
        <div css={styles.title}>{content.title}</div>
        <div css={styles.title}>{content.date}</div>
        <a
          href={content.button.url}
          css={styles.linkButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content.button.copy}
          <img
            src={"/Images/northeastArrow.svg"}
            css={styles.arrow}
            alt="arrow"
          />
        </a>
        <div css={styles.about}>{content.about}</div>
      </ScrollDiv>

      <ScrollDiv
        navHeight={navHeight}
        height={height}
        css={[styles.right, styles.section]}
      >
        <img
          src={"/Images/degrowth.svg"}
          css={styles.degrowthImage}
          alt="The Degrowth Toolbox for Artistic Practices"
        />
      </ScrollDiv>
    </AppViewWrapper>
  ) : null;
};

const styles = {
  left: (theme: Theme) => css`
    ${theme.media.borderColumnRowLeft}
    font-size:20px;
    padding: 3rem 2rem;
    align-items: flex-start;

    @media ${theme.media.minWidth1000} {
      font-size: 2.08333vw;
      font-size: calc(var(--vw, 1vw) * 2.08333);
      padding: 3rem 8.33vw 2rem 2.5vw;
      padding: 3rem calc(var(--vw, 1vw) * 8.33) 2rem calc(var(--vw, 1vw) * 2.5);
    }
  `,
  right: (theme: Theme) => css`
    ${theme.media.borderColumnRowRight}
    max-height: none;
    padding: 0 !important;
    background-color: black;
  `,
  section: css`
    display: flex;
    flex-direction: column;
  `,
  about: (theme: Theme) => css`
    font-size: 16px;

    @media ${theme.media.minWidth1000} {
      font-size: 20px;
    }
  `,
  title: (theme: Theme) => css`
    padding-bottom: 1rem;

    @media ${theme.media.minWidth1000} {
      padding-bottom: 2rem;
    }
  `,

  linkButton: (theme: Theme) => css`
    font-size: 24px;
    border: 5px solid black;
    align-self: flex-start;
    padding: 1rem 2rem;
    margin: 2rem 0;
    transition: ${theme.transition.background};

    @media ${theme.media.maxWidth759} {
      margin: 8.42105vw 0;
      margin: calc(var(--vw, 1vw) * 8.42105) 0;
      padding: 2.1052vw 4.21052vw;
      padding: calc(var(--vw, 1vw) * 2.1052) calc(var(--vw, 1vw) * 4.21052);
    }

    :hover {
      background: ${theme.colors.green};
    }
  `,
  degrowthImage: css`
    height: 100%;
    max-width: 100%;
  `,
  arrow: css`
    width: 22px;
    padding-left: 0.5rem;
  `,
};

export type DegrowthContent = {
  title: string;
  date: string;
  button: { url: string; copy: string };
  about: React.ReactNode;
};
