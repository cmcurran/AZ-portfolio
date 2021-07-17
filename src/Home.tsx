import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, RouteComponentProps } from "@reach/router";
import { GlobalStyles } from "./GlobalStyles";

export const Home = (_props: RouteComponentProps) => (
  <div
    css={css`
      height: 100%;
    `}
  >
    <GlobalStyles />
    <AppViewWrapper>
      <Link
        css={css`
          background: pink;
          flex: 0 1 50%;
          height: 100%;
        `}
        to="work"
      >
        work
      </Link>
      <Link
        css={css`
          background: pink;
          flex: 0 1 50%;
        `}
        to="about"
      >
        about
      </Link>
    </AppViewWrapper>
  </div>
);

const AppViewWrapper: React.FC = ({ children }) => (
  //2 children, first child 2.5px border right, 2nd child 2.5px border left on large view
  <div
    css={css`
      display: flex;
      flex-direction: row;
      height: 100%;
    `}
  >
    {children}
  </div>
);

// .projects {
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction:row;
// }
// .project:nth-child(1) {
//   flex:0 1 calc(50% - 10px);
//   margin: 5px;
//   background: green;
// }
// .proj
{
  /* <LinkStyled to="turbosculpture">
alexandrapapademetriou.com/turbosculpture
</LinkStyled>
const LinkStyled = styled(Link)`
color: #00ff29;
font-family: "MG Mono";
text-decoration: none;
:hover {
  text-decoration: underline;
}
`; */
}
