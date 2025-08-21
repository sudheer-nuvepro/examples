const ContactList = ({ contacts }) => {

 return (

    <div className="card p-4">
      <h3 className="mb-3">Contact List</h3>
      {contacts.length === 0 ? (
        <p>No Contacts found!</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(cont => (
              <tr key={cont.id}>
                <td>{cont.name}</td>
                <td>{cont.email}</td>
                <td>{cont.phone}</td>
                <td>{cont.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactList;
