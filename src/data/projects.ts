export type ProcessBlock =
  | { type: "text"; text: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "video"; vimeoId?: string; src?: string; caption?: string }
  | { type: "callout"; title?: string; text: string };

export interface Project {
  slug: string;
  title: string;
  hook: string;
  tags: string[];
  year: string;
  role: string;
  timeline: string;
  tools: string[];
  overview: string;
  audience: string;
  problem?: string;
  problemBullets?: { text: string; subpoints?: string[] }[];
  explorationItems?: { title: string; description: string; tradeoff: string }[];
  edgeCases?: string[];
  process?: {
    intro: ProcessBlock[];
    sectionsHeading?: string;
    sectionsNote?: string;
    sections: { title: string; body: ProcessBlock[]; style?: "callout" }[];
  };
  playtests?: string[];
  solution?: string;
  solutionDetail?: string;
  reflection: string[];
  imageUrl: string;
  solutionImageUrl?: string;
  videoUrl?: string;
  vimeoBackgroundId?: string;
  galleryImages?: { src: string; caption: string }[];
  galleryVideos?: { vimeoId?: string; src?: string; caption: string }[];
  docLinks?: { label: string; href: string }[];
  color: string;
  link?: string;
  itchLink?: string;
  liveLink?: string;
  status?: "complete" | "in-development";
  category?: "game" | "software";
}

export const projects: Project[] = [
  {
    slug: "slimed-rebirth",
    title: "Slimed: Rebirth",
    hook: "An escape room game where you solve problems to break out of a mad scientist's lab.",
    tags: ["Team · 4", "Godot", "2D/3D art", "Complete"],
    year: "March 2026",
    role: "Programmer, 2D artist, environment artist",
    timeline: "Complete",
    tools: ["Godot", "GDScript", "Aseprite", "Blender", "GitHub"],
    overview:
      "Slimed: Rebirth is a top-down escape room game featuring dialogue and interactive puzzles. Players team up with their enemy to break out of a mad scientist's lab. Puzzles unlock new areas as you progress, and two playable characters with unique abilities have to be used strategically to uncover clues. The project mixes 2D and 3D art.",
    audience:
      "Players who like puzzle games and character-driven worlds.",
    process: {
      intro: [
        {
          type: "text",
          text: "The theme for this project was “escape room.” At first, I thought this project would be my bread and butter because I’ve played so many puzzle games in my time. However, I should’ve known things would soon go south, because I’m not really great at escape rooms in real life. My team and I sat down and immediately began brainstorming some slop.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-rebirth/puzzle-design.png",
          caption: "photo of said slop",
        },
        {
          type: "text",
          text: "Making this gave me more respect for actual escape room designers. Through brainstorming, my team and I had a lot of moments where we had to ask ourselves “uh….so what next?” It was difficult to make the map feel balanced, especially when we would have more ideas for one room compared to others. Reading the diagram we made is like Challenge: Try to Decipher The Hieroglyphics.",
        },
        { type: "text", text: "TLDR:" },
        {
          type: "text",
          text: "Following the narrative from our earlier games, where a nanotyrannus and triceratops fight each other to the death and then get obliterated by a giant meteor (I realize this makes no sense. Read the prev. two entries for more context), this game is about them getting reborn in a lab. Now stuck in an unfamiliar environment, they have to work together to escape before the mad scientist experiments on them.",
        },
        {
          type: "text",
          text: "The best part about this game is that you can switch in between the t-rex and triceratops! I thought this was really cool because they both have different capabilities. While the triceratops can equip a “language” hat (a.k.a. a tinfoil hat) that can help her read human language, the t-rex can press buttons and keypads because…he has hands. Albeit small ones. Don’t think about it too hard.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-rebirth/slimeurself.png",
          caption: "i’m not sure why this was made",
        },
        {
          type: "text",
          text: "This added a layer of complexity for our game by balancing the puzzle solving with character switching. To make this more apparent for the user, we also added a brief cutscene in the beginning and notes scattered throughout the map in journals/on computers.",
        },
      ],
      sectionsHeading: "Some of the puzzles I designed!",
      sectionsNote: "Look away if you wanna play the game! An escape room isn’t fun if you already know the answer!",
      sections: [
        {
          title: "Test Tube Puzzle",
          body: [
            { type: "video", vimeoId: "1180146346", caption: "The test-tubes puzzle, in action" },
            { type: "video", vimeoId: "1180149020", caption: "Solving the padlock puzzle" },
            {
              type: "text",
              text: "This puzzle requires the player to be observant. After viewing the dinosaurs on the test tubes, the player should understand that the mutilations on them actually spell out numbers (2, 6, 7…wait…6 7?! Sorry, couldn’t help myself). Afterwards, they align the numbers with the lock on the door, where each space is outlined with one of the colors of the dinosaurs. It’s a pretty easy formula, but it primes the player to pay attention to their surroundings, which they’ll need later!",
            },
            {
              type: "text",
              text: "I pitched this idea to the team because we were looking for an extra puzzle to block door 1, and created the 2D assets as a proof-of-concept. I also programmed the UI for the padlock puzzle. This wasn’t too bad – godot has a good system with signals, so all I needed to make was the padlock’s circular arrays!",
            },
          ],
        },
        {
          title: "Video Puzzle",
          body: [
            { type: "image", src: "/images/projects/gallery/slimed-rebirth/journal-log.png", caption: "Our definitive ranking of dinosaurs" },
            { type: "video", src: "/videos/slimed-rebirth-gallery-3.mp4", caption: "Watching our own ranking play back in-game" },
            {
              type: "text",
              text: "This was my FAVORITE puzzle to design. IT WAS SO FUNNY. Basically, I got me and my team to roleplay as the scientists and rank all the dinosaurs. Each one got a dinosaur to defend, and then we would assign them to either S tier, A tier, B tier, or C tier. I think I got to defend the pterodactyl? Unfortunately, I didn’t get S tier, but at least I was above average.",
            },
            {
              type: "text",
              text: "You may ask what this ranking even has to do with solving puzzles. WELL, if the player was paying attention, they would have noticed that each room contains a giant mural on the floor with a dinosaur and the room number next to it. Using that plus our ranking, the player can figure out one of the codes.",
            },
            {
              type: "text",
              text: "If you watched the video, you may have noticed that our video turned out super choppy. Unfortunately, Godot does have its limitations, and we couldn’t figure out a better way to do video embeddings, so we just had to deal with 2 frames per second. I was telling everyone that it lowkeyyyy fits the scene, because all the 2D assets are pixelated, and so is our video. You think so too, right? Right?",
            },
            {
              type: "text",
              text: "This puzzle actually made me laugh so hard, and a lot of our playtesters surprisingly liked this weird format. I pitched the idea as a joke, but it made me so happy that we ended up pulling through. It ended up being our favorite part to make!",
            },
          ],
        },
        {
          title: "Fusebox Puzzle",
          body: [
            { type: "video", src: "/videos/slimed-rebirth-gallery-2.mp4", caption: "Moving batteries between slots to reroute power" },
            {
              type: "text",
              text: "This last one was the brainchild of my team member, but it was so cool I had to include it. This puzzle involved having to find batteries for a fusebox to be able to open doors, as everything in the lab is powered by energy. However, in the beginning when you haven’t found all the batteries yet, you have to frequently move them around to unlock certain doors to rooms that you need to visit. It felt very horror-game-esque, I think I remember watching some playthroughs of indie mascot horror games employing this technique – it might also be in Resident Evil?",
            },
            {
              type: "text",
              text: "This puzzle gave me a really good opportunity to add to the atmosphere of the game by having the main lights switch off once the fusebox is moved to power a different room. Now that I’m thinking back on it, I should’ve also made it so the computers in unpowered rooms couldn’t open either… that’s probably something I would change in a later version!",
            },
          ],
        },
      ],
    },
    playtests: [
      "Players enjoyed our game, but honestly, the later parts were kind of confusing.",
      "There was this one part where the mad scientist’s mech is released and chases after the player, but then the player needs to find a way to redirect the mech’s deadly lazer beam to aim for the glass that encases the player’s goal, Element Zero. Honestly, if I wasn’t a developer, I’d also be so confused.",
    ],
    reflection: [
      "Question: have you ever gone to an escape room and one of the solutions was something that came COMPLETELY out of the blue? Like, you would not have seen it coming even if you had eyes in the back of your head? Well, I’ve had it happen, and I absolutely hate it. In my opinion, a puzzle that is impossible to guess isn’t fulfilling at all - solving it becomes a matter of brute force rather than something I discovered.",
      "Video games are the exact same way. Puzzles need to straddle a fine line between being child’s play and becoming absolutely unrealistic. A developer needs to craft an experience that builds - that allows a player to first adjust to the game’s mechanics, and then combines those mechanics to deliver an experience that they can walk away from, challenged and fulfilled.",
      "It’s the same thing with developing products in real life. Your main goal isn’t to make you, the developer, impressed with your own technical prowess, but instead to make your users’ lives easier with an intuitive and fulfilling experience!",
      "Did we achieve those metrics in this game? In my opinion, both yes and no. I fully believe that if we had more time, we could’ve delivered a more well rounded experience, but I do think we achieved a lot with the time we were given. We certainly had a lot of fun making it!",
    ],
    imageUrl: "/images/projects/slimed-rebirth-cover.jpg",
    videoUrl: "/videos/slimed-rebirth-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/slimed-rebirth/level-design-2.png", caption: "Room 3 layout, blocked out in Godot" },
      { src: "/images/projects/gallery/slimed-rebirth/mech-sprite-sheet.png", caption: "Mech enemy sprite sheet" },
      { src: "/images/projects/gallery/slimed-rebirth/padlock-puzzle.png", caption: "Padlock puzzle — the code (726) comes from wound shapes on the dinosaur specimens" },
      { src: "/images/projects/gallery/slimed-rebirth/test-tubes-puzzle.png", caption: "Dinosaur specimens in Blender-modeled test tubes — each wound doubles as a digit in the padlock code" },
    ],
    color: "#0D1A15",
    itchLink: "https://underduke.itch.io/slimed-rebirth",
    status: "complete",
    category: "game",
  },

  {
    slug: "slimed-awakening",
    title: "Slimed: Awakening",
    hook: "A souls-like 2D dungeon crawler where you fight enemies and bosses through a fire-torn forest to save your village.",
    tags: ["Team · 4", "Lead artist", "Godot", "Complete"],
    year: "February 2026",
    role: "Lead artist — all 2D pixel art (player/enemy idle & attack, environment, assets, ending cards)",
    timeline: "Complete",
    tools: ["Aseprite", "Godot", "GitHub"],
    overview:
      "Slimed: Awakening is a 2D dungeon crawler with souls-like combat, picking up where Slimed: Origins' solo-confrontation ending leaves off. A meteor hits just as Tina the Triceratops settles things with Nano the Nanotyrannus, and she has to fight through procedurally generated forest floors to find him again while rescuing dinosaur kids stranded in the burning forest. There are multiple enemy types, dodge/parry mechanics, and two bosses.",
    audience:
      "Players who want a hard 2D action game with a lot of original pixel art.",
    process: {
      intro: [
        {
          type: "text",
          text: "Coming into this, we knew we wanted to make a dungeon crawler with a top-down view. We debated for a bit about the specific game design, but we knew right away that we wanted aesthetics similar to the Binding of Isaac - pixelated with smooth movement.",
        },
        {
          type: "text",
          text: "We also wanted to consider the ease of animation, as having the view be purely top down would make it so we only needed one walking sprite rather than having to flip the sprite based on the direction the user is facing. I actually argued for the 3/4s view because I thought it would be more visually appealing, but my team member pushed me from the dark side by reminding me of our game’s scope. I was really thanking him by the time I had to make all the assets.",
        },
        {
          type: "text",
          text: "As this was an asset heavy game and I was the sole artist on the team, I agreed to be the lead (and only) artist. Personally, I think that when working with others, your responsibility to use your skills to create a viable product for the team is more important than your own personal wishes - which sounds really bad but what I mean is that even though I wanted to assist with the game’s programming, I was able to pivot to art because that’s what our team needed. Being flexible is definitely key when it comes to making games, which take a lot of effort from various people with specific domain knowledge (art, sound, writing, programming, etc). Besides, I knew I could always do programming in a later project!",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-awakening/dungeon-progress.png",
          caption: "map with placeholders during testing",
        },
        {
          type: "text",
          text: "I also worked closely with the overall game design. We discussed procedural generation of the map levels for replayability, and I also contributed to the map design/layout. Above is a photo of the proposed layout with placeholder assets to determine functionality.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-awakening/gameplay-1.png",
          caption: "map after adding custom assets",
        },
        {
          type: "text",
          text: "The benefit of being an artist is that the game’s feel and aesthetic is mainly determined by your own work. The programming of a game makes it functional, but the design is what makes it appealing. I felt this while making the project because it felt like I had a bigger hand in its creation and more ownership in my design decisions. I went through several iterations for a few assets and was able to draft different ideas. My team essentially told me to “go wild.”",
        },
        {
          type: "text",
          text: "I also proposed new features as I was working. For example, I created a sample pterodactyl animation for a new enemy type, which ended up being one of my team’s favorite features. This enemy, instead of directly attacking the player, flies over the screen and drops flaming rocks that light nearby trees on fire. The spreading fire hurts the player’s hp.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-awakening/pterodactyl.gif",
          caption: "flying enemy animation",
        },
        {
          type: "text",
          text: "Technically, I also learned a lot. I was able to get very familiar with Aseprite (a pixel art software) and practiced animating on the software, which I’ve never done before. I practiced key animation principles like squash & stretch, follow through, slow in & slow out, etc, though I wish I had exaggerated my sprites more. Now looking at it, they look somewhat stiff, so I’d probably consider that in the future.",
        },
      ],
      sections: [
        {
          title: "Edge Cases Discovered Along the Way",
          style: "callout",
          body: [
            {
              type: "text",
              text: "An early version of the final boss was going to have breakable bone armor that regenerated if he rolled around in mud. I created this concept in Aseprite, but it got cut due to scope creep.",
            },
            {
              type: "text",
              text: "The boss’s dodge needed real thought to not look dumb: it raycasts outward to find an open direction to dodge into, and charges straight out if every direction comes back blocked (i.e. it’s cornered).",
            },
          ],
        },
        {
          title: "Boss Design",
          body: [
            {
              type: "text",
              text: "I was able to assist in the brainstorming of the boss design, even though I didn’t directly contribute to its code. I thought it was one of the coolest things about this project so I figured I should give it a mention!",
            },
            {
              type: "text",
              text: "My team used a state machine to transition between the boss’s varying states (idle, charging, attacking, etc.) which I thought made a pretty effective implementation. The coolest part about the boss fights is that the player has the ability to parry the boss’s attacks. I’ve played so many games with this mechanic that it was exciting to see it being implemented in our game!",
            },
            {
              type: "text",
              text: "On the art side, I was in charge of creating both the boss and player attack sprite. This was a critical game design decision, as the way the boss sprite is animated needs to indicate to the player that it will attack soon so the player can prepare. The game wouldn’t be intuitive if attacks suddenly came out of the blue. Thus, I ended up making an animation where the boss “reels back,” opening its mouth to attack. I also had the sprite flash briefly to show the incoming attack more obviously (three ticks every time so the player knows exactly when to expect the bite).",
            },
            {
              type: "image",
              src: "/images/projects/gallery/slimed-awakening/nandoattack.gif",
              caption: "first boss attack animation",
            },
          ],
        },
      ],
    },
    solution:
      "I made a few dozen assets including characters, combat animation, environment, ending cards, etc. Making good designs is pretty labor intensive, but it was a great experience getting familiar with a new software.",
    reflection: [
      "While working in a team, I learned the importance of taking on the role that’s needed most - essentially learning to put the team before myself.",
      "Being an artist allowed me to get a deeper understanding of design decisions and affect the game’s feel in a more influential way.",
      "First time animating with pixel art, which was pretty sick!",
    ],
    imageUrl: "/images/projects/slimed-awakening-cover.jpg",
    solutionImageUrl: "/images/projects/slimed-awakening-solution.png",
    videoUrl: "/videos/slimed-awakening-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/slimed-awakening/boss-fight-design.png", caption: "Boss design doc — Nano's armor phases, attack states, and dodge logic" },
      { src: "/images/projects/gallery/slimed-awakening/boss-gameplay.png", caption: "Boss fight in progress" },
      { src: "/images/projects/gallery/slimed-awakening/pterodactyl-sprite-sheet.png", caption: "Pterodactyl enemy sprite sheet" },
      { src: "/images/projects/gallery/slimed-awakening/promo-art.png", caption: "Promo art" },
    ],
    docLinks: [
      { label: "Nano boss fight design doc", href: "https://docs.google.com/document/d/1Z4awgx4DBe7KPM3CNtxoM09Yh1rIt5_IR9P0TyU3FKk/edit?usp=sharing" },
      { label: "Project overview & brainstorm", href: "https://docs.google.com/document/d/101P2PRV292vtx0xF7dBs-FUBj826TApb70Wtgmly1VM/edit?usp=sharing" },
      { label: "Pitch doc & task tracker", href: "https://docs.google.com/document/d/1mTkSzyyP_baqCHDl4AQEsm1h0MAqjPB9YU9bKjRcgx8/edit?usp=sharing" },
    ],
    color: "#0A0D1A",
    itchLink: "https://underduke.itch.io/slimed-awakening-beta",
    status: "complete",
    category: "game",
  },

  {
    slug: "slimed-origins",
    title: "Slimed: Origins",
    hook: "An interactive narrative where a triceratops must investigate her brother's mysterious murder.",
    tags: ["Team · 4", "Lead artist", "Twine", "Complete"],
    year: "January 2026",
    role: "Lead artist — all pixel art (environment, characters, ending cards); helped brainstorm narrative and series flow",
    timeline: "Complete",
    tools: ["Aseprite", "Twine"],
    overview:
      "Slimed: Origins is an interactive narrative built in Twine. It's the first game in our series, meant to set its tone, so the team leaned into narrative and even built quick-time events (a timed dodge during training, a parry-and-counter fight) directly into the passage graph. You play as a triceratops investigating the murder of her brother, the tribe's chosen fighter for an annual duel that decides which of two food-scarce dinosaur tribes controls the region's resources. The trail leads to a nanotyrannus, the rival tribe's own champion. From there, you must choose: peace, or war?",
    audience:
      "Players who want a choice-driven story.",
    process: {
      intro: [
        {
          type: "text",
          text: "Our team was asked to build a series of games for the North Carolina Museum of Sciences for their new exhibition: “dueling dinosaurs.” The exhibition is basically the fossil of a triceratops and nanotyrannus engaged in a battle where they met their end.",
        },
        {
          type: "text",
          text: "Because the premise of the exhibition was a duel, we decided to center the narrative around a war/conflict. We planned the series of games to follow a complete narrative as a whole, with this game being the first piece.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-origins/brainstorming.jpg",
          caption: "Whiteboard — sketching how Origins' branches connect into the rest of the Slimed series",
        },
        {
          type: "text",
          text: "Depending on what ending the player got at the end of this game, it'll branch out to different games/endings in the next. As you can see in the above picture (if you can decipher it!), Origins has two endings: one peaceful, and one that leads to war.",
        },
        {
          type: "text",
          text: "The actual development of the game was pretty simple, as we did it through Twine. After writing the script, we simply had to make the flow of the story using Twine's software.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-origins/programming-flow.png",
          caption: "Twine programming flow",
        },
        {
          type: "text",
          text: "To add more interaction, we made it more interactive by adding quick time events where the player has to dodge the enemy's bites. Additionally, we created a combat system where every choice has a random chance of landing a critical hit.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-origins/jaw.gif",
          caption: "attack animation",
        },
        {
          type: "text",
          text: "As the lead artist for this game, I had to make a couple 2D assets, but nothing too intensive for this stage. My favorite part of development was making the ending cards!",
        },
        {
          type: "image",
          src: "/images/projects/gallery/slimed-origins/gameplay-3.png",
          caption: "death screen, i tried to draw the peter griffin pose…",
        },
      ],
      sections: [],
    },
    explorationItems: [
      {
        title: "Build it in a game engine instead of Twine",
        description: "Godot or similar, with real-time scenes instead of a passage graph.",
        tradeoff:
          "More control over motion and UI, but the team wanted heavy narrative input for a series opener, and Twine's passage graph fit a branchy investigation better than a combat loop.",
      },
      {
        title: "Text-only, skip original art",
        description: "Let Twine carry the story with little or no illustration.",
        tradeoff: "Faster writing, but kind of boring.",
      },
      {
        title: "Twine narrative + full pixel art, with hand-rolled QTEs (what shipped)",
        description:
          "Aseprite art for environments, characters, and endings; Twine for flow, plus quick-time events built as passage chains: a timed dodge during training, a three-hit parry-and-counter against enemies. After the murder is uncovered, the story splits.",
        tradeoff:
          "The series gets a visual identity and multiple endings; more art assets needed.",
      },
    ],
    edgeCases: [],
    solution:
      "Complete interactive narrative in Twine with original pixel art for environments, characters, and ending cards.",
    reflection: [
      "Helping set narrative and flow for the whole Slimed series meant Origins had to work as a story and as a visual template later games could follow. For example, choosing pixel art as this game's visual style meant that we stuck to pixel art in later games as well.",
      "Even when making a game without a solid gameplay loop, such as a visual novel like this, there are still ways you can make it interactive! For example, we made a combat system using the most basic Twine software. The most important part is thinking outside the box and not dissuading yourself from using software in a way it's not explicitly marketed to do.",
      "I noticed due to the framing of the story, most playtesters chose the war ending, funnily enough. Looks like they all got caught up in the heat of the moment…!",
    ],
    imageUrl: "/images/projects/slimed-origins-cover.jpg",
    solutionImageUrl: "/images/projects/slimed-origins-solution.png",
    videoUrl: "/videos/slimed-origins-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/slimed-origins/design-doc.png", caption: "Design doc — setting, goals, key challenges, and audience" },
      { src: "/images/projects/gallery/slimed-origins/gameplay-2.png", caption: "In-game dialogue" },
      { src: "/images/projects/gallery/slimed-origins/ending.png", caption: "One of the three endings" },
    ],
    docLinks: [
      { label: "Full script", href: "https://docs.google.com/document/d/1p-WLCxlV6QFF4VZUkX-jKUVo1JeWvtf-RGQ8HNC2Z5s/edit?usp=sharing" },
      { label: "Story outline", href: "https://docs.google.com/document/d/1B6XD8KnWsVlZWPPuDWgdts8_wQaHS8jcOctw06WvjmA/edit?usp=sharing" },
    ],
    color: "#1A100A",
    status: "complete",
    category: "game",
  },

  {
    slug: "ai-glaze-visualization",
    title: "Ceramic AI",
    hook: "Predict physical glaze outcomes by picking a clay body, glaze type, and temperature cone in a 3D web simulation.",
    tags: ["Team · 5", "three.js", "ML", "Complete"],
    year: "Summer 2026",
    role: "Lead software developer",
    timeline: "Complete",
    tools: ["VS Code", "Vercel", "GitHub", "three.js", "XGBoost"],
    overview:
      "Ceramic AI explores how AI can assist in complex material design, using ceramic glaze as the case study. Normally, firing ceramics is a trial-and-error process across composition, firing temperature, and many other variables. Ceramic AI uses machine learning to simulate a 3D prototype of what the glaze would look like without having to go through physical processes.",
    audience:
      "Artists, architects, ceramicists, and researchers who want to simulate potential glaze outcomes efficiently without using physical resources.",
    process: {
      intro: [
        {
          type: "text",
          text: "Our team was awarded an Arts + Data Science Interdisciplinary Mini-Grant worth $5,000 for this project. Our intention was to find a way to help artists through technological solutions, saving money, resources, and time.",
        },
        {
          type: "text",
          text: "I worked on an interdisciplinary team where I led simulation and interface development, while others worked on the physical ceramic display.",
        },
        {
          type: "text",
          text: "One of the first problems I ran into was figuring out how to actually classify glazes in a way a program could use. Glaze names don't tell a model anything (what is “Rutile Blues” supposed to mean to an algorithm, anyways?). I figured out that we could represent every clay body and glaze as a set of oxide chemistry values instead (like SiO2_percent: 68.0) so the program had something it could actually quantify and adjust.",
        },
        {
          type: "text",
          text: "So the flow essentially is: a user picks a clay body, glaze, and firing temperature, and that gets converted into oxide composition percentages, which feed into a handful of separate Extreme Gradient Boosting (XGBoost) models: one for material type, one for surface type (glossy, satin, matte), one for transparency, and one for RGB color.",
        },
        {
          type: "text",
          text: "XGBoost is a machine learning method that builds a bunch of small decision trees one after another, where each new tree tries to correct the mistakes the previous ones made. We picked it because it's really good at finding patterns in this kind of structured, spreadsheet-style data, it trains fast, and it doesn't need a massive dataset.",
        },
        {
          type: "text",
          text: "Once those predictions come back, I used three.js. It's a JavaScript library for rendering 3D graphics in the browser using WebGL. Here, it takes the predicted color, gloss, and transparency and builds the glaze onto a 3D model that can be rotated and looked at.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/ai-glaze-visualization/glaze-simulation.png",
          caption: "Glaze simulation interface",
        },
        {
          type: "text",
          text: "Training data turned out to be the harder problem. We originally wanted to train and test everything on the public Glazy ceramics database, but its colors didn't actually match our own clay. Glaze properties change based on how they're made, which varies based on who makes them. The Glazy samples weren't close at all to what we were producing in real life.",
        },
        {
          type: "text",
          text: "Glazy still worked fine for the material-type, surface-type, and transparency classifiers, since those patterns hold up fine. But for color, we had to fall back to a small experimental dataset we tested ourselves.",
        },
        {
          type: "text",
          text: "That's a tiny amount of data to train a regression model on, so the RGB predictor is likely overfit to it. It was fine for our purposes (proof of concept), but if we were to continue, we would need to gather more data. You can't make up data with algorithms.",
        },
        {
          type: "text",
          text: "While I was working on the simulation and tech, I was also attending frequent meetings with the rest of the team, who focused on the physical models. Our intention was to align what we could model with machine learning with what is actually fired, measuring the visual difference between glaze on three clay bodies (porcelain, dark star, and okee medium). Check out this prototype! Isn't it awesome?",
        },
        {
          type: "image",
          src: "/images/projects/gallery/ai-glaze-visualization/physical-sample-1.jpg",
          caption: "Physical ceramic sample, fired for comparison",
        },
      ],
      sections: [],
    },
    solution:
      "Complete. Ceramic AI is a working glaze-prediction tool: pick a clay body and glaze, and an XGBoost model trained on real fired samples (supplemented by the Glazy dataset) predicts the outcome, rendered live in three.js.",
    reflection: [
      "I learned how to creatively quantify measurements that may not have predefined methods of measurement.",
      "Leading simulation and interface made me realize that the model, the three.js view, and the physical samples all have to stay aligned for a cohesive project.",
      "Good data is everything when it comes to machine learning. No model can make up for a lack of data, and the amount of data you have makes all the difference when it comes to performance.",
    ],
    imageUrl: "/images/projects/ai-glaze-visualization-cover.jpg",
    solutionImageUrl: "/images/projects/ai-glaze-visualization-solution.png",
    videoUrl: "/videos/ai-glaze-visualization-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/ai-glaze-visualization/simulation-model.png", caption: "Simulated glaze-and-form combinations from the three.js model" },
      { src: "/images/projects/gallery/ai-glaze-visualization/glaze-model-code.png", caption: "The GlazeModel component — gloss and color drive the material in real time" },
      { src: "/images/projects/gallery/ai-glaze-visualization/physical-sample-2.jpg", caption: "Physical ceramic sample, close-up" },
    ],
    docLinks: [
      { label: "Project plan", href: "https://docs.google.com/document/d/1Pg_ZdsjxeiYKgU6v215eWJ7gSH4V4Cxr/edit?usp=sharing&ouid=114105664643759049425&rtpof=true&sd=true" },
    ],
    color: "#0A1520",
    link: "https://github.com/monicajin05/CeramicAI",
    liveLink: "https://ceramic-ml-glaze.vercel.app/",
    status: "complete",
    category: "software",
  },

  {
    slug: "crazy-old-mans-trip",
    title: "Crazy Old Man's Trip",
    hook: "A veteran fights ghosts of his past and manages his sanity to survive.",
    tags: ["Team · 5", "Unreal", "3-week jam", "Complete"],
    year: "October - November 2025",
    role: "Texture and level designer — Unreal, Aseprite textures, core mechanics brainstorm, game design",
    timeline: "3-week game jam, complete",
    tools: ["Unreal", "Aseprite", "Blender", "GitHub"],
    overview:
      "A psychological horror game where a veteran, haunted by demons from his past, manages his sanity by defeating them. Sanity from kills upgrades weapons and unlocks map areas; getting hit costs sanity. The lower it gets, the harder the demons hit; the game ends below zero.",
    audience:
      "Players who want a short FPS with a sanity economy.",
    process: {
      intro: [
        {
          type: "text",
          text: "This was built for a game jam with the theme “illusion.” When brainstorming for ideas, we brought up a lot of interesting concepts (“veteran of war!” “fighting ghosts” “samurai battlefield” “ptsd, maybe?”), and, in order to include everyone's ideas, we synthesized all of them into one horrific amalgamation.",
        },
        {
          type: "text",
          text: "Thus, the story now follows an old veteran of war who fights demons born of his ptsd. It sounds kind of crazy (which is why we called it crazy old man's trip haha) but we were able to come up with a lot of interesting features using this premise! For example, we brainstormed a sanity management system where the player needs to avoid being hit by enemies, lest their sanity decrease. The player can also use their “sanity points” to buy upgraded weapons and unlock new areas of the map. We could've easily called these points the players health, or experience, or mana – but framing it as “sanity” ties into the theme of our game.",
        },
        {
          type: "text",
          text: "The difference between a “good” product and a “great” product is always framing!",
        },
        {
          type: "image",
          src: "/images/projects/gallery/crazy-old-mans-trip/design-doc.png",
          caption: "Cutscene storyboard and menu sketch",
        },
        {
          type: "text",
          text: "Other than helping lead game design convos, I also was in charge of texturing and level design. This was my first major game developed in Unreal, so it was a great learning experience. I did encounter some problems, mostly with the textures.",
        },
        {
          type: "text",
          text: "I created a couple of tile patterns using Aseprite for a grainy, pixelated look, and it was relatively easy to import them in Unreal. However, I noticed that using textures on different sized objects would cause the texture to scale weirdly based on the object's dimensions. For example, the pattern would end up really stretched, squashed – just messed up in general.",
        },
        {
          type: "text",
          text: "Later on, I found out that what I actually needed was to scale the UVs by the object's own X and Y scale before using the texture. This was done through Unreal's material graph with node based coding, which really tripped me up in the beginning because I've never done anything node based before. However, this process of trying to figure out how to make textures scale proportionally made it somehow “click” for me, and now I have a better understanding of how node programming translates to actual code. I'm actually even fond of it now!",
        },
        {
          type: "image",
          src: "/images/projects/crazy-old-mans-trip-solution.png",
          caption: "the material fix",
        },
        {
          type: "callout",
          title: "The More You Know",
          text: "Looking back with what I know now about 3D art, it makes sense. Back then i didn't understand what UVs were, but now I realize that they are calculated separately from the actual entity and need to be considered for when applying scaling. The more you know!",
        },
        {
          type: "text",
          text: "I also created the main level for the game. I went through a couple iterations to make sure the rooms were sufficiently large enough for ease of moment, just wanted to make sure the level design lended itself to a satisfying play feel. I made this directly through unreal - let's just say I had to get real comfortable with booleans…",
        },
        {
          type: "image",
          src: "/images/projects/gallery/crazy-old-mans-trip/environment.png",
          caption: "level design progress",
        },
        {
          type: "text",
          text: "I also made this profile icon that i'm pretty proud of.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/crazy-old-mans-trip/character-portrait.gif",
          caption: "this took me way too long.",
        },
      ],
      sections: [],
    },
    explorationItems: [
      {
        title: "Ship without custom textures; block out levels only",
        description: "Engine defaults and graybox volumes so combat can be tuned.",
        tradeoff: "Faster jam combat, but no pizzazz. Harder to make the story come across fully.",
      },
      {
        title: "Drop sanity as a map-and-upgrade currency",
        description: "Treat it as flavor or a simple health bar.",
        tradeoff:
          "Simpler FPS, but then kills would not unlock weapons and areas the way the sanity system is built to.",
      },
      {
        title: "Sanity as progression, with textures and levels (what shipped)",
        description: "Unreal levels plus custom Aseprite textures.",
        tradeoff:
          "The economy is readable in the world; a 3-week jam leaves not a lot of time to iterate both art and game programming. We were kind of rushing to the finish line, but the end result was worth it!",
      },
    ],
    edgeCases: [
      "Long story short, textures ported over from Aseprite came in stretched across surfaces of different sizes in Unreal. The fix was a material graph that scales the UVs by the object's own X and Y scale before sampling the texture, so it stays proportional no matter the size of the mesh.",
    ],
    solution:
      "Complete jam build in Unreal with custom textures, level design, and a unique sanity management system that makes it stand out from other fps!",
    reflection: [
      "Even when you got a crazy idea, being able to think outside the box and frame new features as part of your theme is key to making it believable.",
      "Framing will change the way people view your narrative and your product.",
      "My node programming skills have significantly improved from absolute zero.",
    ],
    imageUrl: "/images/projects/crazy-old-mans-trip-cover.jpg",
    videoUrl: "/videos/crazy-old-mans-trip-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/crazy-old-mans-trip/screenshot-2.png", caption: "In-engine screenshot" },
      { src: "/images/projects/gallery/crazy-old-mans-trip/progress.png", caption: "Early level-building progress" },
      { src: "/images/projects/gallery/crazy-old-mans-trip/progress-2.png", caption: "Hallway lighting pass" },
    ],
    color: "#1A0A0A",
    itchLink: "https://napoli2005.itch.io/old-mans-crazy-trip",
    status: "complete",
    category: "game",
  },

  {
    slug: "battle-zone-3d",
    title: "Battle Zone 3D",
    hook: "Real-time WebGL remake of Battle Zone in 3D.",
    tags: ["Solo", "WebGL", "GLSL", "Complete"],
    year: "December 2025",
    role: "Solo — programming, 3D modeling, graphics processing",
    timeline: "Complete",
    tools: ["VS Code", "Blockbench", "GitHub"],
    overview:
      "A real-time WebGL rendition of Battle Zone with some extra modifications, such as being purely 3D. Contains two modes that the player can switch between: one that is traditionally Battle Zone, and a mode where the player can control a ship in space.",
    audience: "Those who enjoy playing reboots of classic arcade games.",
    process: {
      intro: [
        {
          type: "text",
          text: "Battle Zone is a game that I played as a kid, so I decided to try and recreate it using pure computer graphics. This project was mostly an experiment to push the limits of what I can do using WebGL shaders.",
        },
        {
          type: "text",
          text: "Every object you see on screen starts out as a bunch of points in 3D space, a mesh. To turn “a bunch of points” into “a picture on your screen,” the GPU runs every point through two programs: a vertex shader and a fragment shader.",
        },
        {
          type: "text",
          text: "The vertex shader's job is figuring out WHERE things go. It moves every point using a model-view-projection (MVP) transform, which is really just three transforms stacked on top of each other. “Model” moves an object to wherever it actually sits in the game world; “view” shifts everything relative to where the camera is looking; “projection” squishes that 3D world down into the flat 2D rectangle of your screen. Chain all three together and that's how a tank sitting at some coordinates in the game world ends up as a tank-shaped cluster of pixels in the right spot on your monitor.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/battle-zone-3d/vertex-shader.png",
          caption: "Custom vertex shader — MVP transform",
        },
        {
          type: "text",
          text: "Once the GPU knows WHERE everything goes, the fragment shader decides what COLOR each pixel should be. Mine is pretty simple: a flat ambient glow so nothing is ever pitch black, plus Lambertian diffuse shading, which is really just a fancy way of saying “surfaces facing the light get brighter, surfaces facing away get darker.” I calculate that per-face instead of smoothing it across the whole model, which gives everything a blocky, low-poly look for a cooler aesthetic.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/battle-zone-3d/fragment-shader.png",
          caption: "Custom fragment shader — ambient/diffuse lighting",
        },
        {
          type: "text",
          text: "I also had to build the rest of the rendering pipeline myself. I depth tested so objects actually occlude each other correctly instead of drawing on top of one another, and asset loading from OBJ files that get uploaded straight to GPU vertex buffers, alongside procedurally generated ground and obstacle meshes. For the camera, I built a third-person chase view plus mouse aiming, basically unprojecting the mouse's screen-space position into a world-space ray and figuring out where that ray hits the ground plane. This way, your aim actually lines up with where you're pointing, which is (obviously) pretty important.",
        },
        {
          type: "text",
          text: "My favorite part is the mini-map. I made it a second WebGL viewport, rendering the whole scene a second time from a top-down orthographic camera.",
        },
        {
          type: "text",
          text: "As for the actual 3D models — I built the tank (and the spaceship for the alternate mode) in Blockbench. I'm no genius at 3D modeling, but for a tank made of a base, a turret, and a barrel stuck together, it at least looks like a tank if you squint.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/battle-zone-3d/tank-model.png",
          caption: "Simple custom tank model",
        },
        {
          type: "text",
          text: "Gameplay-wise, it's just like classic Battle Zone: W/S drive forward and backward, A/D rotate the tank, the mouse aims and rotates the turret, and space/mouse click fires. Mountains block you, but hills can be driven over, and the radar tells you where the enemies are. Get hit and your score resets.",
        },
        {
          type: "text",
          text: "Press “!” and you'll drop into the alternate mode I made using assets from the base game: Spaceship Battle Zone, which swaps the tanks and mountains for spaceships and asteroids. The controls open up to full 3D movement — W/S/A/D plus Q and E to move up and down.",
        },
        {
          type: "text",
          text: "I also added: a tracked and displayed score, a third-person camera attached to the back of the player's tank, actual 3D gameplay with varying elevation and rotating turrets/cannons you can aim up/down and left/right, and the minimap/radar display. If I had extra time, I would've liked to add a leaderboard or something to show off the highest score you earned in a single play session. Add some competition into it!",
        },
      ],
      sections: [],
    },
    explorationItems: [
      {
        title: "Use an engine or a high-level 3D library",
        description: "Unity, Godot, or a scene-graph library.",
        tradeoff:
          "No need to write my own shaders, MVP math, extra viewports, etc. Less deep understanding of graphics.",
      },
      {
        title: "Skip the mini-map and extra viewport",
        description: "Only add one camera; HUD as HTML or a simple overlay.",
        tradeoff:
          "Less GPU and camera bookkeeping, but no addition of one of Battle Zone's pivotal features.",
      },
      {
        title: "Raw WebGL with custom shaders (what shipped)",
        description:
          "Added vertex/fragment shaders, MVP, OBJ assets, third-person mouse aim/shoot, mini-map viewport, etc.",
        tradeoff: "Full control of the pipeline, more effort.",
      },
    ],
    edgeCases: [
      "The mini-map is a genuine second WebGL viewport inside drawRadar(), not a separate canvas or an HTML overlay. I learned I needed to clear the depth buffer before moving the camera to the new view, or the second pass reads stale depth from the first.",
    ],
    solution:
      "Complete solo WebGL game with custom shaders, 3D modeling, third person shooting, etc!",
    reflection: [
      "Doing programming, modeling, and graphics processing solo meant the shaders and the two models were the entire visual system. There's no engine art pipeline to hide behind, so every rough edge was on me.",
      "This got me a lot more familiar with graphics and GPU processing. I knew before that a GPU actually turns 3D points into pixels, but I didn't really understand MVP transforms and shading models until I came out of this project. I really needed a strong foundation to make this game. It was a struggle, but worth it!",
      "Recreating something you played before is a great way to practice something vs building an original concept.",
    ],
    imageUrl: "/images/projects/battle-zone-3d-cover.jpg",
    vimeoBackgroundId: "1180000932",
    galleryImages: [
      { src: "/images/projects/gallery/battle-zone-3d/spaceship-model.png", caption: "Spaceship model, built in Blockbench" },
      { src: "/images/projects/gallery/battle-zone-3d/gameplay-2.png", caption: "Third-person gameplay" },
    ],
    color: "#0D1A0F",
    link: "https://github.com/monicajin05/Battlezone",
    status: "complete",
    category: "game",
  },

  {
    slug: "catacombs",
    title: "Catacombs",
    hook: "Find which of your three hotel guests committed a murder!",
    tags: ["Team · 4", "Godot", "2-day jam", "Complete"],
    year: "September 2025",
    role: "Lead game manager — programming (assets, inventory, UI, assisted save-state), game design and narrative structure",
    timeline: "2-day jam, complete",
    tools: ["Godot", "GitHub", "Procreate"],
    overview:
      "After a guest's disappearance, a hotel manager must find evidence to find the culprit among three suspects: a washed-up musician looking for inspiration, a mobster who claims to work in 'waste management,' and a boxer nursing a grudge after a bad match. Discover evidence and puzzle through the suspect's dialogue to determine who the real murderer is.",
    audience: "People who want a short mystery with talky characters.",
    process: {
      intro: [
        {
          type: "text",
          text: "This was for a two-day game jam with the theme “Tunnel.”",
        },
        {
          type: "text",
          text: "I’m not sure why the first thing we thought of when the theme was brought up was “oh yeah, catacombs!” I guess in a way, catacombs are a type of tunnel? It was a bit of a sus way to start off a game jam, but it lent itself to a bunch of interesting ideas.",
        },
        {
          type: "text",
          text: "I advocated for a spunky game with horror elements, where the player could discover hidden catacombs under a map. It quickly turned into a murder mystery narrative because we all really like narrative based games. One of our members mentioned the board game Clue as a potential source of inspiration, and that was that.",
        },
      ],
      sections: [
        {
          title: "Brainstorming",
          body: [
            {
              type: "text",
              text: "Choosing what format we wanted was one of our first big decisions. Did we want the map to be at a 3/4s angle? Or did we want it front-on? Personally, I thought a 3D 3/4s view could be visually interesting, but due to the game jam’s timeline we needed to be extra cautious about scope. A 2D front-on perspective was much more practical.",
            },
            {
              type: "image",
              src: "/images/projects/gallery/catacombs/brainstorming.jpg",
              caption: "brainstorming on a random piece of paper",
            },
          ],
        },
        {
          title: "Programming",
          body: [
            {
              type: "text",
              text: "Learning how to set a scene and transition in Godot was a big part of this project for me, since I was mainly doing game programming. I built an inventory bar that stored things the player could pick up, as well as helping both the art and programming side during communication and imports. I programmed the major functionality of the game, such as scene set ups, transitions, main menu cards, the timer, accusation functionality, flow of finding evidence, etc.",
            },
            {
              type: "image",
              src: "/images/projects/gallery/catacombs/implementation.png",
              caption: "placing collision boxes",
            },
            {
              type: "image",
              src: "/images/projects/gallery/catacombs/implementation-2.png",
              caption: "The sewer scene, with the accusation timer wired up",
            },
          ],
        },
        {
          title: "Issues",
          body: [
            {
              type: "text",
              text: "At 2 am in the morning, I noticed something was amiss with our save system. All player history (inventory, past pick-ups, etc.) was getting cleared every time we switched scenes, which would pose problems for the player. As it was 2 am, we were so exhausted that we could’ve easily ignored the bug, but instead decided to sacrifice our sleep and fix it. After poking around the code for a while, we discovered that a state machine would fix the issue.",
            },
            {
              type: "text",
              text: "As the de facto project manager, I called for frequent come-togethers and asides during our work sessions, just to whiteboard what our next steps should be based on how much we'd actually gotten done. At first, we wanted to add extra evidence that could individually incriminate each resident and make it more of a challenge, but we caught on early that we probably couldn't pull that off in two days. Instead, we made it more of a linear game that depended on careful writing to keep the player second-guessing, instead of building out a whole deduction mechanic.",
            },
            {
              type: "text",
              text: "I ended up being the bridge between art and programming by taking whatever our artist made and wiring it into the actual game. I found out this required really seamless communication skills so I wouldn’t direct our artist to create an asset for something that wasn’t even specified by our narrative designer. It was good I've been a game artist before – since I knew the pain already, I avoided a lot of time-wasting decisions.",
            },
          ],
        },
        {
          title: "What I Learned From Judging",
          body: [
            {
              type: "text",
              text: "Framing is key. A lot of people didn't guess the culprit, even though I thought we'd made it a little too obvious. Turns out the red herrings worked! (Just a little bit toooo well).",
            },
            {
              type: "text",
              text: "I think we should've considered the setting our game would actually be played in when gauging our audience. The testing room was packed, and people were bouncing from game to game all at once. A heavy narrative game that depends on paying close attention to clues just doesn't shine in that setting the way an addictive game loop does. Because it was such a short and chaotic judging period, most judges didn't have time to really play through our whole game, or they'd miss easy clues in favor of really obvious dialogue meant to mislead.",
            },
            {
              type: "text",
              text: "The biggest lesson I walked away with: CATERING TO YOUR DEMOGRAPHIC when making a product is more important than how clever it is.",
            },
          ],
        },
      ],
    },
    solution:
      "Completed a RPG in Godot with inventory, UI, asset wiring, and assisted save-state, plus character and plot design docs worked out ahead of implementation. If I'd had more time, the feature I really wanted was letting players pick up evidence and examine specific parts of it for more clues, instead of just collecting it. I'd also love to do a 3D rendition of this game!",
    reflection: [
      "Managing a game is mostly about integration: dialogue and rooms only work if inventory, UI, and saves don't cause problems under the hood.",
      "Catering to your actual demographic matters more than how clever your plot is, or how polished your assets are, or anything, really. Framing is EVERYTHING! Though I'm proud of what we made, we did not frame our game for the correct audience, as most players were looking more for a tight, addictive game loop that they could absorb easily.",
      "Catching scope creep before it ate our two days and making the call to cut features down was heartbreaking, but also very much needed.",
      "Bridging art and programming under a hard deadline was very interesting! I got to see this project from every angle instead of just my own corner of it.",
    ],
    imageUrl: "/images/projects/catacombs-cover.jpg",
    solutionImageUrl: "/images/projects/catacombs-solution.png",
    videoUrl: "/videos/catacombs-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/catacombs/character-bios.png", caption: "Character bios and motives for each suspect" },
      { src: "/images/projects/gallery/catacombs/plot-doc.png", caption: "Plot doc — the opening scene and suspects' relationships" },
      { src: "/images/projects/gallery/catacombs/design-doc.png", caption: "Early brainstorm — genre and gameplay-loop ideas" },
      { src: "/images/projects/gallery/catacombs/gameplay-2.png", caption: "Accusing a suspect" },
      { src: "/images/projects/gallery/catacombs/gameplay-3.png", caption: "Investigating the catacombs" },
      { src: "/images/projects/gallery/catacombs/end-screen.png", caption: "The end screen — \"Murder Strikes Again\"" },
    ],
    docLinks: [
      { label: "Brainstorming doc", href: "https://docs.google.com/document/d/1FNX9Y5OzW4zxZTqWdGfMSbatrUZSEYVh6-1y5Iih9kg/edit?tab=t.0" },
    ],
    color: "#1A1020",
    link: "https://github.com/monicajin05/Cat-Murder-Mystery.git",
    itchLink: "https://thebesttrazor.itch.io/catacombs",
    status: "complete",
    category: "game",
  },

  {
    slug: "tapioca-tails",
    title: "Tapioca Tails",
    hook: "Papa's Freezeria–style restaurant game: serve customers through boba, ice, and syrup minigames.",
    tags: ["Team · 5", "Unity", "2-day jam", "Complete"],
    year: "January 2025",
    role: "Asset implementation and UI programming; environment art",
    timeline: "2-day jam, complete",
    tools: ["Unity", "Procreate", "GitHub", "GitHub Desktop"],
    overview:
      "A restaurant time-management game where you aim to serve customers accurately and on time. Minigames include boba selection, catching ice from dispensers, syrup timing, and tea dispensing.",
    audience:
      "Players who like short cooking/serving games. 5-person jam team.",
    process: {
      intro: [
        {
          type: "text",
          text: "This game was intended to play like restaurant management games, such as Papa's Freezeria – just with boba instead. These games are classics that everyone on the team had experience with, so it was easy to get a game plan going.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/tapioca-tails/game-plan.png",
          caption: "Awesome Game Plan",
        },
        {
          type: "text",
          text: "Our team contained more artists than programmers, though as Papa's games rely on various art assets, we figured this would be a good thing. I mainly did UI programming and assisted the artists when they needed help; more basic work as this was my first time programming in Unity. I learned a lot about using version control during this project – version control for games is significantly more difficult to use than for any other software product, as they are usually quite large and have a lot of files that can be manipulated. Here, I learned how to use GitHub Desktop in my workflow to make pushing/pulling easier rather than doing it through the terminal. We also had a couple merge conflicts that I learned how to resolve.",
        },
        {
          type: "callout",
          title: "Sidenote",
          text: "Unity is actually pretty good for version control; Unreal is the real menace. I'm still not sure why they track every file for even a change as small as moving your POV in the engine. I'm looking for a way to make the process easier — a professional studio I talked to mentioned they use Perforce, so I'm thinking of switching over.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/tapioca-tails/gameplay-2.png",
          caption: "syrup minigame",
        },
        {
          type: "text",
          text: "Though we got our basic functionalities finished during the game jam, the game as a whole isn't done. There are still some bugs, buttons that don't work, and features/assets that weren't put in within the 48 hr time period. Remember when I mentioned that there were more artists than programmers on the team? Turns out, a balanced team is extremely necessary when wanting to create something end-to-end within a limited time frame. When the crunch was on, the programming side was very stretched and couldn't accommodate all the assets that were created by the artists.",
        },
      ],
      sections: [],
    },
    explorationItems: [
      {
        title: "Don't implement minigames",
        description: "Tap to complete an order; skip boba / ice / syrup timing.",
        tradeoff: "Easier to finish, but not as engaging.",
      },
      {
        title: "Add in minigames (what shipped)",
        description: "Unity implementation and UI.",
        tradeoff: "Requires more time on the programming side.",
      },
    ],
    edgeCases: [],
    solution: "Completed game in Unity with UI/asset implementation.",
    reflection: [
      "Though we were able to get a viable product, I learned through this experience that a team can only be truly efficient if all functionalities are accounted for. In games, which require a lot of interdisciplinary skill, this is especially true. A game cannot exist without art, as that gives it appeal, nor without programming, which makes it…you know, actually work.",
      "Learned lots about correct version control best practices! Got more hands on with Unity too, which was pretty exciting.",
    ],
    imageUrl: "/images/projects/tapioca-tails-cover.jpg",
    videoUrl: "/videos/tapioca-tails-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/tapioca-tails/side-view-background.png", caption: "Side-view restaurant environment art, painted in Procreate" },
      { src: "/images/projects/gallery/tapioca-tails/gameplay-1.png", caption: "Order selection screen" },
      { src: "/images/projects/gallery/tapioca-tails/gameplay-3.png", caption: "The ice-catching minigame" },
      { src: "/images/projects/gallery/tapioca-tails/bear-walk.gif", caption: "Customer walk cycle" },
    ],
    color: "#1A1510",
    itchLink: "https://zenntavros.itch.io/tapiocatails",
    status: "complete",
    category: "game",
  },

  {
    slug: "encore",
    title: "Encore!",
    hook: "An environmental horror platformer where a magician defies a maestro obsessed with a 'perfect' show.",
    tags: ["Team · 22", "Unity", "Environment art", "Complete"],
    year: "Summer 2025",
    role: "Environment artist",
    timeline: "Complete",
    tools: ["Unity", "Procreate"],
    overview:
      "Encore! is a 2D environmental horror puzzle-platformer. You play a small stage magician trying to escape the Maestro, a conductor obsessed with keeping the show 'perfect.' You fight through performers turned into monsters, starting with a ballerina who's always dancing somewhere in the distance.",
    audience: "Players who want atmosphere-led horror.",
    process: {
      intro: [
        {
          type: "text",
          text: "To get more hands on with game development, I joined a large student team as an artist to learn more about the development process. Through this experience, I was able to align artist decisions with narrative driven details, onboard new artists, and present at the Student Game Developers' Alliance (SGDA) Summit in Summer 2025.",
        },
        {
          type: "text",
          text: "The most important part of this process was learning how to communicate on a large team. It was surprising to me how closely artists, narrative designers, and programmers work together. Programmers would have to communicate with me which assets should be interactable and which ones shouldn't, or which parts will need to be edited on the programming side. For example, in the first level, a giant piano needed to drop from the ceiling once the rope was cut and crush the light below. Because the animation was instead done by a transformation on the programming end, I had to make considerations while designing the level by separating the piano and ropes onto different layers, and making two versions of the level: one with the light, and one without the light.",
        },
        {
          type: "text",
          text: "There was also a significant amount of back-and-forth between our team and the narrative designer. As no words are spoken in this game, the majority of the lore needed to be communicated from artistic choices. There were many iterations needed on the art team's end to make sure those plot points were being accurately conveyed.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/encore/game-design.png",
          caption: "level & puzzle design",
        },
        {
          type: "image",
          src: "/images/projects/gallery/encore/trap-design.png",
          caption: "level 1 design",
        },
        {
          type: "text",
          text: "There were also a lot of back-and-forths about how environment art may affect gameplay. We discussed how the size of platforms could affect the player's jumps or traversals based on how tall/long they are, and we did multiple playtests to make sure the game flowed as smoothly as possible. This was especially important when the enemies were finalized, because we didn't want to somehow softblock the player by making the level impossible to beat.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/encore/environment-0-final.png",
          caption: "level 1 final product",
        },
      ],
      sections: [],
    },
    solution:
      "Five environments created using Unity and Procreate. The game was shipped on itch and we did a presentation at the SGDA Summit in Summer 2025.",
    reflection: [
      "Iteration, staying flexible, and taking feedback instead of getting attached to a first pass is extremely important as a team member. These processes are key to making sure your product is intuitive and conveys the right ideas.",
      "This was my first time working with such an interdisciplinary team, and I learned that communication and frequent check-ins/feedback is important to make sure we're all on the same page.",
    ],
    docLinks: [
      { label: "Game design doc", href: "https://docs.google.com/document/d/112Bh7UdHYZ9SufLIvyEaXYXoNVlwG5ILHBE_1vy-aco/edit?tab=t.0" },
      { label: "Level design guide", href: "https://docs.google.com/document/d/1l2ZV5OM-WDdUgM92Hpf7emUzCQFadrTzQ6PP2PSnHiQ/edit?tab=t.0#heading=h.frod1xfwvdq" },
    ],
    imageUrl: "/images/projects/encore-cover.gif",
    solutionImageUrl: "/images/projects/encore-solution.png",
    galleryImages: [
      { src: "/images/projects/gallery/encore/environment-1-iteration.png", caption: "Environment 1, an early iteration" },
      { src: "/images/projects/gallery/encore/environment-2-final.png", caption: "Environment: the vanity mirror" },
      { src: "/images/projects/gallery/encore/trap-mechanism.png", caption: "Trap mechanism sketch" },
      { src: "/images/projects/gallery/encore/gameplay-1.png", caption: "In-game — the ballerina always in the distance" },
      { src: "/images/projects/gallery/encore/gameplay-2.png", caption: "In-game — the throw tutorial" },
      { src: "/images/projects/gallery/encore/title-screen.png", caption: "Title screen" },
    ],
    color: "#101A1A",
    itchLink: "https://nyela.itch.io/encore",
    status: "complete",
    category: "game",
  },

  {
    slug: "adversarial-attacks",
    title: "Adversarial Attacks",
    hook: "Recreating and studying physical adversarial patterns that fool person-detection.",
    tags: ["Solo", "Research", "REU", "Complete"],
    year: "Fall 2024",
    role: "Solo researcher",
    timeline: "Complete",
    tools: ["VS Code", "PyTorch", "TensorFlow"],
    overview:
      "Research using adversarial attacks to find weaknesses in visual detectors via gradient-based models and physical systems. Studied how physical adversarial patterns (e.g. patterned t-shirts) achieve high attack success against person-detection algorithms.",
    audience:
      "Readers interested in vision-system robustness and physical adversarial examples.",
    process: {
      intro: [
        {
          type: "text",
          text: "This was a Fall 2024 REU project with a $3000 grant that I designed and scoped. The starting question was about autonomous vehicle safety: visual detectors (the kind that spot pedestrians) can be tricked by adversarial attacks, and prior work/news stories had already shown that a specific pattern printed on a plain t-shirt could get a person detector to just...not see you. I wanted to actually recreate that and understand why.",
        },
        {
          type: "text",
          text: "This built on a smaller case study I'd done earlier comparing FGSM (Fast Gradient Sign Method, a single-step attack) against PGD (Projected Gradient Descent, a multi-step iterative attack) on image classifiers. PGD was consistently the more effective of the two. So, if iterative attacks work better in the digital world, do physical patterns transfer the same way?",
        },
        {
          type: "text",
          text: "For this project I tested AdvPatch alongside FGSM and PGD, working through gradient-based digital attacks before getting into the physical-pattern side of things.",
        },
        {
          type: "image",
          src: "/images/projects/gallery/adversarial-attacks/fgsm-attack.png",
          caption: "FGSM attack, single-step perturbation",
        },
        {
          type: "image",
          src: "/images/projects/gallery/adversarial-attacks/pgd-attack.png",
          caption: "PGD attack, iterative perturbation",
        },
        {
          type: "text",
          text: "I read into how models can be defended against these attacks in the first place, including a paper out of my advisor's own lab, ProTransformer, which proposes a “robust attention” mechanism. This is basically a way to make transformer models less swayed by adversarial input tokens by changing how those tokens get statistically weighted.",
        },
        {
          type: "text",
          text: "I was really surprised that the more robust a model is against adversarial attacks, the less accurate it tends to be on clean data. I was confused at first because, if a model is robust, isn't that a good thing? How could it be less accurate?",
        },
        {
          type: "text",
          text: "Turns out, an adversarially-trained model needs to build a wide buffer zone around its decision boundary, so predictions stay stable even when an input gets perturbed. That buffer costs precision fitting the actual clean data. I realized that there's always going to be tradeoffs when trying to improve a model, and unfortunately, there's no one model that's just “better.”",
        },
      ],
      sections: [],
    },
    explorationItems: [
      {
        title: "Digital-only attacks (image-space)",
        description: "Perturb pixels only.",
        tradeoff:
          "Easier experiments; miss the physical-system question (t-shirts, real detectors).",
      },
      {
        title: "New attack method without recreations",
        description: "Propose an original algorithm first.",
        tradeoff: "More novelty on paper; no prior background, risky.",
      },
      {
        title: "Recreate physical patterns, then analyze (what was done)",
        description:
          "Gradient-based and physical systems. This built on an earlier case study I did comparing FGSM (single-step) against PGD (multi-step, iterative).",
        tradeoff: "Less room to innovate a brand-new attack.",
      },
    ],
    solution:
      "Complete REU project ($3,000): recreated physical adversarial patterns against person detection and analyzed why they work, with PGD/FGSM/patch training code.",
    reflection: [
      "Recreating a known physical attack is a great way to visualize a problem.",
      "There's no such thing as a universally 'better' model. An adversarially-trained model trades away some clean-data accuracy for a wider, more stable decision boundary. Every improvement is a tradeoff depending on what you're optimizing for.",
      "Research doesn't have to start from zero. Building on my own earlier FGSM-vs-PGD case study, and reading into existing work like ProTransformer, gave me a sharper question to ask than if I'd started with nothing.",
    ],
    imageUrl: "/images/projects/adversarial-attacks-cover.jpg",
    solutionImageUrl: "/images/projects/adversarial-attacks-solution.png",
    videoUrl: "/videos/adversarial-attacks-thumbnail.mp4",
    docLinks: [
      { label: "REU research proposal", href: "https://docs.google.com/document/d/1u1j2eTiOSsLu97ch3YP8TU4xKlx7bYXQnqVBlrB-qAg/edit?tab=t.0" },
      { label: "Robust attention analysis", href: "https://docs.google.com/presentation/d/14JKQ-HDFEOG7anAx-F5ANpHHyHF7FQXUvqyVCx8QT0U/edit" },
      { label: "Protransformer analysis", href: "https://docs.google.com/presentation/d/1KA0EZrWSNUHQllLWbhEz2l-0rYROk8iyuj9Bfoz-FZE/edit" },
    ],
    color: "#0A0A1A",
    status: "complete",
    category: "software",
  },
];
