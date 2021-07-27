import { css } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";

export const Placeholder = (_props: RouteComponentProps) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    `}
  >
    <div
      css={css`
        font-size: 100px;
      `}
    >
      Coming Soon!
    </div>
  </div>
);
