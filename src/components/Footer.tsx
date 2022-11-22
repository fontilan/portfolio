import githubIcon from '../icons/githubIcon';
import linkedInIcon from '../icons/linkedInIcon';

const Footer = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <footer className="footer">
      <p>&copy;Wojciech Gmuzdek</p>
      <p>{currentMonth} 2022</p>
      <div className="footer__icons">
        <a
          aria-label="GitHub profile page"
          className="icon-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/fontilan">
          {githubIcon}
        </a>
        <a
          aria-label="LinkedIn profile page"
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
