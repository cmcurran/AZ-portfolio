import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { GlobalStyles } from "../GlobalStyles";
// import { About as copy } from "../Copy";

export const Work = (_props: RouteComponentProps) => (
  <div
    css={css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <GlobalStyles />
    <div
      css={css`
        font-size: 100px;
      `}
    >
      Coming soon!
    </div>
  </div>
);
