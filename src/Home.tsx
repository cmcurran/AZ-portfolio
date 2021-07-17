import styled from "@emotion/styled";
import { Link, RouteComponentProps } from "@reach/router";
import { GlobalStyles } from "./GlobalStyles";

export const Home = (_props: RouteComponentProps) => (
  <div>
    <GlobalStyles />
    hello apapa
  </div>
);

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
