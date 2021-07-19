import { css, Theme } from "@emotion/react";
import { Link, RouteComponentProps } from "@reach/router";
import { GlobalStyles } from "./GlobalStyles";

export const App: React.FC<RouteComponentProps> = ({ children, location }) => {
  let variant: string | undefined;
  switch (location?.pathname) {
    case "/about":
      variant = "green";
      break;
    case "/work":
      variant = "yellow";
      break;
  }

  return (
    <div css={styles.wrapper}>
      <GlobalStyles />
      <Link to="/" css={[styles.navbar, variant && styles[variant]]}>
        alexandra papademetriou
      </Link>
      {children}
    </div>
  );
};

const styles = {
  wrapper: css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* react-reach nested routes render a div, I'm making it take up all available vertical space */
    > div {
      height: 100%;
    }
  `,
  navbar: (theme: Theme) => css`
    padding: 1.66vw;
    padding: calc(var(--vw, 1vw) * 1.66);
    font-size: 5.2083vw;
    font-size: calc(var(--vw, 1vw) * 5.2083);
    border-bottom: 5px solid black;
    transition: ${theme.transition.background};
    /* parent is sending height 100% to child divs to fix a reach router issue this resets it */
    height: auto !important;
  `,
  yellow: (theme: Theme) => css`
    :hover {
      background: ${theme.colors.yellow};
    }
  `,
  green: (theme: Theme) => css`
    :hover {
      background-color: ${theme.colors.green};
    }
  `,
};
