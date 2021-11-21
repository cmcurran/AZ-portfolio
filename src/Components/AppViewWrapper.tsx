import { css, Theme } from "@emotion/react";

export const AppViewWrapper: React.FC = ({ children }) => (
  <div
    css={(theme: Theme) => css`
      height: 100%;
      max-height: calc(100vh - 3.5rem);
      ${theme.media.flexColumnRow}
    `}
  >
    {children}
  </div>
);
