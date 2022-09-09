const Hero = () => {
  const Navigation = () => {
    return (
      <ul className="hero__navigation">
        <li>
          <a href="#Projects">projects</a>
        </li>
        <li>
          <a href="#Experience">experience</a>
        </li>
        <li>
          <a href="#Contact">contact</a>
        </li>
      </ul>
    );
  };

  const Button = () => {
    return (
      <a className="hero__button" href="#About">
        1
      </a>
    );
  };
  return (
    <section className="hero">
      <div>
        <h1>Wojciech Gmuzdek</h1>
        <h2>Frontend Developer</h2>
      </div>
      <Navigation />
      <Button />
    </section>
  );
};

export default Hero;
