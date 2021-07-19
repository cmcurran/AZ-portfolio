import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { About as copy } from "../Copy";

export const About = (_props: RouteComponentProps) => (
  <div css={styles.wrapper}>
    <div css={styles.innerWrapper}>
      {copy.bioText.map((copy) => (
        <div key={copy} css={styles.copy}>
          {copy}
        </div>
      ))}

      <a
        href={copy.button.url}
        css={styles.linkButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        {copy.button.copy}
      </a>

      {copy.links.map((link) => (
        <a
          css={styles.link}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          key={link.copy}
        >
          {link.copy}
        </a>
      ))}
    </div>

    <div css={styles.footer}>Website built by Charlotte Curran.</div>
  </div>
);

const styles = {
  wrapper: (theme: Theme) => css`
    ${theme.styles.wrapper}
    display: flex;
    flex-direction: column;
    font-size: 38px;

    @media ${theme.media.maxWidth759} {
      font-size: 5vw;
      font-size: calc(var(--vw, 1vw) * 5);
    }
  `,
  innerWrapper: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 2rem;

    @media ${theme.media.maxWidth759} {
      padding: 4.21052vw;
      padding: calc(var(--vw, 1vw) * 4.21052);
    }
  `,
  linkButton: (theme: Theme) => css`
    border: 5px solid black;
    align-self: flex-start;
    padding: 1rem 2rem;
    margin: 4rem 0;
    transition: ${theme.transition.background};

    @media ${theme.media.maxWidth759} {
      margin: 8.42105vw 0;
      margin: calc(var(--vw, 1vw) * 8.42105) 0;
      padding: 2.1052vw 4.21052vw;
      padding: calc(var(--vw, 1vw) * 2.1052) calc(var(--vw, 1vw) * 4.21052);
    }

    :hover {
      background: ${theme.colors.yellow};
    }
  `,
  link: (theme: Theme) => css`
    padding-bottom: 0.5rem;
    transition: ${theme.transition.color};

    :hover {
      color: ${theme.colors.yellow};
    }
  `,
  footer: (theme: Theme) => css`
    border-top: 5px solid black;
    padding: 2rem;

    @media ${theme.media.maxWidth759} {
      padding: 4.21052vw;
      padding: calc(var(--vw, 1vw) * 4.21052);
    }
  `,
  copy: css`
    padding-bottom: 0.5rem;
  `,
};
