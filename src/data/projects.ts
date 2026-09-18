export type ProcessBlock =
  | { type: "text"; text: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "video"; vimeoId?: string; src?: string; caption?: string };

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
  problem: string;
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
    problem:
      "It wouldn’t be video game development if there weren’t problems. There were two in particular I focused on:",
    problemBullets: [
      {
        text: "The rooms had to work as puzzles and as spaces players can move through. In the beginning, I noticed our rooms were WAYY too big and contained a lot of empty space. Playtests mostly ended up being walking with irritation, wishing I could sprint to my next destination.",
        subpoints: [
          "I had to resize each room in the map, which was pretty annoying since Godot doesn’t rescale collision boxes alongside actual assets, so I had to essentially resize everything twice.",
        ],
      },
      {
        text: "Because puzzle games naturally have more assets, our world tree was a complete mess.",
        subpoints: [
          "Every wall, floor, desk, etc was called ‘rect1,’ ‘rect2,’ etc. When I was resizing everything, I realized this was horrible!",
          "I refactored everything quickly and immediately everything became so much better. That was when I realized the importance of keeping your workflow and code clean…it really does make a difference.",
        ],
      },
    ],
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
    problem:
      "This was an asset-heavy project: I owned player and enemy idle/attack animation, environment art, asset design, and ending cards, on top of a procedural map and two bosses, while Jacob built the floor generation and tile implementation and Louis handled enemy AI. Volume and consistency were the real constraint.",
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
    problem:
      "A branching murder mystery needs art that still reads across every ending, plus a Twine flow that could carry real weight as the series opener — without a full game engine. Twine isn't built for anything beyond a passage graph, so interactive combat (a timed dodge, a parry-and-counter QTE) had to be hand-rolled as linked passages instead of real code.",
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
    slug: "crazy-old-mans-trip",
    title: "Crazy Old Man's Trip",
    hook: "FPS: a veteran fights ghosts of his past and spends sanity to upgrade weapons and open the map.",
    tags: ["Team · 5", "Unreal", "3-week jam", "Complete"],
    year: "Fall 2025",
    role: "Texture and level designer — Unreal, Aseprite textures, core mechanics brainstorm, game design",
    timeline: "3-week game jam, Fall 2025 (add-ons coming soon)",
    tools: ["Unreal", "Aseprite", "Blender", "GitHub"],
    overview:
      "A first-person shooter built for a game jam themed 'Illusion.' The team wanted to try a horror game and took the psychological route: a veteran haunted by demons from his own past, who manages his sanity by defeating them. Sanity from kills upgrades weapons and unlocks map areas; getting hit costs sanity; the lower it gets, the harder the demons hit; the game ends below zero. Made in a 3-week jam, Fall 2025. Complete, with add-ons coming soon. Listed on itch.io.",
    audience:
      "Players who want a short FPS with a sanity economy. 5-person jam team.",
    problem:
      "Three weeks in Unreal for a sanity-gated FPS: the loop (kills grant sanity, hits take it, zero is game over) has to teach itself through space and surfaces, not a long tutorial. My job was textures and level design, porting custom Aseprite textures into Unreal, plus helping invent that loop.",
    explorationItems: [
      {
        title: "Ship without custom textures; block out levels only",
        description: "Engine defaults and graybox volumes so combat can be tuned first.",
        tradeoff:
          "Faster jam combat, but the shipped work includes custom Aseprite textures, Unreal texture nodes, and level modeling.",
      },
      {
        title: "Drop sanity as a map-and-upgrade currency",
        description: "Treat it as flavor or a simple health bar.",
        tradeoff:
          "Simpler FPS, but then kills would not unlock weapons and areas the way the sanity system is built to.",
      },
      {
        title: "Sanity as progression, with authored textures and levels (what shipped)",
        description:
          "Unreal levels plus custom Aseprite textures — a tile texture, texture-node work in-engine, and level modeling across two map prototypes, starting from early brainstorming docs.",
        tradeoff:
          "The economy is readable in the world; a 3-week jam leaves little time to iterate both art and layout.",
      },
    ],
    edgeCases: [
      "Textures ported over from Aseprite came in stretched across surfaces of different sizes in Unreal. The fix was a material graph that scales the UVs by the object's own X and Y scale before sampling the texture, so it stays proportional no matter the size of the mesh it's on.",
    ],
    solution:
      "Complete jam build in Unreal with custom textures and level design. Add-ons coming soon.",
    reflection: [
      "Porting Aseprite textures through Unreal nodes in three weeks is a pipeline problem as much as a look problem.",
      "Scaling UVs by the object's own dimensions before sampling is one of those small material-graph tricks I now just reach for by default.",
    ],
    imageUrl: "/images/projects/crazy-old-mans-trip-cover.jpg",
    solutionImageUrl: "/images/projects/crazy-old-mans-trip-solution.png",
    videoUrl: "/videos/crazy-old-mans-trip-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/crazy-old-mans-trip/design-doc.png", caption: "Cutscene storyboard and menu sketch" },
      { src: "/images/projects/gallery/crazy-old-mans-trip/environment.png", caption: "Mansion interior, blocked out in Unreal" },
      { src: "/images/projects/gallery/crazy-old-mans-trip/character-portrait.gif", caption: "The veteran — character portrait" },
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
    hook: "Real-time WebGL remake of Battle Zone in 3D: custom shaders, Blockbench OBJs, third-person aim, mini-map.",
    tags: ["Solo", "WebGL", "GLSL", "Complete"],
    year: "Complete",
    role: "Solo — programming, 3D modeling, graphics processing",
    timeline: "Complete",
    tools: ["VS Code", "Blockbench", "GitHub"],
    overview:
      "A real-time WebGL rendition of the classic Battle Zone game, in 3D — a deliberate twist, since the 1980 original didn't use any 3D models at all, just vectors drawn directly in space. Custom vertex and fragment shaders use Model-View-Projection transforms. Assets load from OBJ files I modeled myself in Blockbench, tanks included (albeit badly). Third-person camera with mouse aiming/shooting. Mini-map via a separate top-down viewport render.",
    audience:
      "A graphics-programming project that also has to play as a tank game in the browser. Solo.",
    problem:
      "The whole 3D path — MVP transforms, custom vertex/fragment shaders, OBJ loading, third-person mouse aim, and a second top-down viewport for a mini-map — had to be authored without a game engine, including the tank and spaceship meshes. I picked Battle Zone specifically because I wanted a real-time 3D graphics challenge with gameplay simple enough that the graphics could stay the actual focus.",
    explorationItems: [
      {
        title: "Use an engine or a high-level 3D library",
        description: "Unity, Godot, or a scene-graph library so gameplay ships without writing shaders.",
        tradeoff:
          "Faster game; you would not own MVP math, GLSL, or the second viewport the way this project is built.",
      },
      {
        title: "Skip the mini-map and extra viewport",
        description: "One camera, one render pass; HUD as HTML or a simple overlay.",
        tradeoff:
          "Less GPU and camera bookkeeping, but the mini-map here is a separate top-down viewport render.",
      },
      {
        title: "Raw WebGL: custom shaders, Blockbench OBJs, dual viewport (what shipped)",
        description:
          "Vertex/fragment shaders, MVP, OBJ assets, third-person mouse aim/shoot, mini-map viewport — a tank model and a spaceship model, both modeled in Blockbench.",
        tradeoff:
          "Full control of the pipeline; every system (load, shade, aim, map) is yours to debug.",
      },
    ],
    edgeCases: [
      "The mini-map was the hardest part to get right — it's rendered as a genuine second WebGL viewport inside drawRadar(), not a separate canvas or an HTML overlay. The lesson that would've saved the most time: clear the depth buffer before moving the camera to the new view, or the second pass reads stale depth from the first.",
    ],
    solution:
      "Complete solo WebGL game: custom shaders, Blockbench OBJs, third-person shooting, mini-map viewport.",
    reflection: [
      "Doing programming, modeling, and graphics processing solo makes the shader pair and the two models the whole visual system — there is no engine art pipeline to hide behind.",
    ],
    imageUrl: "/images/projects/battle-zone-3d-cover.jpg",
    solutionImageUrl: "/images/projects/battle-zone-3d-solution.png",
    vimeoBackgroundId: "1180000932",
    galleryImages: [
      { src: "/images/projects/gallery/battle-zone-3d/vertex-shader.png", caption: "Custom vertex shader — MVP transform" },
      { src: "/images/projects/gallery/battle-zone-3d/fragment-shader.png", caption: "Custom fragment shader — ambient/diffuse lighting" },
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
    hook: "2-day jam RPG: find which of three hotel guests committed a murder, using evidence, dialogue, and the space.",
    tags: ["Team · 4", "Godot", "2-day jam", "Complete"],
    year: "Complete",
    role: "Lead game manager — programming (assets, inventory, UI, assisted save-state), game design and narrative structure",
    timeline: "2-day jam",
    tools: ["Godot"],
    overview:
      "An immersive RPG: you play Kit Pawson, an ex-detective turned hotel manager, investigating a guest's disappearance among three suspects — a washed-up musician crane looking for inspiration, a fish who claims to work in 'waste management,' and a boxer frog nursing a grudge after a bad match. You've got a task list to work through over a few in-game days, and the murders don't stop just because you're taking your time. Made for a 2-day jam, with a focus on lively per-character dialogue and environmental storytelling.",
    audience:
      "Players who want a short mystery with talky characters. 4-person jam team.",
    problem:
      "Two days to ship a three-suspect murder mystery that lives on dialogue and environment, while also being lead game manager and the person wiring assets, inventory, UI, and (with help) save-state. As the manager, that mostly meant calling frequent little huddles mid-session just to whiteboard what we could actually still pull off.",
    explorationItems: [
      {
        title: "Combat RPG, mystery as flavor",
        description: "Spend the jam on combat and loot; suspects are dressing.",
        tradeoff:
          "Familiar jam scope, but the brief is evidence, character dialogue, and environmental storytelling — not a dungeon crawl.",
      },
      {
        title: "Program only one system (UI or inventory, not both)",
        description: "Narrow the code so design and writing can move faster.",
        tradeoff:
          "Safer jam, but the shipped programming includes asset implementation, inventory, UI, and assisted save-state.",
      },
      {
        title: "Mystery loop + manager role across systems (what shipped)",
        description:
          "Lead game manager in Godot: assets, inventory, UI, assisted saves; each suspect got their own motive and alibi (the fish had beef with the victim over a stolen bite of food, the frog blamed him for booing at a match, the crane just found him insufferable) worked out in the plot doc before any dialogue was written. We'd originally wanted evidence specific enough to individually incriminate each resident and really make you work for it, but caught early that two days wasn't going to cover that — so it ended up fairly linear, leaning on the writing itself to keep you second-guessing instead of a full deduction system.",
        tradeoff:
          "The investigation can actually run; two days means every extra system is a risk.",
      },
    ],
    edgeCases: [
      "Genuinely thought we'd made the culprit a little too obvious. Turns out most playtesters didn't guess it — the red herrings worked, maybe a bit too well. A few of the more seasoned players nailed it first try, but most didn't.",
    ],
    solution:
      "Complete 2-day jam RPG in Godot with inventory, UI, asset wiring, and assisted save-state, plus character and plot design docs worked out ahead of implementation. If I'd had more time, the feature I really wanted was letting players pick up evidence and examine specific parts of it for more clues, instead of just collecting it.",
    reflection: [
      "Lead game manager on a 2-day jam is mostly integration: dialogue and rooms only work if inventory, UI, and saves do not eat the whole clock.",
      "Biggest lesson from playtesting: catering to your actual demographic matters more than how clever your mystery is. The room was packed and people were bouncing between a dozen games at once — a game that wants you to slow down and actually read clues just doesn't shine in that setting the way a tight, addictive game loop does.",
    ],
    imageUrl: "/images/projects/catacombs-cover.jpg",
    solutionImageUrl: "/images/projects/catacombs-solution.png",
    videoUrl: "/videos/catacombs-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/catacombs/brainstorming.jpg", caption: "Early brainstorm sketch — the accusation UI and timer" },
      { src: "/images/projects/gallery/catacombs/character-bios.png", caption: "Character bios and motives for each suspect" },
      { src: "/images/projects/gallery/catacombs/plot-doc.png", caption: "Plot doc — the opening scene and suspects' relationships" },
      { src: "/images/projects/gallery/catacombs/design-doc.png", caption: "Early brainstorm — genre and gameplay-loop ideas" },
      { src: "/images/projects/gallery/catacombs/implementation.png", caption: "Hotel room scene in the Godot editor" },
      { src: "/images/projects/gallery/catacombs/implementation-2.png", caption: "The sewer scene, with the accusation timer wired up" },
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
    hook: "Papa's Freezeria–style restaurant game: serve critter customers through boba, ice, and syrup minigames.",
    tags: ["Team · 5", "Unity", "2-day jam", "Complete"],
    year: "Complete",
    role: "Asset implementation and UI programming; environment art and main menu in Procreate; Unity animations that did not make the build",
    timeline: "2-day jam",
    tools: ["Unity", "Procreate"],
    overview:
      "A restaurant time-management game in the Papa's Freezeria vein: serve cute critter customers accurately and on time. Minigames include boba selection, catching ice from dispensers, and syrup timing. Made in a 2-day jam.",
    audience:
      "Players who like short cooking/serving games. 5-person jam team.",
    problem:
      "A serving loop with three minigames has to be readable in two days. I owned asset implementation and UI in Unity, plus environment art and the main menu in Procreate — and Unity animation work that did not make the final build.",
    explorationItems: [
      {
        title: "One serving action, no minigames",
        description: "Tap to complete an order; skip boba / ice / syrup timing.",
        tradeoff:
          "Easier to finish, but the fantasy here is those three timed minigames.",
      },
      {
        title: "Prioritize Unity animation over menu and environment art",
        description: "Spend jam time on character motion in-engine.",
        tradeoff:
          "Motion might feel better; in this project those Unity animations did not make production, while Procreate environment and main-menu art did.",
      },
      {
        title: "UI + asset wiring + Procreate environment/menu (what shipped)",
        description:
          "Unity implementation and UI; Procreate environment art, main menu, and customer designs. Animation work stayed out of the build.",
        tradeoff:
          "The restaurant is playable and branded; unused animation is sunk jam time.",
      },
    ],
    edgeCases: [],
    solution:
      "Complete jam game in Unity with UI/asset implementation and Procreate environment plus main menu.",
    reflection: [
      "The unused Unity animations are the honest lesson: jam scope has to pick what can actually land in the build. We just had more artists than programmers on the team, which happens on a jam sometimes — it doesn't matter how good something looks in isolation if it doesn't make the build.",
      "Playtesters gravitated hard toward the topping-assembly minigame — stacking syrups and toppings onto the drink — and I'd bet that's mostly the art talking. Artists make a game memorable, but programmers, who handle the actual function, are what make a game... you know. Exist.",
    ],
    imageUrl: "/images/projects/tapioca-tails-cover.jpg",
    solutionImageUrl: "/images/projects/tapioca-tails-solution.png",
    videoUrl: "/videos/tapioca-tails-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/tapioca-tails/side-view-background.png", caption: "Side-view restaurant environment art, painted in Procreate" },
      { src: "/images/projects/gallery/tapioca-tails/gameplay-1.png", caption: "Order selection screen" },
      { src: "/images/projects/gallery/tapioca-tails/gameplay-2.png", caption: "Serving a customer" },
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
    hook: "2D environmental horror platformer: a stage magician defies a maestro obsessed with a 'perfect' show — starting with a ballerina who never stops dancing.",
    tags: ["Team · 22", "Unity", "Environment art", "Complete"],
    year: "Summer 2025",
    role: "Environment artist — 5 backgrounds; plot through art with game design; onboarded new artists; helped present at SGS, Summer 2025",
    timeline: "First long-term student-team project · presented SGS Summer 2025",
    tools: ["Unity", "Procreate"],
    overview:
      "Encore! is a 2D environmental horror puzzle-platformer set backstage at a theater. You play a small stage magician just trying to do his act; the Maestro, a conductor obsessed with keeping the show 'perfect,' will stop at nothing to prevent that. You fight through performers turned into monsters — starting with a ballerina who's always dancing somewhere in the distance — using cards thrown from your hat to cut things down and clear a path. Inspired by Little Nightmares, Omori, Inside, and Limbo. First long-term project on a student team (22 people).",
    audience:
      "Players who want atmosphere-led horror. Large student team.",
    problem:
      "Plot has to read through spaces, not cutscenes alone, on a 22-person team working entirely virtually — which made even small creative disagreements harder to untangle than they should've been. As an environment artist, I worked closely with our lead narrative designer, and there were times my read on a space didn't match how she wanted the story to come through it. I made 5 backgrounds and helped onboard new artists mid-project on top of that.",
    explorationItems: [
      {
        title: "Generic horror kits, less authored story in the frame",
        description: "Reuse stock halls so designers can place puzzles faster.",
        tradeoff:
          "Faster production; weaker environmental storytelling, which was the whole point of this game.",
      },
      {
        title: "One hero environment, skip onboarding others",
        description: "Spend the whole schedule on a single finished space.",
        tradeoff:
          "Higher peak quality; my role also included five backgrounds, a team of 22, and helping new artists ramp up.",
      },
      {
        title: "Five authored backgrounds + design collaboration (what shipped)",
        description:
          "Five backgrounds — including the ballerina's shoe room, where you cut down her pointe shoes with thrown cards to reach a key, and a piano-drop trap where cutting the right rope swings open a new platform — worked out with game design in a shared level-design guide, plus a cut-scene concept environment. Presented at SGS, Summer 2025.",
        tradeoff:
          "Story is in the world and the team can share a guide; individual pieces get less solo polish.",
      },
    ],
    edgeCases: [],
    solution:
      "Complete. Five environment backgrounds in Unity/Procreate, design-guide collaboration, SGS presentation Summer 2025.",
    reflection: [
      "First long-term, 22-person team: the job is as much onboarding and a shared design guide as it is painting a single hero shot.",
      "Working fully virtual made creative disagreements harder than they needed to be. The fix wasn't some clever process — just more iteration, staying flexible, and actually taking feedback instead of getting attached to a first pass.",
    ],
    docLinks: [
      { label: "Game design doc", href: "https://docs.google.com/document/d/112Bh7UdHYZ9SufLIvyEaXYXoNVlwG5ILHBE_1vy-aco/edit?tab=t.0" },
      { label: "Level design guide", href: "https://docs.google.com/document/d/1l2ZV5OM-WDdUgM92Hpf7emUzCQFadrTzQ6PP2PSnHiQ/edit?tab=t.0#heading=h.frod1xfwvdq" },
    ],
    imageUrl: "/images/projects/encore-cover.gif",
    solutionImageUrl: "/images/projects/encore-solution.png",
    galleryImages: [
      { src: "/images/projects/gallery/encore/environment-0-final.png", caption: "Environment: the orchestra room" },
      { src: "/images/projects/gallery/encore/environment-1-iteration.png", caption: "Environment 1, an early iteration" },
      { src: "/images/projects/gallery/encore/environment-2-final.png", caption: "Environment: the vanity mirror" },
      { src: "/images/projects/gallery/encore/game-design.png", caption: "Level flow — exploration areas and puzzles" },
      { src: "/images/projects/gallery/encore/trap-design.png", caption: "Trap design — the power-cord puzzle" },
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
    slug: "ai-glaze-visualization",
    title: "AI-Assisted Visualization of Ceramic Glaze Design",
    hook: "A working glaze-prediction tool: pick a clay body and glaze, get back a rendered prediction instead of a kiln gamble.",
    tags: ["Team · 5", "three.js", "ML", "Complete"],
    year: "Complete",
    role: "Lead of Simulation and Interface Development — train ML on real samples; assist 3D-printed material fabrication",
    timeline: "Complete",
    tools: ["VS Code", "GitHub", "three.js"],
    overview:
      "Ceramic AI explores how AI can assist human decision-making in complex material design, using ceramic glaze as the case study — normally a trial-and-error process across composition, firing temperature, and a dozen other variables. Advised by Dr. Cheryl Xu (Engineering) and Dr. Deborah Littlejohn (Design), on a team of five pairing ceramics/fabrication, information graphics, and me on simulation and interface. Awarded the Arts + Data Science Interdisciplinary Mini-Grant, $5,000.",
    audience:
      "Ceramicists and researchers who need to search a huge glaze-parameter space.",
    problem:
      "Glaze outcomes depend on composition and firing, and searching that space by kiln alone is slow. As the simulation/interface lead, I had to turn real fired samples into something a model could actually train on, and show a result people could judge against the real thing — not just a chart of numbers.",
    explorationItems: [
      {
        title: "Optimization only, no visual or physical loop",
        description: "Output recommended recipes as numbers; skip a 3D view and printed samples.",
        tradeoff:
          "Faster ML iteration; weaker for material design, where seeing and firing matter.",
      },
      {
        title: "Physical samples only, no interactive simulation",
        description: "Print and fire; no real-time interface.",
        tradeoff:
          "Grounded in real glaze, but you lose the three.js proof-of-concept demo the project already built.",
      },
      {
        title: "XGBoost model + three.js render, trained on real samples (what shipped)",
        description:
          "Users pick a clay body and glaze and get a predicted result rendered live on a 3D model in three.js. Underneath, an XGBoost model does the prediction — picked for how cheap it is to train and run compared to heavier options, and because the public Glazy ceramics dataset (used to round out training data) tests similar parameters to ours.",
        tradeoff:
          "Human-in-the-loop design that actually shows you the material, not just a number.",
      },
    ],
    edgeCases: [
      "Glazy's public dataset didn't have colors close enough to our own clay (real North Carolina ceramics) to rely on, so the model had to train on our own color data instead. There wasn't nearly enough of it collected in our timeframe, so the model ended up overfit to a small sample. It still works well as a proof of concept — more data from our own clay is the obvious next step.",
    ],
    solution:
      "Complete. Ceramic AI is a working glaze-prediction tool: pick a clay body and glaze, and an XGBoost model trained on real fired samples (supplemented by the Glazy dataset) predicts the outcome, rendered live in three.js.",
    reflection: [
      "Leading simulation and interface means the model, the three.js view, and the physical samples have to stay aligned — otherwise the AI is not actually assisting a maker.",
      "Biggest lesson from this one: good data is everything. No amount of clever modeling fixes a dataset that doesn't actually look like your material.",
    ],
    imageUrl: "/images/projects/ai-glaze-visualization-cover.jpg",
    solutionImageUrl: "/images/projects/ai-glaze-visualization-solution.png",
    videoUrl: "/videos/ai-glaze-visualization-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/ai-glaze-visualization/simulation-model.png", caption: "Simulated glaze-and-form combinations from the three.js model" },
      { src: "/images/projects/gallery/ai-glaze-visualization/glaze-simulation.png", caption: "Glaze simulation interface" },
      { src: "/images/projects/gallery/ai-glaze-visualization/glaze-model-code.png", caption: "The GlazeModel component — gloss and color drive the material in real time" },
      { src: "/images/projects/gallery/ai-glaze-visualization/physical-sample-1.jpg", caption: "Physical ceramic sample, fired for comparison" },
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
    slug: "adversarial-attacks",
    title: "Adversarial Attacks on AV Collision Detectors",
    hook: "Recreating physical adversarial patterns that fool person-detection — and studying why they work.",
    tags: ["Solo", "Research", "REU", "Complete"],
    year: "Fall 2024",
    role: "Solo researcher",
    timeline: "Fall 2024 REU",
    tools: ["VS Code"],
    overview:
      "Research using adversarial attacks to find weaknesses in visual detectors via gradient-based models and physical systems. Recreated prior work showing physical adversarial patterns (e.g. patterned t-shirts) achieve high attack success against person-detection algorithms, and studied why. Awarded a Fall 2024 REU grant, $3,000. Solo.",
    audience:
      "Readers interested in vision-system robustness and physical adversarial examples.",
    problem:
      "Digital attacks on detectors do not automatically explain physical ones (a patterned t-shirt in the real world). The work had to recreate known high-success physical patterns and then analyze why they transfer — not only generate a pretty patch on a screen.",
    explorationItems: [
      {
        title: "Digital-only attacks (image-space)",
        description: "Perturb pixels; skip physical garments or printed patterns.",
        tradeoff:
          "Easier experiments; misses the physical-system question entirely (t-shirts, real detectors).",
      },
      {
        title: "New attack method without recreating prior physical results",
        description: "Propose an original algorithm first.",
        tradeoff:
          "More novelty on paper; the approach I took was to recreate prior physical patterns first, then study why they succeed.",
      },
      {
        title: "Recreate physical patterns, then analyze (what was done)",
        description:
          "Gradient-based and physical systems, backed by a research proposal, an analysis of robust attention, an analysis of protransformers, and simulation code for patch generation, patch training, PGD, and FGSM. This built on an earlier case study I did comparing FGSM (single-step) against PGD (multi-step, iterative) — PGD was consistently the more effective of the two at fooling image classifiers, which set up the real question here: why do physical patterns transfer this well, and what does 'robust' actually cost a model?",
        tradeoff:
          "Grounded in prior success rates; less room to claim a brand-new attack in this writeup.",
      },
    ],
    edgeCases: [],
    solution:
      "Complete REU project ($3,000): recreated physical adversarial patterns against person detection and analyzed why they work, with PGD/FGSM/patch training code.",
    reflection: [
      "Recreating a known physical attack is the way to trust the 'why' — otherwise the analysis is about a different system than the t-shirt result.",
      "The most surprising finding: the more robust a model is against adversarial attacks, the less accurate it tends to be on clean data. Didn't make sense to me at first — if a model is more robust, isn't that just better? Turns out an adversarially-trained model needs a wide buffer zone around its decision boundary so predictions stay stable even when an input gets perturbed, and that buffer costs it some precision fitting the clean data. Good reminder that there's no universally 'better' model, just different tradeoffs depending on what you're optimizing for.",
    ],
    imageUrl: "/images/projects/adversarial-attacks-cover.jpg",
    solutionImageUrl: "/images/projects/adversarial-attacks-solution.png",
    videoUrl: "/videos/adversarial-attacks-thumbnail.mp4",
    galleryImages: [
      { src: "/images/projects/gallery/adversarial-attacks/fgsm-attack.png", caption: "FGSM attack — single-step perturbation" },
      { src: "/images/projects/gallery/adversarial-attacks/pgd-attack.png", caption: "PGD attack — iterative perturbation" },
    ],
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
