import { css, Theme } from "@emotion/react";

import { Link, RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "../Components/AppViewWrapper";
import { GlobalStyles } from "../GlobalStyles";

export const Home = (_props: RouteComponentProps) => (
  <div css={styles.wrapper}>
    <GlobalStyles />
    <AppViewWrapper>
      <Link css={[styles.links, styles.left]} to="work">
        <span css={styles.linkText}>work</span>
      </Link>
      <Link css={[styles.links, styles.right]} to="about">
        <span css={styles.linkText}>about</span>
      </Link>
    </AppViewWrapper>
  </div>
);

const styles = {
  wrapper: (theme: Theme) => css`
    ${theme.styles.wrapper}
  `,
  links: (theme: Theme) => css`
    flex: 0 1 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${theme.transition.background};
  `,
  left: (theme: Theme) => css`
    ${theme.media.borderColumnRowLeft}

    :hover {
      background: ${theme.colors.orange};
    }
  `,
  right: (theme: Theme) => css`
    ${theme.media.borderColumnRowRight}

    :hover {
      background: ${theme.colors.yellow};
    }
  `,
  linkText: (theme: Theme) => css`
    font-size: 75px;
    @media ${theme.media.minWidth1000} {
      font-size: 5.2083vw;
      font-size: calc(var(--vw, 1vw) * 5.2083);
    }
  `,
};