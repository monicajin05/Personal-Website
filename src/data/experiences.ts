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
      { src: `${base}/sanfrancisco/7.jpg`, caption: "Welcome to Salesforce Tower" },
      { src: `${base}/sanfrancisco/1.jpg`, caption: "Team outing after an intern event" },
      { src: `${base}/sanfrancisco/2.jpg`, caption: "The Cake Picnic on the Embarcadero" },
      { src: `${base}/sanfrancisco/3.jpg`, caption: "Snacks by Oracle Park" },
      { src: `${base}/sanfrancisco/4.jpg`, caption: "Trying pottery for the first time" },
      { src: `${base}/sanfrancisco/5.jpg`, caption: "An improv show with the team" },
      { src: `${base}/sanfrancisco/6.jpg`, caption: "Improv night, take two" },
    ],
  },
  {
    id: "gdc",
    title: "GDC",
    cover: `${base}/gdc/2.jpg`,
    photos: [
      { src: `${base}/gdc/1.jpg`, caption: "Meeting fellow developers on the show floor" },
      { src: `${base}/gdc/2.jpg`, caption: "The crew after a full day at GDC" },
    ],
  },
  {
    id: "siggraph",
    title: "SIGGRAPH",
    cover: `${base}/siggraph/1.jpg`,
    photos: [
      { src: `${base}/siggraph/1.jpg`, caption: "Under the SIGGRAPH sign" },
      { src: `${base}/siggraph/2.jpg`, caption: "Testing a haptic-feedback robotic hand" },
      { src: `${base}/siggraph/3.jpg`, caption: "Bao buns after a long conference day" },
      { src: `${base}/siggraph/4.jpg`, caption: "Student volunteer crew" },
    ],
  },
  {
    id: "gracehopper",
    title: "Grace Hopper Celebration",
    cover: `${base}/gracehopper/2.jpg`,
    photos: [
      { src: `${base}/gracehopper/2.jpg`, caption: "Grace Hopper Celebration 2025" },
      { src: `${base}/gracehopper/1.jpg`, caption: "A break by the lakefront" },
      { src: `${base}/gracehopper/3.jpg`, caption: "Under Cloud Gate at night" },
    ],
  },
  {
    id: "epicgames",
    title: "Epic Games",
    cover: `${base}/epicgames/2.jpg`,
    photos: [
      { src: `${base}/epicgames/1.jpg`, caption: "Learning what Unreal Engine is used for beyond gaming" },
      { src: `${base}/epicgames/2.jpg`, caption: "Group photo after the studio visit" },
    ],
  },
  {
    id: "gamejam",
    title: "NC State Collegiate Game Jam",
    cover: `${base}/gamejam/3.jpg`,
    photos: [
      { src: `${base}/gamejam/3.jpg`, caption: "Under the Game Jam sign" },
      { src: `${base}/gamejam/1.jpg`, caption: "Mid-jam with the team" },
      { src: `${base}/gamejam/2.jpg`, caption: "Settling into the esports lab" },
    ],
  },
  {
    id: "slimedstudios",
    title: "Slimed Studios",
    cover: `${base}/slimedstudios/1.jpg`,
    photos: [
      { src: `${base}/slimedstudios/1.jpg`, caption: "New team merch — Slimed Studios" },
      { src: `${base}/slimedstudios/2.jpg`, caption: "Team photo, take two" },
      { src: `${base}/slimedstudios/3.jpg`, caption: "A pre-meeting huddle" },
    ],
  },
  {
    id: "rwanda",
    title: "Rwanda",
    cover: `${base}/rwanda/5.jpg`,
    photos: [
      { src: `${base}/rwanda/2.jpg`, caption: "The NC State group in Kigali" },
      { src: `${base}/rwanda/3.jpg`, caption: "Touring the Musanze caves" },
      { src: `${base}/rwanda/4.jpg`, caption: "Visiting a local classroom" },
      { src: `${base}/rwanda/1.jpg`, caption: "Cooking class with the group" },
      { src: `${base}/rwanda/5.jpg`, caption: "A conversation I won't forget" },
    ],
  },
  {
    id: "serviceraleigh",
    title: "Service Raleigh",
    cover: `${base}/serviceraleigh/1.jpg`,
    photos: [
      { src: `${base}/serviceraleigh/1.jpg`, caption: "Cleanup day at Historic Oberlin Cemetery" },
      { src: `${base}/serviceraleigh/2.jpg`, caption: "The team, mid-cleanup" },
      { src: `${base}/serviceraleigh/3.jpg`, caption: "Site leaders and volunteers" },
    ],
  },
  {
    id: "westernnc",
    title: "Western North Carolina",
    cover: `${base}/westernnc/4.jpg`,
    photos: [
      { src: `${base}/westernnc/1.jpg`, caption: "A farm we helped rebuild after Helene" },
      { src: `${base}/westernnc/2.jpg`, caption: "Hauling gravel for the rebuild" },
      { src: `${base}/westernnc/3.jpg`, caption: "The volunteer crew" },
      { src: `${base}/westernnc/4.jpg`, caption: "A well-earned view at the top" },
    ],
  },
];
