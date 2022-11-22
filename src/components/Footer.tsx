import githubIcon from '../icons/githubIcon';
import linkedInIcon from '../icons/linkedInIcon';

const Footer = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().toLocaleString('default', { year: 'numeric' });

  return (
    <footer className="footer">
      <p>&copy;Wojciech Gmuzdek</p>
      <p>
        {currentMonth} {currentYear}
      </p>
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
