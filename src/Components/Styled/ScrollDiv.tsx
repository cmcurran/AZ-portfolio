import styled from "@emotion/styled";

export const ScrollDiv = styled.div<{ navHeight: number; height: number }>`
  ${({ theme, navHeight, height }) =>
    `@media ${theme.media.minWidth1000}{
    max-height: ${height - navHeight - 1}px !important;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 4rem 16rem;
  }`}

  align-items: center;
  padding: 3rem 2rem 6rem 2rem;

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
