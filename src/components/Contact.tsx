const Contact = ({ id }: { id: string }) => {
  // const ListItem = ({
  //   activity,
  //   websiteName,
  //   link,
  // }: {
  //   activity: string;
  //   websiteName: string;
  //   link: string;
  // }) => {
  //   return (
  //     <li>
  //       {activity}? Check out my{' '}
  //       <a href={link} target="_blank" rel="noreferrer">
  //         {websiteName}
  //       </a>
  //     </li>
  //   );
  // };

  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Contact</h3>
        </section>
        <section className="card__items">
          {/* <p>
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
          </ul> */}
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{' '}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </section>
      </article>
      <hr />
    </>
  );
};

export default Contact;
