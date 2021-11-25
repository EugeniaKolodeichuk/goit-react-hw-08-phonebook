import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
/* import Form from '../components/Form/Form'; */
/* import s from './Contacts.module.css'; */

const Contacts = () => {
  return (
    <div /* className={s.contacts} */>
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
