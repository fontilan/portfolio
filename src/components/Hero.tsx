const Hero = () => {
  const Navigation = () => {
    return (
      <ul className="navigation">
        <li>
          <a href="#Projects">PROJECTS</a>
        </li>
        <li>
          <a href="#Experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#Hobbies">HOBBIES</a>
        </li>
        <li>
          <a href="#Contact">CONTACT</a>
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
