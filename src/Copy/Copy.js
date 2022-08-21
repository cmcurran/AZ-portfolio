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
import { aMonumentOfTheCityToBuild } from "./Works/aMonumentOfTheCityToBuild";
import { theVoiceOfLifeFromLimbo } from "./Works/theVoiceOfLifeFromLimbo";
import { untrustableBlue } from "./Works/untrustableBlue";
import { peaceBeyondTheWords } from "./Works/peaceBeyondTheWords";
import { youAreNotGonnaDieOnARailInATrashBag } from "./Works/youAreNotGonnaDieOnARailInATrashBag";
import { numbers } from "./Works/numbers";
import { livingInWorldWar3 } from "./Works/livingInWorldWar3";

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
    year: "2022",
    work: [
      {
        path: "Living-in-World-War-III",
        title: "Living in World War III",
        work: livingInWorldWar3,
      },
      {
        path: "A-monument-of-the-city-to-build",
        title: "A monument of the city to build",
        work: aMonumentOfTheCityToBuild,
      },
    ],
  },

  {
    year: "2021",
    work: [
      {
        path: "Peace-Beyond-the-Words",
        title: "Peace Beyond the Words",
        work: peaceBeyondTheWords,
      },

      {
        path: "Work-in-progress-Numbers",
        title: "Work in progress – Numbers",
        work: numbers,
      },
    ],
  },

  {
    year: "2020",
    work: [
      {
        path: "Untrustable-Blue",
        title: "Untrustable Blue",
        work: untrustableBlue,
      },
    ],
  },

  {
    year: "2019",
    work: [
      {
        path: "If-the-LORD-your-God-enlarges-your-territory",
        title: "If the LORD your God enlarges your territory",
        work: ifTheLordYourGodEnlargesYourTerritory,
      },

      {
        path: "Principles-of-harmony-and-contrast",
        title: "Principles of harmony and contrast",
        work: principlesOfHarmonyAndContrast,
      },

      {
        path: "When-your-history-becomes-someone-elses-history",
        title: "When your history becomes someone else’s history",
        work: whenYourHistoryBecomesSomeoneElsesHistory,
      },

      {
        path: "The-voice-of-life-from-limbo",
        title: "The voice of life from limbo",
        date: "2019 –",
        work: theVoiceOfLifeFromLimbo,
      },
    ],
  },

  {
    year: "2018",
    work: [
      {
        path: "Keys-of-Heaven",
        title: "Keys of Heaven",
        work: keysOfHeaven,
      },

      {
        path: "Memes-fran-Kalltorpsskolan",
        title: "Memes från Kålltorpsskolan",
        work: memesFranKalltorpsskolan,
      },

      {
        path: "Sacred-ground",
        title: "Sacred ground",
        work: sacredGround,
      },
    ],
  },

  {
    year: "2015",
    work: [
      {
        path: "How-much-does-one-dollar-cost-today",
        title: "How much does one dollar cost today?",
        work: howMuchDoesOneDollarCostToday,
      },

      {
        path: "Transition",
        title: "Transition",
        work: transition,
      },
    ],
  },

  {
    year: "2014",
    work: [
      {
        path: "Blue-eyed-brown-eyed",
        title: "Blue eyed brown eyed",
        work: blueEyedBrownEyed,
      },
    ],
  },
  {
    year: "2013",
    work: [
      {
        path: "Lullaby-for-a-second-generation-immigrant",
        title: "Lullaby for a second generation immigrant",
        work: lullabyForASecondGenerationImmigrant,
      },

      {
        path: "You-are-not-gonna-die-on-a-rail-in-a-trash-bag",
        title: "You are not gonna die on a rail in a trash bag",
        work: youAreNotGonnaDieOnARailInATrashBag,
      },
    ],
  },
];
