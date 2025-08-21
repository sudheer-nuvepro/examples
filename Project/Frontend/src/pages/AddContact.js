import ContactForm from '../components/ContactForm';

const AddContact = () => {

  return (
    <div className=" add-contact">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 add-contact__navbar"
      >
        <div
          className="container-fluid add-contact__navbar-container"
        >
          <a
            className="navbar-brand add-contact__brand"
            href="/"
          >
            Contact Management
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;