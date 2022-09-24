const Contact = ({ id }: { id: string }) => {
  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Contact</h3>
        </section>
        <section className="card__items">
          <form className="form" name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <p className="form__item">
              <label className="form__item--label">Your Name:</label>
              <input className="form__item--input" type="text" name="name" />
            </p>
            <p className="form__item">
              <label className="form__item--label">Your Email: </label>
              <input className="form__item--input" type="email" name="email" />
            </p>
            <p className="form__item">
              <label className="form__item--label">Message:</label>
              <textarea className="form__item--input" name="message"></textarea>
            </p>
            <p>
              <button className="form__button" type="submit">
                Send
              </button>
            </p>
          </form>
        </section>
      </article>
      <hr />
    </>
  );
};

export default Contact;
