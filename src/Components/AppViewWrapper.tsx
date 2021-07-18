import { css, Theme } from "@emotion/react";

export const AppViewWrapper: React.FC = ({ children }) => (
  <div
    css={(theme: Theme) => css`
      height: 100%;
      ${theme.media.flexColumnRow}
    `}
  >
    {children}
  </div>
);
