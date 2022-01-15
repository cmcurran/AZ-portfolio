import React from "react";
import { pulp } from "./Painting/pulp.js";
import { seminal } from "./Painting/seminal.js";
import { queerIndigenous } from "./Painting/QueerIndigenous.js";
import { nothingLeft } from "./Painting/NothingLeft.js";
import { lullabyForASecondGenerationImmigrant } from "./Works/lullabyForASecondGenerationImmigrant";

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

export const Work = [
  {
    path: "Lullaby-for-a-second-generation-immigrant",
    title: "Lullaby for a second generation immigrant",
    date: "2013",
    work: lullabyForASecondGenerationImmigrant,
  },

  // {
  //   path: "The-Handbook-to-the-Lore-and-Wisdom-of-the-Queer-Indigenous",
  //   title: "The Handbook to the Lore and Wisdom of the Queer Indigenous",
  //   date: "2017",
  //   work: queerIndigenous,
  // },
  // {
  //   title: "Nothing Left",
  //   date: "2016",
  //   path: "Nothing-Left",
  //   work: nothingLeft,
  // },
  // {
  //   title: "This Work Is Not Seminal",
  //   path: "This-Work-Is-Not-Seminal",
  //   date: "2015",
  //   work: seminal,
  // },
  // {
  //   title: "PULP",
  //   path: "PULP",
  //   work: pulp,
  //   date: "2014",
  // },
];
