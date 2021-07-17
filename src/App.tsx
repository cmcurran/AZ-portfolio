import { css } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";

export const App: React.FC<RouteComponentProps> = ({ children }) => (
  <div>
    <div
      css={css`
        font-size: 100px;
        border-bottom: 5px solid black;
      `}
    >
      alexandra papademetriou
    </div>
    {children}
  </div>
);

const styles = {
  navbar: css`
    font-size: 100px;
    border-bottom: 5px solid black;
  `,
};
