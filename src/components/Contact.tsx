const Contact = ({ id }: { id: string }) => {
  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Contact</h3>
        </section>
        <section className="card__items">
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
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
