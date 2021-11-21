import { css, Theme } from "@emotion/react";

import { Link, RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "../Components/AppViewWrapper";

export const Projects = (_props: RouteComponentProps) => (
  // <div css={styles.wrapper}>
  //   <AppViewWrapper>
  //     <Link css={[styles.links, styles.left]} to="work">
  //       <span css={styles.linkText}>work</span>
  //     </Link>
  //     <Link css={[styles.links, styles.right]} to="about">
  //       <span css={styles.linkText}>about</span>
  //     </Link>
  //   </AppViewWrapper>
  // </div>
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        width: 100%;
        text-align: center;
      `}
    >
      <em
        css={css`
          font-size: 36px;
        `}
      >
        Coming soon.
      </em>
    </div>
  </div>
);
