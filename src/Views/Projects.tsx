import { css, Theme } from "@emotion/react";

import { Link, RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "../Components/AppViewWrapper";
import { GalleryContent } from "../Components/Gallery";

export const Projects: React.FC<
  RouteComponentProps & {
    copy: {
      path: string;
      title: string;
      date: string;
      work: GalleryContent;
    }[];
  }
> = ({ copy }) => {
  return (
    // <div css={styles.wrapper}>
    //   <AppViewWrapper>
    //     <Link css={[styles.links, styles.left]} to="work">
    //       <span css={styles.linkText}>work</span>
    //     </Link>
    //     <Link css={[styles.links, styles.right]} to="about">
    //       <span css={styles.linkText}>about</span>
    //     </Link>
    //   </AppViewWrapper>
    // </div>
    <div>
      {copy.map((work) => (
        <Link to={work.path} key={work.title}>
          <span>{work.date}</span>
          <span>{work.title}</span>
        </Link>
      ))}
    </div>
  );
};
