const About = ({ id }: { id: string }) => {
  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>About Me</h3>
        </section>
        <section className="card__items">
          <p>
            Philosophy graduate of the Jagiellonian University with over 5 years
            of professional experience in the field of customer service and over
            2 years in administration and accounting. My priority in any work is
            improving my qualifications, acquiring new knowledge and building
            positive relations with others. I enjoy creative problem solving and
            finding new ways to optimize my workflow.
          </p>
          <p>
            I am ready to start my new career as a frontend developer. I would
            like to join a passionate creative team ready to share their
            knowledge with me as I would love to learn all the best industry
            practices. Through my work as a frontend developer I will strive to
            make the internet better, more open and accessible for everyone.
          </p>
        </section>
      </article>
      <hr />
    </>
  );
};

export default About;
