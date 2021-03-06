import React from "react";
import { css, Theme } from "@emotion/react";
import { Link, RouteComponentProps } from "@reach/router";

export const Work: React.FC<
  RouteComponentProps & {
    content: {
      sections: {
        header: string;
        variant: string; //"gallery" | "degrowth"
        works: {
          title: string;
          date: string;
          path?: string | null;
          work?: {
            title: string;
            date: string;
            about: React.ReactNode;
            gallery?: { img: string; size: string; material: string }[];
          };
        }[];
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
        {section.works.map((work) => {
          if (work.path) {
            return (
              <Link
                to={`${work.path}`}
                css={[styles.itemRow, styles.hover]}
                key={work.title}
              >
                <span css={styles.item}>{work.title}</span>
                <span css={styles.date}>{work.date}</span>
              </Link>
            );
          } else {
            if (work.title === "Bodies in Alliance / Bodies in Defiance") {
              return (
                <Link
                  to={"Bodies-in-Alliance-Bodies-in-Defiance"}
                  css={[styles.itemRow, styles.hover]}
                  key={work.title}
                >
                  <span css={styles.item}>{work.title}</span>
                  <span css={styles.date}>{work.date}</span>
                </Link>
              );
            }
            if (
              work.title ===
              "The Plan for the Cultural Consolidation of the Balkan Peninsula"
            ) {
              return (
                <Link
                  to="The-Plan-for-the-Cultural-Consolidation-of-the-Balkan-Peninsula"
                  css={[styles.itemRow, styles.hover]}
                  key={work.title}
                >
                  <span css={styles.item}>{work.title}</span>
                  <span css={styles.date}>{work.date}</span>
                </Link>
              );
            }

            return (
              <div css={styles.itemRow} key={work.title}>
                <span css={styles.item}>{work.title}</span>
                <span css={styles.date}>{work.date}</span>
              </div>
            );
          }
        })}
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
    font-family: "MG Semi-Mono";
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
  hover: (theme: Theme) => css`
    :hover {
      background-color: ${theme.colors.green};
    }
  `,
};
