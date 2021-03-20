import React, {
  useLayoutEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import styled from "styled-components";

const Header = ({
  text,
  setBetaBottom,
}: {
  text: string[];
  setBetaBottom: Dispatch<SetStateAction<number | null>>;
}) => {
  const betaRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!window) {
      return;
    }
    const handleResize = () => {
      if (betaRef.current === null) {
        return;
      }

      const scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

      if (scrollTop === 0) {
        setBetaBottom(betaRef.current.getBoundingClientRect().bottom);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [betaRef]);

  return (
    <OuterWrapper>
      {text.map((item, i) => (
        <Wrapper key={item}>
          {item}
          {i === text.length - 1 && <BetaTag ref={betaRef}>beta</BetaTag>}
        </Wrapper>
      ))}
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  white-space: nowrap;
  width: 100%;
  text-transform: uppercase;
  font-family: "Suisse";
  /* font-size: 142px; */
  font-size: 7.395vw;
  font-size: calc(var(--vw, 1vw) * 7.395);
  /* line-height: 142px; */
  line-height: 7.395vw;
  line-height: calc(var(--vw, 1vw) * 7.395);
  /* text-align: left; */

  @media (max-width: 1249px) {
    font-size: 9.395vw;
    font-size: calc(var(--vw, 1vw) * 9.395);
    line-height: 9.395vw;
    line-height: calc(var(--vw, 1vw) * 9.395);
  }
`;

const BetaTag = styled.span`
  font-family: "MG Mono";
  color: #00ff29;
  font-size: 1.041vw;
  font-size: calc(var(--vw, 1vw) * 1.041);
  /* font-size: 20px; */
  /* margin-left: -32px; */
  /* margin-left: -0.1vw;
  margin-left: calc(var(--vw, 1vw) * -0.1); */
  @media (max-width: 1249px) {
    font-size: 1.3vw;
    font-size: calc(var(--vw, 1vw) * 1.3);
  }
`;

export default Header;
