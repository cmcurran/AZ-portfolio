import React from "react";
import { pulp } from "./Painting/pulp.js";
import { seminal } from "./Painting/seminal.js";
import { queerIndigenous } from "./Painting/QueerIndigenous.js";
import { nothingLeft } from "./Painting/NothingLeft.js";
import { lullabyForASecondGenerationImmigrant } from "./Works/lullabyForASecondGenerationImmigrant";
import { blueEyedBrownEyed } from "./Works/blueEyedBrownEyed";
import { howMuchDoesOneDollarCostToday } from "./Works/howMuchDoesOneDollarCostToday";
import { transition } from "./Works/transition";
import { keysOfHeaven } from "./Works/keysOfHeaven";
import { memesFranKalltorpsskolan } from "./Works/memesFranKalltorpsskolan";
import { sacredGround } from "./Works/sacredGround";
import { ifTheLordYourGodEnlargesYourTerritory } from "./Works/ifTheLordYourGodEnlargesYourTerritory";
import { principlesOfHarmonyAndContrast } from "./Works/principlesOfHarmonyAndContrast";
import { whenYourHistoryBecomesSomeoneElsesHistory } from "./Works/whenYourHistoryBecomesSomeoneElsesHistory";

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

  {
    path: "Blue-eyed-brown-eyed",
    title: "Blue eyed brown eyed",
    date: "2014",
    work: blueEyedBrownEyed,
  },

  {
    path: "How-much-does-one-dollar-cost-today",
    title: "How much does one dollar cost today?",
    date: "2015",
    work: howMuchDoesOneDollarCostToday,
  },

  {
    path: "Transition",
    title: "Transition",
    date: "2015",
    work: transition,
  },

  {
    path: "Keys-of-Heaven",
    title: "Keys of Heaven",
    date: "2018",
    work: keysOfHeaven,
  },

  {
    path: "Memes-från-Kålltorpsskolan",
    title: "Memes från Kålltorpsskolan",
    date: "2018",
    work: memesFranKalltorpsskolan,
  },

  {
    path: "Sacred-ground",
    title: "Sacred ground",
    date: "2018",
    work: sacredGround,
  },

  {
    path: "If-the-LORD-your-God-enlarges-your-territory",
    title: "If the LORD your God enlarges your territory",
    date: "2019",
    work: ifTheLordYourGodEnlargesYourTerritory,
  },

  {
    path: "Principles-of-harmony-and-contrast",
    title: "Principles of harmony and contrast",
    date: "2019",
    work: principlesOfHarmonyAndContrast,
  },

  {
    path: "When-your-history-becomes-someone-elses-history",
    title: "When your history becomes someone else’s history",
    date: "2019",
    work: whenYourHistoryBecomesSomeoneElsesHistory,
  },
];
