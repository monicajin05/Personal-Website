export interface ExperiencePhoto {
  src: string;
  caption: string;
}

export interface Experience {
  id: string;
  title: string;
  cover: string;
  photos: ExperiencePhoto[];
}

const base = "/images/about/experiences";

export const experiences: Experience[] = [
  {
    id: "sanfrancisco",
    title: "San Francisco",
    cover: `${base}/sanfrancisco/7.jpg`,
    photos: [
      { src: `${base}/sanfrancisco/7.jpg`, caption: "At Salesforce!" },
      { src: `${base}/sanfrancisco/5.jpg`, caption: "For some reason I did improv after work" },
      { src: `${base}/sanfrancisco/6.jpg`, caption: "I still can't believe we did this" },
      { src: `${base}/sanfrancisco/1.jpg`, caption: "The Gasoline Vapes (our team name, yeah the sets were pretty cursed)" },
      { src: `${base}/sanfrancisco/2.jpg`, caption: "Giant cake picnic!" },
      { src: `${base}/sanfrancisco/3.jpg`, caption: "It was also my birthday so I'd like to think they made all those cakes for me" },
      { src: `${base}/sanfrancisco/4.jpg`, caption: "I'm not too good at pottery" },

    ],
  },
  {
    id: "slimedstudios",
    title: "Slimed Studios",
    cover: `${base}/slimedstudios/1.jpg`,
    photos: [
      { src: `${base}/slimedstudios/1.jpg`, caption: "Our student game studio - Slimed Studios" },
      { src: `${base}/slimedstudios/2.jpg`, caption: "Signature mog" },
      { src: `${base}/slimedstudios/3.jpg`, caption: "Are we tuff?" },
    ],
  },
  {
    id: "rwanda",
    title: "Rwanda",
    cover: `${base}/rwanda/5.jpg`,
    photos: [
      { src: `${base}/rwanda/4.jpg`, caption: "Teaching at a local elementary school" },
      { src: `${base}/rwanda/2.jpg`, caption: "Learning to cook from Kigali locals" },
      { src: `${base}/rwanda/3.jpg`, caption: "1st time cave diving" },
      { src: `${base}/rwanda/1.jpg`, caption: "Team photo" },
      { src: `${base}/rwanda/5.jpg`, caption: "She was really cool" },
    ],
  },
  {
    id: "westernnc",
    title: "Western North Carolina",
    cover: `${base}/westernnc/4.jpg`,
    photos: [
      { src: `${base}/westernnc/3.jpg`, caption: "Volunteering at Western NC after Hurricane Helene" },
      { src: `${base}/westernnc/1.jpg`, caption: "Go pack!" },
      { src: `${base}/westernnc/2.jpg`, caption: "That horse was a celebrity" },
      { src: `${base}/westernnc/4.jpg`, caption: "Conquering my fear of heights" },
    ],
  },
  {
    id: "epicgames",
    title: "Epic Games",
    cover: `${base}/epicgames/2.jpg`,
    photos: [
      { src: `${base}/epicgames/2.jpg`, caption: "I organized a site visit to Epic Games for the Video Game Development Club" },
      { src: `${base}/epicgames/1.jpg`, caption: "Learning what Unreal Engine is used for beyond gaming" },
    ],
  },
  {
    id: "siggraph",
    title: "SIGGRAPH",
    cover: `${base}/siggraph/1.jpg`,
    photos: [
      { src: `${base}/siggraph/1.jpg`, caption: "SIGGRAPH" },
      { src: `${base}/siggraph/2.jpg`, caption: "Testing out Parasitic Hand" },
      { src: `${base}/siggraph/3.jpg`, caption: "Met awesome friends" },
      { src: `${base}/siggraph/4.jpg`, caption: "The Student volunteer crew!" },
    ],
  },
  {
    id: "gdc",
    title: "GDC",
    cover: `${base}/gdc/2.jpg`,
    photos: [
      { src: `${base}/gdc/2.jpg`, caption: "The Video Game Development Club" },
      { src: `${base}/gdc/1.jpg`, caption: "Met the creater of Baldi's Basics. Technically this means I'm one step closer to meeting Markiplier" },
    ],
  },
  {
    id: "gamejam",
    title: "NC State Collegiate Game Jam",
    cover: `${base}/gamejam/3.jpg`,
    photos: [
      { src: `${base}/gamejam/3.jpg`, caption: "Game Jamming" },
      { src: `${base}/gamejam/1.jpg`, caption: "In the middle of an all-nighter (don't do this)" },
      { src: `${base}/gamejam/2.jpg`, caption: "Judging in the esports lab" },
    ],
  },
  {
    id: "gracehopper",
    title: "Grace Hopper Celebration",
    cover: `${base}/gracehopper/2.jpg`,
    photos: [
      { src: `${base}/gracehopper/2.jpg`, caption: "I'm pretending I work at Uber" },
      { src: `${base}/gracehopper/1.jpg`, caption: "Nice view" },
      { src: `${base}/gracehopper/3.jpg`, caption: "Had to see The Bean before I left" },
    ],
  },
  {
    id: "serviceraleigh",
    title: "Service Raleigh",
    cover: `${base}/serviceraleigh/1.jpg`,
    photos: [
      { src: `${base}/serviceraleigh/1.jpg`, caption: "Volunteering at the cemetery" },
      { src: `${base}/serviceraleigh/3.jpg`, caption: "Site leaders and volunteers" },
    ],
  },
];
