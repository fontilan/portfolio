// import lusco from '../images/lusco.webp';

// each project will be stored as a separate object

// PROJECT - lusco-fusco
const luscoFusco = {
  projectName: 'lusco-fusco',
  websiteLink: 'https://fontilan.github.io/lusco-fusco/',
  githubLink: 'https://github.com/fontilan/lusco-fusco',
  // placeholder image
  image: 'https://api.lorem.space/image/album',
  projectDescription: [
    "I love music, especially discovering new artists and styles. Some time ago I've decided to challenge myself to create a fresh playlist every month. It's a lot of fun and the playlist even gained a few followers.",
    "This is a simple showcase of the playlist, which I also update every month (in a way it's an opportunity to work with colors). It also has a cute light/dark theme switch (with an icon animation that works absolutely not like it's supposed to, but I love it nonetheless).",
    'Built with React, using SASS and ESLint.',
  ],
};

// take in an array (projectDescription) and them map each sentence to a paragraph element.
const description = (arr: string[]) => {
  return arr.map((sentence: string) => <p>{sentence}</p>);
};

// main structure of the component
const Project = ({
  projectName,
  websiteLink,
  githubLink,
  image,
  projectDescription,
}: {
  projectName: string;
  websiteLink: string;
  githubLink: string;
  image: string;
  projectDescription: string[];
}) => {
  return (
    <section className="card__items project">
      <h4 className="project__name">{projectName}</h4>
      <div className="project__main">
        <img
          className="project__image"
          src={image}
          alt={`screenshot of the ${projectName} website`}
        />
        <div className="project__links">
          <a href={websiteLink}>Website</a>
          <a href={githubLink}>GitHub</a>
        </div>
      </div>
      <div className="project__description">
        {description(projectDescription)}
      </div>
    </section>
  );
};

const Projects = ({ id }: { id: string }) => {
  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Projects</h3>
        </section>
        <Project {...luscoFusco} />
      </article>
      <hr />
    </>
  );
};

export default Projects;
