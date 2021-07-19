import React from "react";
import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";

export const Work: React.FC<
  RouteComponentProps & {
    content: {
      sections: {
        header: string;
        works: { title: string; date: string }[];
      }[];
    };
  }
> = ({ content }) => (
  <div css={styles.wrapper}>
    {content.sections.map((section) => (
      <>
        <div css={styles.sectionHeader} key={section.header}>
          {section.header}
        </div>
        {section.works.map((work) => (
          <div css={styles.itemRow} key={work.title}>
            <span css={styles.item}>{work.title}</span>
            <span css={styles.date}>{work.date}</span>
          </div>
        ))}
      </>
    ))}
  </div>
);

const styles = {
  wrapper: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
  `,
  sectionHeader: (theme: Theme) => css`
    padding: 4rem 0 1rem 1.666vw;
    padding: 4rem 0 1rem calc(var(--vw, 1vw) * 1.666);
    border-bottom: 2px solid black;
    font-family: "MG Mono";
    margin-bottom: 0.5rem;
    font-size: calc(6px + 2.6vw);
    font-size: calc(6px + (var(--vw, 1vw) * 2.6));
    @media ${theme.media.minWidth1000} {
      font-size: 26px;
    }
  `,
  itemRow: (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    font-size: calc(4px + 3.8vw);
    font-size: calc(4px + var(--vw, 1vw) * 3.8);
    padding: 0.5rem 0 0.5rem 5vw;
    padding: 0.5rem 0 0.5rem calc(var(--vw, 1vw) * 5);
    transition: ${theme.transition.background};
    justify-content: space-between;

    :hover {
      background-color: ${theme.colors.green};
    }

    @media ${theme.media.minWidth1000} {
      font-size: 38px;
    }

    @media ${theme.media.minWidth1700} {
      padding: 0.5rem 0 0.5rem 6rem;
      font-size: 38px;
    }
  `,
  item: (theme: Theme) => css`
    flex-basis: 85%;
    padding-right: 0.5rem;

    @media ${theme.media.minWidth760} {
      padding: 0;
    }
  `,
  date: (theme: Theme) => css`
    min-width: 24.451vw;
    min-width: calc(var(--vw, 1vw) * 24.451);
    flex: 1 0 15%;
    white-space: nowrap;

    @media ${theme.media.minWidth760} {
      padding: 0 3.2vw;
      padding: 0 calc(var(--vw, 1vw) * 3.2);
    }

    @media ${theme.media.minWidth1000} {
      min-width: 245px;
      padding: 0 2rem;
    }
  `,
};
