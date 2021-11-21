import { css, Theme } from "@emotion/react";

import { Link, RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "../Components/AppViewWrapper";

export const Home = (_props: RouteComponentProps) => (
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
    <div>
      <div
        css={css`
          font-size: 26px;
          @media (min-width: 901px) {
            font-size: 52px;
          }
        `}
      >
        Azadeh Esmaili Zaghi
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-size: 20px;

          @media (min-width: 901px) {
            font-size: 36px;
          }
        `}
      >
        <em>artist</em>
        <span>·</span>
        <em>researcher</em>
        <span>·</span>
        <em>educator</em>
      </div>
    </div>
  </div>
);

const styles = {
  // wrapper: (theme: Theme) => css`
  //   ${theme.styles.wrapper}
  // `,
  // links: (theme: Theme) => css`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   transition: ${theme.transition.background};
  // `,
  // left: (theme: Theme) => css`
  //   ${theme.media.borderColumnRowLeft}
  //   :hover {
  //     background: ${theme.colors.orange};
  //   }
  // `,
  // right: (theme: Theme) => css`
  //   ${theme.media.borderColumnRowRight}
  //   :hover {
  //     background: ${theme.colors.yellow};
  //   }
  // `,
  // linkText: (theme: Theme) => css`
  //   font-size: 75px;
  //   @media ${theme.media.maxWidth599} {
  //     font-size: 10vw;
  //     font-size: calc(var(--vw, 1vw) * 10);
  //   }
  //   @media ${theme.media.minWidth1000} {
  //     font-size: 5.2083vw;
  //     font-size: calc(var(--vw, 1vw) * 5.2083);
  //   }
  // `,
};
