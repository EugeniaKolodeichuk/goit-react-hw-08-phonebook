import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

const ContactsView = () => {
  return (
    <div>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;
