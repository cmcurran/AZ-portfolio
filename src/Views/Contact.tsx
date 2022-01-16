import { css, Theme } from "@emotion/react";

import { Link, RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "../Components/AppViewWrapper";

export const Contact = (_props: RouteComponentProps) => (
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
        margin-top: -6rem;
      `}
    >
      <em
        css={css`
          font-size: 40px;
          padding-bottom: 2rem;
        `}
      >
        Contact
      </em>
      <em
        css={css`
          padding-bottom: 1rem;
          font-size: 22px;
        `}
      >
        azadeh.zaghi@gmail.com
      </em>
      <em
        css={css`
          font-size: 22px;
        `}
      >
        (+46) 0736 - 346 399
      </em>
    </div>
  </div>
);
