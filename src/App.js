import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import operations from './redux/auth/operations';
import { Switch, Route } from 'react-router';
import Contacts from './views/Contacts';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import { fetchCurrentUser } from './redux/auth/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
      {/* <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
