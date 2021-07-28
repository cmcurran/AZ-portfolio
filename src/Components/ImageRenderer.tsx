import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { useIntersection } from "../Hooks/useIntersectionObserver";

export const ImageRenderer: React.FC<{
  img: string;
  thumb: string;
  dimensions: { width: string; height: string };
  onClick: () => void;
}> = ({ img, thumb, dimensions, onClick }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLDivElement>(null);
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };
  return (
    <ImgContainer
      ref={imgRef}
      width={Number(dimensions.width)}
      height={Number(dimensions.height)}
    >
      {isInView && (
        <>
          <img
            alt={thumb}
            src={`/Images/${thumb}`}
            css={[
              styles.image,
              styles.thumb,
              !!isLoaded && styles.thumbIsLoaded,
            ]}
          />
          <img
            alt={img}
            src={`/Images/${img}`}
            css={[styles.image, !!isLoaded && styles.imgIsLoaded]}
            onClick={onClick}
            onLoad={handleOnLoad}
          />
        </>
      )}
    </ImgContainer>
  );
};

const styles = {
  image: css`
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: inline-block;
    position: absolute;

    :hover {
      transform: scale(1.05);
      transition: transform 0.2s ease-out;
    }
  `,
  thumb: css`
    opacity: 1;
    filter: blur(10px);
    transition: opacity 1s ease-in-out;
    position: absolute;
  `,
  thumbIsLoaded: css`
    opacity: 0;
  `,
  imgIsLoaded: css`
    transition: opacity 1s ease-in-out;
    opacity: 1;
  `,
};

const ImgContainer = styled.div<{ width: number; height: number }>`
  padding-bottom: ${({ width, height }) => `${(height / width) * 100}%`};

  width: 100%;
  max-width: 100%;
  background-color: #eeeeee;
  overflow: hidden;
  position: relative;
`;
