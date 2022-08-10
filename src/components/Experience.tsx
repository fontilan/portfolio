const Experience = () => {
  return (
    <>
      <div className="card">
        <div className="card--title">
          <h3>Experience</h3>
        </div>
        <div className="card--items">
          <div className="card--item">
            <div className="headline-with-year">
              <div className="headline-with-year--year">2020 – now</div>
              <div className="headline-with-year--headlines">
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
                efficiency with fewer human touch points
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
          <div className="card--item">
            <div className="headline-with-year">
              <div className="headline-with-year--year">2017 – 2020</div>
              <div className="headline-with-year--headlines">
                <h4>Bookseller</h4>
                <h5>De Revolutionibus. Books & Café</h5>
              </div>
            </div>
            <ul className="description">
              <li>Direct customer service</li>
              <li>
                Co-organizing and coordinating author meetings in the bookstore
              </li>
              <li>Managing the inventory</li>
              <li>
                Maintaining a friendly & cultural atmosphere in the bookstore
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Experience;
