# Portfolio Content Reference (source: current Wix site)

Use this as ground truth for the content pass in the new site. This is raw
material — rewrite/restructure into the Problem → Exploration → Solution
case-study format as needed, don't paste verbatim.

## About Me

Junior studying Computer Science and Art & Design. Always loved art and
enjoyed programming, so combined the two (plus a love of storytelling) to
make games and research projects. Built skills throughout college in game
design, 2D/3D art, software development, and machine learning. Currently
working on Slimed: Rebirth (an escape room game mixing 2D/3D art) plus a
personal side project.

LinkedIn: https://www.linkedin.com/in/monicajin/

---

## Game Projects (most recent → oldest)

### Slimed: Rebirth
- **Status:** In Development | **Team:** 5 | **Tools:** Godot, Aseprite, Blender, Github
- Top-down escape room game — players team up with their archnemesis to
  break out of a mad scientist's lab. Puzzles unlock new areas as you
  progress; two playable characters with unique abilities require
  strategic use to uncover clues.
- **My role:** Programmer — lighting & level design, asset implementation,
  UI development. Contributed to game/puzzle design with the team.
  Primary 2D asset artist.
- **Responsibilities:** Programmer, Level Design, Lighting, Game Design, 2D Art
- Design docs: Room 1 design, Room 3 design, puzzle layout, enemy sprite sheet

### Slimed: Awakening
- **Status:** Complete | **Team:** 5 | **Tools:** Aseprite, Godot | **Link:** itch.io
- 2D dungeon crawler, souls-like. Procedurally generated map, multiple
  enemy types, dodge/parry mechanics, two bosses. Clear rooms of enemies
  to progress.
- **My role:** Lead artist — all 2D pixel art (player/enemy idle & attack
  animations, environment art, asset design, ending cards). Asset-heavy
  project.
- **Responsibilities:** Lead Artist, Character Art/Animation, Environment Art
- Design docs: layout, pterodactyl animation, enemy sprite sheet, boss
  design, boss attack animation, promo pic

### Slimed: Origins
- **Status:** Complete | **Team:** 4 | **Tools:** Aseprite, Twine
- Interactive narrative game. Player is Tina, a triceratops investigating
  her brother's murder — confront the killer, rally for war, or seek peace.
- **My role:** Lead artist — all pixel art (environment, characters, ending
  cards). Helped brainstorm/design initial narrative and flow for the
  game series.
- **Responsibilities:** Environment Art, Character Art, Game Design
- Design docs: ending card art, Twine flow, brainstorming, design doc,
  promotional photo, gameplay demo

### Crazy Old Man's Trip
- **Status:** Complete (add-ons coming soon) | **Team:** 5 | **Tools:** Unreal, Aseprite, Blender, Github | **Link:** itch.io
- First-person shooter — veteran sees ghosts of his past and manages
  sanity by defeating them; sanity points earned from kills upgrade
  weapons and unlock map areas, lost from getting hit, game over below
  zero. Made for a 3-week game jam, Fall 2025.
- **My role:** Texture and level designer. Worked primarily in Unreal,
  ported custom textures from Aseprite. Helped brainstorm core game
  mechanics and contributed to game design.
- **Responsibilities:** Level Design/Modeling, Texture Design, Game Design
- Design docs: tile texture, texture node work in engine, level design
  modeling, map prototype (x2), brainstorming

### Battle Zone 3D
- **Status:** Complete | **Team:** 1 (solo) | **Tools:** VS Code, Blockbench, Github
- Real-time WebGL rendition of the classic Battle Zone game, in 3D. Custom
  vertex and fragment shaders using Model-View-Projection transforms.
  Assets loaded from OBJ files self-modeled in Blockbench. Third-person
  camera with mouse aiming/shooting. Mini-map via separate top-down
  viewport render.
- **My role:** Solo — programming, 3D modeling, graphics processing.
- **Responsibilities:** Programming, 3D Modeling, Graphics Processing
- Design docs: tank model, spaceship model, vertex shader, fragment shader

### Catacombs
- **Status:** Complete | **Team:** 4 | **Tools:** Godot | **Links:** Github, itch.io
- Immersive RPG — find the culprit of a murder among three hotel guests
  by gathering evidence. Made for a 2-day jam; focus on lively dialogue
  per character and environmental storytelling.
- **My role:** Lead game manager. Led programming (asset implementation,
  inventory functionality, UI, assisted save-state mechanics). Helped
  with game design and narrative structure during brainstorming.
- **Responsibilities:** Game Management, Programming, Game Design
- Design docs: asset implementation, dialogue manager, brainstorming
  levels, design doc (characters), design doc (plot)

### Tapioca Tails
- **Status:** Complete | **Team:** 5 | **Tools:** Unity, Procreate | **Link:** itch.io
- Restaurant time-management game (Papa's Freezeria–style) — serve cute
  critter customers accurately and on time. Minigames: boba selection,
  catching ice from dispensers, syrup timing. Made during a 2-day jam.
- **My role:** Asset implementation and UI programming. Created
  environment art and main menu screen in Procreate. Also worked on
  Unity animations (didn't make final production).
- **Responsibilities:** Programming, UI Design, Environment Artist
- Design docs: side view, design doc, customer

### Encore!
- **Status:** Complete | **Team:** 22 | **Tools:** Unity, Procreate | **Link:** itch.io
- Environmental horror game — traverse the world solving puzzles while
  avoiding monsters and a shadowed ballerina always looming in the
  distance. First long-term project on a student team.
- **My role:** Environment artist — created 5 backgrounds, worked closely
  with game design to convey plot through art, helped onboard new
  artists. Helped present at SGS, Summer 2025.
- **Responsibilities:** Environment Artist
- Design docs: environment 1 (first iteration + final), environment 3,
  environment 6 concept (cut scene), map design, level 1 design, design
  guide (worked on with game design team)

---

## Software Projects

### AI-Assisted Visualization of Ceramic Glaze Design
- **Status:** In Development | **Team:** 5 | **Tools:** VS Code, Github
- Explores how AI can assist human decision-making in complex material
  design (ceramic glaze development), narrowing down parameter
  combinations (material composition, firing temp/technique) instead of
  pure trial and error.
- Awarded the **Arts + Data Science Interdisciplinary Mini-Grant, $5,000**.
- **My role:** Lead of Simulation and Interface Development — training the
  ML model on real-world ceramic samples, assisting physical fabrication
  of 3D-printed materials.
- Built a proof-of-concept simulation demo using **three.js**.
- Docs: project plan, simulation code (UI code, glaze model code),
  physical glaze samples, proposed display, sample images 1-4

### Adversarial Attacks: Exploring Weaknesses in Autonomous Vehicle Collision Detectors
- **Status:** Complete | **Team:** 1 (solo) | **Tools:** VS Code
- Research using adversarial attacks to find weaknesses in visual
  detectors via gradient-based models and physical systems. Recreated
  prior work showing physical adversarial patterns (e.g. patterned
  t-shirts) achieve high attack success against person-detection
  algorithms, and studied why.
- Awarded a **Fall 2024 REU grant, $3,000**.
- Docs: proposal, analysis on robust attention, analysis on
  protransformers, simulation code (adversarial patch generation,
  adversarial patch training, PGD, FGSM)

---

## Notes for the content pass
- Skills list already in new site's Home.tsx: React, TypeScript, Three.js,
  WebGL, GLSL, Python, p5.js, D3.js, Figma, Blender, Swift, SQL, Supabase,
  Git — cross-check/update against the tools actually used above
  (Godot, Unity, Unreal, Aseprite, Blockbench, Twine, Procreate).
- Screenshots/design doc images referenced above still live on the Wix
  site (static.wixstatic.com URLs) — these need to be re-exported/re-hosted,
  not hotlinked.
- Existing GitHub links: github.com/monicajin05/Battlezone.git (more may
  exist per-project on the old site's individual pages).
