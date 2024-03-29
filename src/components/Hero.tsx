import githubIcon from '../icons/githubIcon';
import linkedInIcon from '../icons/linkedInIcon';

const Hero = () => {
  const Navigation = () => {
    return (
      <ul className="hero__navigation">
        <li>
          <a
            aria-label="GitHub profile page"
            className="icon-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/fontilan">
            {githubIcon}
          </a>
        </li>
        <li>
          <a
            aria-label="LinkedIn profile page"
            className="icon-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/wojciech-gmuzdek/">
            {linkedInIcon}
          </a>
        </li>
      </ul>
    );
  };

  return (
    <section className="hero">
      <div>
        <h1>Wojciech Gmuzdek</h1>
        <h2>Frontend Developer</h2>
      </div>
      <Navigation />
    </section>
  );
};

export default Hero;
