import React from "react";
import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "./AppViewWrapper";
import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";

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
  useEffect(() => {
    if (!window) {
      return;
    }
    setHeight(window.innerHeight);
  }, [setHeight]);

  height && navHeight && console.log(height, navHeight, height - navHeight);
  return navHeight && height ? (
    <AppViewWrapper>
      <div css={[styles.left, styles.section]}>
        <div css={styles.title}>{content.title}</div>
        <div css={styles.title}>{content.date}</div>
        <div css={styles.about}>{content.about}</div>
      </div>
      <ScrollDiv
        navHeight={navHeight}
        height={height}
        css={[
          styles.right,
          styles.section,
          css`
            align-items: center;
            padding: 4rem 16rem;
          `,
        ]}
      >
        {content.gallery.map((item) => (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              &:not(:last-child) {
                margin-bottom: 8rem;
              }
            `}
          >
            <img
              src={`/Images/${item.img}`}
              css={css`
                width: 100%;
              `}
            />
            <div
              css={css`
                display: flex;
                flex-direction: column;
                width: 50%;
                font-family: "MG Semi-Mono";
                align-self: flex-end;
                font-size: 12px;
              `}
            >
              <div>{item.size}</div> <div>{item.material}</div>
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
    font-size: 40px;
    padding: 3rem 10rem 2rem 3rem;
  `,
  right: (theme: Theme) => css`
    ${theme.media.borderColumnRowRight}
    max-height:100%;
    overflow-x: hidden;
    overflow-y: scroll;
  `,
  section: css`
    display: flex;
    flex-direction: column;
  `,
  about: css`
    font-size: 20px;
  `,
  title: css`
    padding-bottom: 2rem;
  `,
};

const ScrollDiv = styled.div<{ navHeight: number; height: number }>`
  max-height: ${({ navHeight, height }) =>
    `${height - navHeight - 1}px`} !important;

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
