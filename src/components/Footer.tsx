import githubIcon from '../icons/githubIcon';
import linkedInIcon from '../icons/linkedInIcon';

const Footer = () => {
  return (
    <footer>
      <p>&copy;Wojciech Gmuzdek</p>
      <p>Last updated September 2022</p>
      <div>
        <a
          className="icon-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fontilan">
          {githubIcon}
        </a>
        <a
          className="icon-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/wojciech-gmuzdek/">
          {linkedInIcon}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
