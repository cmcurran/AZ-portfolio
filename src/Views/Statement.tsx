import { css, Theme } from "@emotion/react";
import { RouteComponentProps } from "@reach/router";
import { AppViewWrapper } from "../Components/AppViewWrapper";
import { About as copy } from "../Copy/Copy";

export const Statement = (_props: RouteComponentProps) => (
  <div
    css={css`
      display: flex;
      justify-content: center;

      @media (max-width: 900px) {
        padding: 9rem 2rem 5rem 2rem;
      }
    `}
  >
    <div
      css={css`
        max-width: 600px;
        @media (min-width: 900px) {
          padding-top: 8rem;
        }
      `}
    >
      <div
        css={css`
          font-size: 20px;
        `}
      >
        Artist's statement
      </div>
      <div
        css={css`
          font-size: 16px;
        `}
      >
        <p>
          Azadeh E. Zaghi’s work is centered on issues of heritage, nationalism,
          representation, democracy, accessibility, pedagogy, and institutional
          critique. Her expansive practice includes performance, video art,
          installations, documentary filmmaking, social practice, and most
          notably, participatory research-based pedagogical projects.
        </p>
        <p>
          Zaghi’s expertise lies in her ability to create environments for open
          discussion and creative expression in her projects. Moving beyond the
          labels of “artist” or “pedagogue”, she mindfully designs environments
          for collective art-making by carefully choosing the right topics,
          educational tools, and pedagogical forms, always with a deep
          understanding of the communities she works within.
        </p>
        <p>
          Through her projects, she works to tear down the boundaries between
          the contemporary art world and everyday life, and to democratise the
          tools of artistic expression. Facilitating intercultural encounters is
          immensely important to her work, as well as creating the space for
          those most marginalised in society to speak. Embedded in this
          endeavour is a layer of institutional critique, as she invites us to
          question: Who is allowed within the domain of contemporary art? Who is
          given the privilege of a public platform? And most importantly, who is
          excluded from these things and why?
        </p>
        <p>
          As she herself states, her artistic collaborations have the potential
          to help the participating communities and increase familiarity with
          art, while also encouraging public dialogue and engagement with the
          political, social and economic issues that affect us in our everyday
          lives. Her participatory projects proudy display the power of
          solidarity and cooperation.
        </p>
        <p>
          In her practice, Zaghi shifts the focus away from herself as an artist
          and onto the creative vision of the projects’ collaborators and
          participants, enabling them to reflect, to act and to respond. It
          could be said that the participatory action itself has equal or higher
          value than the production of the physical works of art. More than
          providing a mere representation of her collaborators’ concerns, she
          enables them to tell their own stories, which she then weaves together
          into narrative tapestries.
        </p>
        <p>
          Personal narratives have particular importance throughout Zaghi’s
          work, as it is through the personal that the political is revealed.
          Many of her projects reveal stories of migration, of borders, of
          conflict and war, of institutional power and its abuse – in other
          words, of history in the making. The stories she sheds light on, the
          stories she archives, challenge hegemonic narratives and widely
          accepted injustices. In every single one of her projects, Zaghi is
          dedicated to (as she says in her own words) “bringing unheard-of and
          less-prominent events to the surface and highlighting them”.
        </p>
      </div>
    </div>
  </div>
);
