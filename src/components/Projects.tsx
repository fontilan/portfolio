// PROJECT - lusco-fusco
const luscoFusco = {
  projectName: 'Lusco-fusco',
  websiteLink: 'https://fontilan.github.io/lusco-fusco/',
  githubLink: 'https://github.com/fontilan/lusco-fusco',
  image:
    'https://user-images.githubusercontent.com/68748054/189960811-2362dabc-6633-4142-bc9a-6a35a90c38b2.png',
  projectDescription: [
    "I love music, especially discovering new artists and styles. Some time ago I've decided to challenge myself to create a fresh playlist every month. It's a lot of fun and the playlist even gained a few followers.",
    "This is a simple showcase of the playlist, which I also update every month (in a way it's an opportunity to work with colors). It also has a cute light/dark theme switch (with an icon animation that works absolutely not like it's supposed to, but I love it nonetheless).",
  ],
};

// PROJECT - tenzies
const tenzies = {
  projectName: 'Tenzies',
  websiteLink: 'https://fontilan.github.io/tenzies-game/',
  githubLink: 'https://github.com/fontilan/tenzies-game',
  image:
    'https://user-images.githubusercontent.com/68748054/189958168-fa920864-901c-4da5-b318-9d3a135a6aea.png',
  projectDescription: [
    "Built as part of the Bob Ziroll's Learn React Scrimba course.",
    'Afterwards I have implemented a few additional features: proper dice faces (aka dots), a timer and counter showing how long it took you to win and how many rolls, and also changed the overall colors — now each die has a different color when held.',
    'I have also implemented the use of Local Storage, so that the best scores are persistent between page refreshes. I then refactored the code in accordance with the Airbnb JavaScript Style Guide.',
  ],
};

// PROJECT - rock paper scissors
const rockPaperScissors = {
  projectName: 'Rock paper scissors',
  websiteLink: 'https://fontilan.github.io/rock-paper-scissors/',
  githubLink: 'https://github.com/fontilan/rock-paper-scissors',
  image:
    'https://user-images.githubusercontent.com/68748054/191744964-f6b9d8c3-30ef-442e-aae0-bb265726c1df.png',
  projectDescription: [
    'I am a chaotic (good) person, so I was thrilled to discover the random() function in JavaScript.',
    'Initially I wanted to create a coin toss game, but I quickly realized that a 1-in-2 random chance is not gonna be very fun. 1-in-3 however is another story as that would allow you to — for example — play rock paper scissors!',
  ],
};

// PROJECT (SMALL) - palindrome checker
const palindrome = {
  projectName: 'Palindrome checker',
  projectLink: 'https://github.com/fontilan/palindrome',
};

// PROJECT (SMALL) - hitomezashi
const hitomezashi = {
  projectName: 'Hitomezashi pattern generator',
  projectLink: 'https://github.com/fontilan/hitomezashi',
};

// PROJECT (SMALL) - roman numerals
const romanNumerals = {
  projectName: 'Roman numerals converter',
  projectLink: 'https://github.com/fontilan/roman-numerals',
};

// take in an array (projectDescription) and them map each sentence to a paragraph element.
const description = (arr: string[]) => {
  return arr.map((sentence: string) => (
    <p key={arr.indexOf(sentence)}>{sentence}</p>
  ));
};

const Project = ({
  githubLink,
  image,
  projectDescription,
  projectName,
  websiteLink,
}: {
  githubLink: string;
  image: string;
  projectDescription: string[];
  projectName: string;
  websiteLink: string;
}) => {
  return (
    <div className="project">
      <h4 className="project__name">{projectName}</h4>
      <div className="project__main">
        <img
          width="250px"
          height="250px"
          className="project__image"
          src={image}
          alt={`screenshot of the ${projectName} website`}
        />
        <div className="project__links">
          <a href={websiteLink} target="_blank" rel="noreferrer">
            Website
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
      <div className="project__description">
        {description(projectDescription)}
      </div>
    </div>
  );
};

const ProjectSmall = ({
  projectLink,
  projectName,
}: {
  projectLink: string;
  projectName: string;
}) => {
  return (
    <div>
      <h5>{projectName}</h5>
      <a href={projectLink} target="_blank" rel="noreferrer">
        {projectLink}
      </a>
    </div>
  );
};

const Projects = ({ id }: { id: string }) => {
  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Projects</h3>
        </section>
        <section className="card__items">
          <Project {...tenzies} />
          <hr />
          <Project {...luscoFusco} />
          <hr />
          <Project {...rockPaperScissors} />
          <hr />
          <h4>Other, smaller projects</h4>
          <br />
          <ProjectSmall {...hitomezashi} />
          <br />
          <ProjectSmall {...palindrome} />
          <br />
          <ProjectSmall {...romanNumerals} />
        </section>
      </article>
      <hr />
    </>
  );
};

export default Projects;
