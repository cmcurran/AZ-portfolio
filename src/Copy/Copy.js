import React from "react";
import { pulp } from "./Painting/pulp.js";
import { seminal } from "./Painting/seminal.js";
import { queerIndigenous } from "./Painting/QueerIndigenous.js";
import { nothingLeft } from "./Painting/NothingLeft.js";

export const About = {
  bioText: [
    "Artist and researcher.",
    "Born 1994 in Athens, Greece.",
    "Currently based in Gothenburg, Sweden.",
  ],
  button: { copy: "Download CV", url: "CV.pdf" },
  links: [
    {
      copy: "papademetriou.alexandra@gmail.com",
      url: "mailto:papademetriou.alexandra@gmail.com",
    },
    {
      copy: "@alexandra.apapa",
      url: "https://www.instagram.com/alexandra.apapa/",
    },
  ],
};

export const Work = {
  sections: [
    {
      header: "artistic research",
      variant: "",
      works: [
        {
          path: null,
          title: "The Degrowth Toolbox for Artistic Practices",
          date: "ongoing",
        },
        {
          path: null,
          title:
            "The Plan for the Cultural Consolidation of the Balkan Peninsula",
          date: "2019-2021",
        },
      ],
    },
    {
      header: "painting series",
      variant: "gallery",
      works: [
        {
          path: "The-Handbook-to-the-Lore-and-Wisdom-of-the-Queer-Indigenous",
          title: "The Handbook to the Lore and Wisdom of the Queer Indigenous",
          date: "2017",
          work: queerIndigenous,
        },
        {
          title: "Nothing Left",
          date: "2016",
          path: "Nothing-Left",
          work: nothingLeft,
        },
        {
          title: "This Work Is Not Seminal",
          path: "This-Work-Is-Not-Seminal",
          date: "2015",
          work: seminal,
        },
        {
          title: "PULP",
          path: "PULP",
          work: pulp,
          date: "2014",
        },
      ],
    },
    {
      header: "curation",
      variant: "",
      works: [
        {
          path: null,
          title: "Bodies in Alliance / Bodies in Defiance",
          date: "2019",
        },
      ],
    },
  ],
};
