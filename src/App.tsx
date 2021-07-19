import { css, Theme } from "@emotion/react";
import { Link, RouteComponentProps } from "@reach/router";
import { useEffect } from "react";
import { useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { GlobalStyles } from "./GlobalStyles";

export const App: React.FC<
  RouteComponentProps & {
    setNavHeight: Dispatch<SetStateAction<number | undefined>>;
  }
> = ({ children, location, setNavHeight }) => {
  let variant: string | undefined;
  switch (location?.pathname) {
    case "/about":
      variant = "green";
      break;
    case "/work":
      variant = "yellow";
      break;
  }

  const navRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (navRef && navRef.current) {
      setNavHeight(navRef?.current?.offsetHeight);
    }
  }, [setNavHeight]);

  return (
    <div css={styles.wrapper}>
      <GlobalStyles />
      <Link
        to="/"
        css={[styles.navbar, variant && styles[variant]]}
        ref={navRef}
      >
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
