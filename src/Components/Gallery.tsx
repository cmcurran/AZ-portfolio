import React from "react";
import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "./AppViewWrapper";
import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import Lightbox from "react-image-lightbox";
import debounce from "lodash.debounce";

export const Gallery: React.FC<
  RouteComponentProps & {
    navHeight: number | undefined;
    content: {
      title: string;
      date: string;
      about: React.ReactNode;
      gallery: {
        img: string;
        size: string;
        material: string;
        date: string;
      }[];
    };
  }
> = ({ content, navHeight }) => {
  const [height, setHeight] = useState<number>();
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const [open, setOpen] = useState<boolean>(false);

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

  const imageArray = content.gallery.map((item) => `/Images/${item.img}`);

  return navHeight && height ? (
    <AppViewWrapper>
      <div css={[styles.left, styles.section]}>
        <div css={styles.title}>{content.title}</div>
        <div css={styles.title}>{content.date}</div>
        <div css={styles.about}>{content.about}</div>
      </div>
      {open && (
        <Lightbox
          mainSrc={imageArray[photoIndex]}
          nextSrc={imageArray[(photoIndex + 1) % imageArray.length]}
          prevSrc={
            imageArray[(photoIndex + imageArray.length - 1) % imageArray.length]
          }
          onCloseRequest={() => {
            setOpen(false);
            setPhotoIndex(0);
          }}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageArray.length - 1) % imageArray.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageArray.length)
          }
          imageCaption={
            <div css={styles.lightboxCaptionWrapper}>
              <div>{content.gallery[photoIndex].size}</div>
              <div>{content.gallery[photoIndex].material}</div>
              <div>{content.gallery[photoIndex].date}</div>
            </div>
          }
        />
      )}
      <ScrollDiv
        navHeight={navHeight}
        height={height}
        css={[styles.right, styles.section, css``]}
      >
        {content.gallery.map((item, i) => (
          <div css={styles.galleryWrapper}>
            <img
              alt={item.img}
              src={`/Images/${item.img}`}
              css={styles.image}
              onClick={() => {
                setPhotoIndex(i);
                setOpen(true);
              }}
            />
            <div css={styles.galleryCaptionWrapper}>
              <div>{item.size}</div>
              <div>{item.material}</div>
              <div>{item.date}</div>
            </div>
          </div>
        ))}
      </ScrollDiv>
    </AppViewWrapper>
  ) : null;
};

const styles = {
  left: (theme: Theme) => css`
    ${theme.media.borderColumnRowLeft}
    font-size:20px;
    padding: 3rem 2rem;

    @media ${theme.media.minWidth1000} {
      font-size: 2.08333vw;
      font-size: calc(var(--vw, 1vw) * 2.08333);
      padding: 3rem 8.33vw 2rem 2.5vw;
      padding: 3rem calc(var(--vw, 1vw) * 8.33) 2rem calc(var(--vw, 1vw) * 2.5);
    }
  `,
  right: (theme: Theme) => css`
    ${theme.media.borderColumnRowRight}
    max-height:100%;
  `,
  section: css`
    display: flex;
    flex-direction: column;
  `,
  about: (theme: Theme) => css`
    font-size: 16px;

    @media ${theme.media.minWidth1000} {
      font-size: 20px;
    }
  `,
  title: (theme: Theme) => css`
    padding-bottom: 1rem;

    @media ${theme.media.minWidth1000} {
      padding-bottom: 2rem;
    }
  `,
  galleryWrapper: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    @media ${theme.media.minWidth1000} {
      &:not(:last-child) {
        margin-bottom: 8rem;
      }
    }
  `,
  lightboxCaptionWrapper: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    text-align: center;
    font-family: "MG Semi-Mono";
    font-size: 16px;
    > div {
      margin-right: 1rem;
    }
  `,
  galleryCaptionWrapper: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    font-family: "MG Semi-Mono";
    font-size: 12px;

    @media ${theme.media.minWidth1000} {
      min-width: 400px;
      > div {
        width: 50%;
        align-self: flex-end;
      }
    }
  `,
  image: css`
    width: 100%;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: inline-block;

    :hover {
      transform: scale(1.05);
      transition: transform 0.2s ease-out;
    }
  `,
};

const ScrollDiv = styled.div<{ navHeight: number; height: number }>`
  ${({ theme, navHeight, height }) =>
    `@media ${theme.media.minWidth1000}{
    max-height: ${height - navHeight - 1}px !important;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 4rem 16rem;
  }`}

  align-items: center;
  padding: 3rem 2rem;

  &::-webkit-scrollbar {
    background-color: white;
    border: solid 3px black;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border: solid 3px black;
  }
  &::-webkit-scrollbar-button:vertical:end:increment {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 304 304' style='enable-background:new 0 0 304 304;' xml:space='preserve'%3E%3Cpolygon points='152.5,258 41.7,66 263.4,66'/%3E%3C/svg%3E");
    border: solid 3px black;
  }
  &::-webkit-scrollbar-button:vertical:start:decrement {
    border: solid 3px black;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 304 304' style='enable-background:new 0 0 304 304;transform:rotate(180deg)' xml:space='preserve'%3E%3Cpolygon points='152.5,258 41.7,66 263.4,66'/%3E%3C/svg%3E");
  }
  &::-webkit-scrollbar-button:vertical:end:increment,
  &::-webkit-scrollbar-button:vertical:start:decrement {
    display: block;
  }
`;
