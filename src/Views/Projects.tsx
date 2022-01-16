import { css, Theme } from "@emotion/react";

import { Link, RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "../Components/AppViewWrapper";
import { GalleryContent } from "../Components/Gallery";

export const Projects: React.FC<
  RouteComponentProps & {
    copy: {
      year: string;
      work: {
        path: string;
        title: string;
        work: GalleryContent;
      }[];
    }[];
  }
> = ({ copy }) => {
  return (
    <AppViewWrapper>
      <div css={styles.left} />

      <div css={styles.right}>
        {copy.map((year, i) => {
          return year.work.map((work, index) => {
            if (index === 0) {
              return (
                <div css={styles.row}>
                  <span
                    css={[
                      styles.yearLabel,
                      css`
                        padding-top: 2rem;
                        padding-bottom: 1rem;
                        @media (min-width: 650px) {
                          padding-top: 0;
                          padding-bottom: 0;
                        }
                      `,
                    ]}
                  >
                    {copy[i].year}
                  </span>{" "}
                  <Link to={work.path}>{work.title}</Link>
                </div>
              );
            } else {
              return (
                <div css={styles.row}>
                  <span css={styles.yearLabel} />{" "}
                  <Link to={work.path}>{work.title}</Link>
                </div>
              );
            }
          });
        })}
      </div>
    </AppViewWrapper>
  );
};

const styles = {
  left: css`
    width: 50%;
  `,

  right: css`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    padding: 5rem 0;

    ::last-child {
      padding-bottom: 5rem;
    }

    @media (max-width: 900px) {
      font-size: 16px;
    }
  `,

  yearLabel: css`
    display: inline-block;

    @media (min-width: 650px) {
      width: 5rem;
      padding-left: 1rem;
    }
  `,

  row: css`
    padding-bottom: 0.75rem;
    padding-left: 0;
    @media (max-width: 650px) {
      display: flex;
      flex-direction: column;
      padding-left: 2rem;
    }
  `,
};
