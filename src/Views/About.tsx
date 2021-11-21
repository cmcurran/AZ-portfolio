import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import { AppViewWrapper } from "../Components/AppViewWrapper";
import { ScrollDiv } from "../Components/Styled/ScrollDiv";
import { About as copy } from "../Copy/Copy";

export const About: React.FC<
  RouteComponentProps & {
    navHeight: number | undefined;
  }
> = ({ navHeight }) => {
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    if (!window) {
      return;
    }

    if (!height) {
      setHeight(window.innerHeight);
    }

    const resizeListener = () => {
      setHeight(window.innerHeight);
    };

    const debounced = debounce(resizeListener, 100);
    window.addEventListener("resize", debounced);

    return () => {
      debounced.cancel();
      window.removeEventListener("resize", resizeListener);
    };
  }, [height, setHeight]);

  return (navHeight && height) || (height && navHeight === 0) ? (
    <AppViewWrapper>
      <div
        css={css`
          width: 100%;
          height: calc(100vh - 3.5rem);
          display: flex;
          justify-content: center;
          /* align-items: center; */
        `}
      >
        <img
          src={"/Images/azadeh1.jpg"}
          css={css`
            /* margin-top: 8rem;
          max-width: 500px;
          height: auto;
          object-fit: cover;
          max-height: 100%; */
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 0 20%;

            @media (max-width: 900px) {
              display: none;
            }
          `}
          alt="Azadeh Zaghi"
        />
      </div>
      <ScrollDiv
        navHeight={navHeight}
        height={height}
        // css={css`
        //   /* background-color: magenta; */
        //   /* border-left: solid 1px magenta; */

        //   width: 100%;
        //   height: calc(100vh - 3.5rem);
        // `}
      >
        <div
          css={css`
            padding-top: 8rem;
            margin-left: 20%;
            max-width: 500px;

            @media (max-width: 900px) {
              max-width: 600px;
              padding: 5rem 2rem;
              margin: 0;
            }
          `}
        >
          <div
            css={css`
              font-size: 20px;
            `}
          >
            Biography
          </div>
          <div
            css={css`
              font-size: 16px;
              padding-bottom: 6rem;
            `}
          >
            <p>
              Azadeh E. Zaghi is a Gothenburg-based artist. Born in Tehran, Iran
              in 1981, she has been active in the Swedish art scene since 2008.
              She holds a MFA in Fine Arts from HDK-Valand, University of
              Gothenburg, and a BA in Fine Art from Azad University, Tehran. She
              is the founder and head of the <em>East in West</em> Fine Art
              Organisation.
            </p>
            <p>
              In her prolific career, she has participated in a large variety of
              artistic and educational projects across Sweden. With a strong
              focus on issues of representation, democracy, accessibility,
              inclusion, pedagogy, and institutional critique, Zaghi’s work
              extends past the boundaries of what is typically considered the
              artist’s role and includes her work as project curator, art
              consultant, and educator.
            </p>
            <p>
              Zaghi’s practice is fundamentally committed to building
              collaborations and sustaining partnership with other artists and
              artistic institutions. Notable long-standing collaborators
              include:{" "}
              <em>
                Kulturföreningen Tåget, Borås Konstmuseum, Göteborgs Konsthall,
                Röda Sten konsthall, ICIA - Institute for Contemporary Ideas,
                GIBCA
              </em>{" "}
              (Gothenburg International Biennial of Contemporary Art) in its
              2015, 2017, and 2019 installments, and{" "}
              <em>HDK-Valand, University of Gothenburg</em>, in which she has
              worked as a guest teacher and course developer.
            </p>
            <p
              css={css`
                margin-bottom: 4rem;
              `}
            >
              She is currently a board member of both <em>Konstepidemin</em> and
              the <em>ICIA – Institute for Contemporary Ideas and Art</em>. She
              also holds the position of artistic educator and project leader at{" "}
              <em>Allas Ateljé</em> on Rymdtorget in Bergsjön, and artistic
              project leader at <em>Kulturstråket</em> in Bergsjön.
            </p>

            <a
              href="CV.pdf"
              download
              css={css`
                font-weight: 500;
                font-size: 20px;
                text-decoration: underline;
              `}
            >
              Download CV
            </a>
          </div>
        </div>
      </ScrollDiv>
    </AppViewWrapper>
  ) : (
    <div>hihihi</div>
  );
};
// <div css={styles.wrapper}>
//   <div css={styles.innerWrapper}>
//     {copy.bioText.map((copy) => (
//       <div key={copy} css={styles.copy}>
//         {copy}
//       </div>
//     ))}

//     <a
//       href={copy.button.url}
//       css={styles.linkButton}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {copy.button.copy}
//     </a>

//     {copy.links.map((link) => (
//       <a
//         css={styles.link}
//         href={link.url}
//         target="_blank"
//         rel="noopener noreferrer"
//         key={link.copy}
//       >
//         {link.copy}
//       </a>
//     ))}
//   </div>

//   <div css={styles.footer}>Website built by Charlotte Curran.</div>
// </div>
// const styles = {
//   wrapper: (theme: Theme) => css`
//     ${theme.styles.wrapper}
//     display: flex;
//     flex-direction: column;
//     font-size: 38px;

//     @media ${theme.media.maxWidth759} {
//       font-size: 5vw;
//       font-size: calc(var(--vw, 1vw) * 5);
//     }
//   `,
//   innerWrapper: (theme: Theme) => css`
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     padding: 2rem;

//     @media ${theme.media.maxWidth759} {
//       padding: 4.21052vw;
//       padding: calc(var(--vw, 1vw) * 4.21052);
//     }
//   `,
//   linkButton: (theme: Theme) => css`
//     border: 5px solid black;
//     align-self: flex-start;
//     padding: 1rem 2rem;
//     margin: 4rem 0;
//     transition: ${theme.transition.background};

//     @media ${theme.media.maxWidth759} {
//       margin: 8.42105vw 0;
//       margin: calc(var(--vw, 1vw) * 8.42105) 0;
//       padding: 2.1052vw 4.21052vw;
//       padding: calc(var(--vw, 1vw) * 2.1052) calc(var(--vw, 1vw) * 4.21052);
//     }

//     :hover {
//       background: ${theme.colors.yellow};
//     }
//   `,
//   link: (theme: Theme) => css`
//     padding-bottom: 0.5rem;
//     transition: ${theme.transition.color};

//     :hover {
//       color: ${theme.colors.yellow};
//     }
//   `,
//   footer: (theme: Theme) => css`
//     border-top: 5px solid black;
//     padding: 2rem;

//     @media ${theme.media.maxWidth759} {
//       padding: 4.21052vw;
//       padding: calc(var(--vw, 1vw) * 4.21052);
//     }
//   `,
//   copy: css`
//     padding-bottom: 0.5rem;
//   `,
// };
