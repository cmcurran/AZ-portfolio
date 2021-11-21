import { css, Theme } from "@emotion/react";
import { Link, RouteComponentProps } from "@reach/router";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { GlobalStyles } from "./GlobalStyles";
import debounce from "lodash.debounce";
import styled from "@emotion/styled";
import { useScrollPosition } from "./UseScrollPosition";
import { IconHamburger, IconX } from "./Components/NavIcons";

export const App: React.FC<
  RouteComponentProps & {
    setNavHeight: Dispatch<SetStateAction<number | undefined>>;
    navHeight: number | undefined;
  }
> = ({ children, location, setNavHeight, navHeight }) => {
  // let variant: string | undefined;
  // if (
  //   location?.pathname === "/about" ||
  //   location?.pathname === "/work/The-Degrowth-Toolbox-for-Artistic-Practices"
  // ) {
  //   variant = "green";
  // } else if (location?.pathname === "/work") {
  //   variant = "yellow";
  // } else if (location?.pathname.includes("/work/")) {
  //   variant = "orange";
  // }

  const [hideOnScroll, setHideOnScroll] = useState(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useScrollPosition(
    ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window || !navRef || !navRef.current) {
      return;
    }

    if (!navHeight) {
      setNavHeight(navRef.current.offsetHeight);
    }

    const resizeListener = () => {
      setNavHeight(navRef?.current?.offsetHeight);
    };

    const debounced = debounce(resizeListener, 100);
    window.addEventListener("resize", debounced);

    return () => {
      debounced.cancel();
      window.removeEventListener("resize", resizeListener);
    };
  }, [navHeight, setNavHeight]);

  const InterpunctSpacer = () => (
    <span
      css={css`
        padding: 0 1rem;
      `}
    >
      ·
    </span>
  );

  return (
    <div css={styles.wrapper}>
      <GlobalStyles />
      {!isOpen && (
        <IconWrapper onClick={() => setIsOpen(true)} show={hideOnScroll}>
          <IconHamburger />
        </IconWrapper>
      )}
      <div
        css={css`
          opacity: ${isOpen ? "1" : "0"};
          pointer-events: ${!isOpen && "none"};
          transition: all 0.2s ease-in;

          padding: 2vw;
          padding: calc(var(--vw, 1vw) * 2);

          background-color: white;
          position: fixed;
          width: 100%;
          height: 100%;
          left: 0;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          @media (min-width: 750px) {
            display: none;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          `}
        >
          <InterpunctSpacer />
          <Link to="/statement">statement</Link>
          <InterpunctSpacer />
          <Link to="/projects">projects</Link>
          <InterpunctSpacer />
          <Link to="/about">about</Link>
          <InterpunctSpacer />
          <Link to="/contact">contact</Link> <InterpunctSpacer />
        </div>
        <IconWrapper onClick={() => setIsOpen(false)} show={true}>
          <IconX />
        </IconWrapper>
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          font-size: 20px;
          text-transform: uppercase;
          border-bottom: solid black 1px;
          height: auto !important;

          @media (max-width: 901px) {
            display: none;
          }
        `}
        ref={navRef}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 15%;
          `}
        >
          <Link to="/statement">statement</Link>
          <InterpunctSpacer />
          <Link to="/projects">projects</Link>
          <InterpunctSpacer />
        </div>

        <Link
          to="/"
          css={css`
            text-transform: none;
            font-weight: 500;
          `}
        >
          Azadeh Esmaili Zaghi
        </Link>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 15%;
          `}
        >
          <InterpunctSpacer />
          <Link to="/about">about</Link>
          <InterpunctSpacer />
          <Link to="/contact">contact</Link>
        </div>
      </div>

      {/* <Link
        to="/"
        css={[styles.navbar, variant && styles[variant]]}
        ref={navRef}
      >
        alexandra papademetriou
      </Link> */}
      {children}
    </div>
  );
};

const IconWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  cursor: pointer;

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: all 200ms ${(props) => (props.show ? "ease-in" : "ease-out")};
  transform: ${(props) => (props.show ? "none" : "translate(100%, 0)")};

  top: 6.1vw;
  top: calc(var(--vw, 1vw) * 6.1);

  right: 6.1vw;
  right: calc(var(--vw, 1vw) * 6.1);

  width: 9vw;
  width: calc(var(--vw, 1vw) * 9);

  height: 9vw;
  height: calc(var(--vw, 1vw) * 9);

  @media (min-width: 900px) {
    display: none;
  }
`;

const styles = {
  wrapper: css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* react-reach nested routes render a div, I'm making it take up all available vertical space */
    > div {
      height: 100%;
      max-height: 100%;
      overflow: hidden;
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

    @media ${theme.media.maxWidth599} {
      font-size: 10vw;
      padding-left: 2rem;
    }
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
  orange: (theme: Theme) => css`
    :hover {
      background-color: ${theme.colors.orange};
    }
  `,
};
