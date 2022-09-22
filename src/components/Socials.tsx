const Socials = ({ id }: { id: string }) => {
  const ListItem = ({
    activity,
    websiteName,
    link,
  }: {
    activity: string;
    websiteName: string;
    link: string;
  }) => {
    return (
      <li>
        {activity}? Check out my{' '}
        <a href={link} target="_blank" rel="noreferrer">
          {websiteName}
        </a>
      </li>
    );
  };

  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Socials</h3>
        </section>
        <section className="card__items">
          <p>
            I&apos;m not really a fan of the likes of Facebook, Twitter,
            Instagram etc. I was once on Google+, guess how that worked out 😎
          </p>
          <p>
            If you want to get to know me a bit, you can check out my profiles
            on the following websites (oh, and don&apos;t be a stranger - feel
            free to send me a friend invite once you&apos;re there).
          </p>
          <ul>
            <ListItem
              activity="Films I watch"
              websiteName="Letterboxd"
              link="https://letterboxd.com/fontilan/"
            />
            <ListItem
              activity="Music I listen to"
              websiteName="Last.fm"
              link="https://last.fm/user/sernicze/"
            />
            <ListItem
              activity="Books I read"
              websiteName="Goodreads"
              link="https://www.goodreads.com/user/show/27280059-sernicze"
            />
            <ListItem
              activity="Games I play"
              websiteName="Steam"
              link="https://steamcommunity.com/profiles/76561198062972504"
            />
          </ul>
        </section>
      </article>
      <hr />
    </>
  );
};

export default Socials;
