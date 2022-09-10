const lusco = require('../images/lusco.webp');

const Projects = ({ id }: { id: string }) => {
  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Projects</h3>
        </section>
        <section className="card__items project">
          <h4 className="project__name">lusco-fusco</h4>
          <div className="project__main">
            <img
              className="project__image"
              src={lusco}
              alt="screenshot of the lusco-fusco website"
            />
            <div className="project__links">
              <a href="https://fontilan.github.io/lusco-fusco/">Website</a>
              <a href="https://github.com/fontilan/lusco-fusco">GitHub</a>
            </div>
          </div>
          <div className="project__description">
            <p>
              I love music, especially discovering new artists and styles. Some
              time ago I've decided to challenge myself to create a fresh
              playlist every month. It's a lot of fun and the playlist even
              gained a few followers.
            </p>
            <p>
              This is a simple showcase of the playlist, which I also update
              every month (in a way it's an opportunity to work with colors). It
              also has a cute light/dark theme switch (with an icon animation
              that works absolutely not like it's supposed to, but I love it
              nonetheless).
            </p>
            <p>Built with React, using SASS and ESLint.</p>
          </div>
        </section>
      </article>
      <hr />
    </>
  );
};

export default Projects;
