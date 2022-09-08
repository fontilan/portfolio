const Experience = ({ id }: { id: string }) => {
  return (
    <>
      <article className="card">
        <section className="card__title">
          <h3 id={id}>Experience</h3>
        </section>
        <section className="card__items">
          <div className="card__item">
            <div className="headline-with-year">
              <div className="headline-with-year__year">2020 – now</div>
              <div className="headline-with-year__headlines">
                <h4>Management Board Assistant</h4>
                <h5>Summa Linguae Technologies</h5>
              </div>
            </div>
            <p>
              Summa Linguae Technologies builds technology-enabled solutions to
              help global, content-rich companies with any multilingual data
              challenge.
            </p>
            <p>
              <q>
                We’re more than a language services provider. We leverage data,
                automation, and human expertise to build language solutions that
                help you do more for less—realizing cost savings and greater
                efficiency with fewer human touch points.
              </q>
            </p>
            <p>
              As a Management Board Assistant my responsibilities included
              mainly:
            </p>
            <ul className="description">
              <li>Supporting the CEO & COO in their daily duties</li>
              <li>Creating reports and presentations</li>
              <li>Preparing documents for accounting purposes</li>
              <li>Issuing invoices to individual clients</li>
              <li>Supporting the customer service department</li>
              <li>
                Organizing and taking care of the proper functioning of the
                office
              </li>
            </ul>
          </div>
          <hr />
          <div className="card__item">
            <div className="headline-with-year">
              <div className="headline-with-year__year">2017 – 2020</div>
              <div className="headline-with-year__headlines">
                <h4>Bookseller</h4>
                <h5>De Revolutionibus. Books & Café</h5>
              </div>
            </div>
            <p>
              The De Revolutionibus Books & Café bookstore was established in
              autumn 2013 on the initiative of the Copernicus Center Foundation,
              which supports interdisciplinary research. The bookstore's
              strengths include a huge selection of philosophy titles, an
              excellent reportage section and, above all, good, carefully
              selected literature. Independent, niche publishers, sophisticated
              editorially and graphically designed children's books, all this
              can be found at Bracka 14 in the 19th century Larisch Palace.
            </p>
            <p>As a Bookseller my responsibilities included mainly:</p>
            <ul className="description">
              <li>Direct customer service</li>
              <li>Curating the philosophy, poetry and literature sections</li>
              <li>
                Co-organizing and coordinating author meetings in the bookstore
              </li>
              <li>Managing the inventory</li>
              <li>
                Maintaining a friendly & cultural atmosphere in the bookstore
              </li>
            </ul>
          </div>
          <hr />
          <div className="card__item">
            <div className="headline-with-year">
              <div className="headline-with-year__year">2011 – 2013</div>
              <div className="headline-with-year__headlines">
                <h4>Customer Service Specialist – Returns Dept.</h4>
                <h5>PSA Parts Ltd</h5>
              </div>
            </div>
            <p>
              PSA Parts Ltd is a pan-European manufacturer and distributor of IT
              spares and consumer electronics. With over 30 years’ experience
              and a trusted reputation, PSA supplies over 4,000 branded product
              lines, is a Licensee for Duracell and is 2-POWER’s master
              distributor across Europe. Additionally, PSA offers OEM brands on
              products such as laptop docking stations, memory, keyboards and
              LCD panels.
            </p>
            <p>
              As a Customer Service Specialist my responsibilities included
              mainly:
            </p>
            <ul className="description">
              <li>Comprehensive order and complaint handling</li>
              <li>Initial diagnosis of faulty equipment</li>
              <li>Organizing shipments</li>
              <li>Cooperation with other departments</li>
            </ul>
          </div>
        </section>
      </article>
      <hr />
    </>
  );
};

export default Experience;
