import { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';
import Header from '../components/Header';

const Home = () => {
  const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/contacts');
        if (!response.ok) throw new Error('Failed to fetch contacts');
        const data = await response.json();
        setContacts(data);
      } catch (err) {
      } finally {
      }
    };
useEffect(()=>{
fetchContacts()
},[])
  

  return (
    <div id="home-page" className=" home__container">
      <Header />
        <div id="contact-list-wrapper" className="home__contact-list-wrapper">
          <ContactList contacts={contacts} />
        </div>
      
    </div>
  );
};

export default Home;