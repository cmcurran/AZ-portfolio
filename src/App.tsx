import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";

export const App: React.FC<RouteComponentProps> = ({ children }) => (
  <div
    css={css`
      height: 100%;
      /* react-reach nested routes render a div, I'm making it take up all available vertical space */
      > div {
        height: 100%;
      }
    `}
  >
    <div css={styles.navbar}>alexandra papademetriou</div>
    {children}
  </div>
);

const styles = {
  navbar: css`
    padding: 1.66vw;
    padding: calc(var(--vw, 1vw) * 1.66);
    font-size: 5.2083vw;
    font-size: calc(var(--vw, 1vw) * 5.2083);
    border-bottom: 5px solid black;
    /* parent is sending height 100% to child divs to fix a reach router issue this resets it */
    height: auto !important;
  `,
};
