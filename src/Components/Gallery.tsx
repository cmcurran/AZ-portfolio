import React, { useEffect, useState } from "react";
import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "./AppViewWrapper";
import Lightbox from "react-image-lightbox";
import debounce from "lodash.debounce";
import { ScrollDiv } from "./Styled/ScrollDiv";
import { ImageRenderer } from "./ImageRenderer";

export const Gallery: React.FC<
  RouteComponentProps & {
    navHeight: number | undefined;
    content: GalleryContent;
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

  const imageArray = content.gallery.map((item) => ({
    img: `/Images/${item.img}`,
    thumb: `/Images/${item.thumb}`,
  }));

  return navHeight && height ? (
    <AppViewWrapper>
      {open && (
        <Lightbox
          mainSrc={imageArray[photoIndex].img}
          nextSrc={imageArray[(photoIndex + 1) % imageArray.length].img}
          prevSrc={
            imageArray[(photoIndex + imageArray.length - 1) % imageArray.length]
              .img
          }
          mainSrcThumbnail={imageArray[photoIndex].thumb}
          nextSrcThumbnail={
            imageArray[(photoIndex + 1) % imageArray.length].thumb
          }
          prevSrcThumbnail={
            imageArray[(photoIndex + imageArray.length - 1) % imageArray.length]
              .thumb
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
          // imageCaption={
          //   <div css={styles.lightboxCaptionWrapper}>
          //     <div>{content.gallery[photoIndex].size}</div>
          //     <div>{content.gallery[photoIndex].material}</div>
          //     <div>{content.gallery[photoIndex].date}</div>
          //   </div>
          // }
        />
      )}
      {/* text mobile */}
      <ScrollDiv
        navHeight={navHeight}
        height={height}
        css={[
          css`
            max-height: none;
            @media (min-width: 1000px) {
              display: none;
            }
          `,
          styles.section,
        ]}
      >
        <div
          css={css`
            padding: 8rem 10vw 4rem 5vw;
            padding: 8rem calc(var(--vw, 1vw) * 10) 4rem
              calc(var(--vw, 1vw) * 5);
          `}
        >
          <div css={styles.title}>{content.title}</div>
          <div css={styles.about}>
            {content.date} <br /> {content.material}
            {content.timeLength && (
              <>
                <br />
                {content.timeLength}
              </>
            )}
          </div>
          <div css={styles.about}>{content.about}</div>
        </div>
      </ScrollDiv>

      <ScrollDiv
        navHeight={navHeight}
        height={height}
        css={[styles.left, styles.section]}
      >
        {content.gallery.map((item, i) => (
          <div css={styles.galleryWrapper}>
            {item.img && item.thumb && item.dimensions ? (
              <ImageRenderer
                img={item.img}
                thumb={item.thumb}
                dimensions={item.dimensions}
                onClick={() => {
                  setPhotoIndex(i);
                  setOpen(true);
                }}
              />
            ) : (
              <video controls>
                <source src={`/Images/${item.vid}`} type="video/mp4"></source>
              </video>
            )}
            {/* <div css={styles.galleryCaptionWrapper}>
              <div>{item.size}</div>
              <div>{item.material}</div>
              <div>{item.date}</div>
            </div> */}
          </div>
        ))}
      </ScrollDiv>

      {/* text desktop */}
      <ScrollDiv
        navHeight={navHeight}
        height={height}
        css={[styles.right, styles.section]}
      >
        <div
          css={css`
            padding: 8rem 12rem 4rem 6rem;
          `}
        >
          <div css={styles.title}>{content.title}</div>
          <div css={styles.about}>
            {content.date} <br /> {content.material}
            {content.timeLength && (
              <>
                <br />
                {content.timeLength}
              </>
            )}
          </div>
          <div css={styles.about}>{content.about}</div>
        </div>
      </ScrollDiv>
    </AppViewWrapper>
  ) : null;
};

const styles = {
  left: (theme: Theme) => css`
    /* ${theme.media.borderColumnRowLeft} */
    font-size: 20px;
    padding: 3rem 2rem;
    align-items: flex-start;

    @media ${theme.media.minWidth1000} {
      font-size: 2.08333vw;
      font-size: calc(var(--vw, 1vw) * 2.08333);
      padding: 8rem 2vw 6rem 2vw;
      padding: 8rem calc(var(--vw, 1vw) * 2) 6rem calc(var(--vw, 1vw) * 2);
    }
  `,

  right: (theme: Theme) => css`
    /* ${theme.media.borderColumnRowRight} */
    max-height: none;

    @media ${theme.media.maxWidth999} {
      display: none;
    }
  `,

  section: css`
    display: flex;
    flex-direction: column;
  `,

  about: (theme: Theme) => css`
    font-size: 14px;

    /* @media ${theme.media.minWidth1000} {
      font-size: 20px;
    } */
    padding-bottom: 1rem;
  `,

  title: (theme: Theme) => css`
    padding-bottom: 1rem;
    font-size: 20px;

    @media ${theme.media.minWidth1000} {
      padding-bottom: 2rem;
    }
  `,

  galleryWrapper: (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    @media ${theme.media.minWidth1000} {
      &:not(:last-child) {
        margin-bottom: 6rem;
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

export type GalleryContent = {
  title: string;
  date: string;
  material: string;
  timeLength?: string;
  about: React.ReactNode;
  gallery: {
    img?: string;
    vid?: string;
    thumb?: string;

    dimensions?: { width: string; height: string };
  }[];
};
