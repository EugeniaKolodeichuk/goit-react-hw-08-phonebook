import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
/* import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter'; */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import Container from './components/Container/Container'; */
/* import AppBar from './components/AppBar/AppBar'; */
/* import operations from './redux/auth/operations'; */
import { Switch /* Route */ } from 'react-router';
/* import ContactsView from './views/ContactsView'; */
/* import HomeView from './views/HomeView'; */
/* import RegisterView from './views/RegisterView'; */
/* import LoginView from './views/LoginView'; */
import { fetchCurrentUser } from './redux/auth/operations';
import { lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getIsFetchingCurrent } from './redux/auth/selectors';

const Container = lazy(() => import('./components/Container/Container'));
const AppBar = lazy(() => import('./components/AppBar/AppBar'));
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Container>
        {isFetchingCurrentUser ? (
          <h1>Load everything</h1>
        ) : (
          <>
            <AppBar />
            <Switch>
              {/* <Route exact path="/" component={HomeView} /> */}
              {/* <Route component={RegisterView} /> */}
              {/* <Route path="/login" component={LoginView} /> */}
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="login">
                <ContactsView />
              </PrivateRoute>
            </Switch>
            <ToastContainer autoClose={2000} />
          </>
        )}
      </Container>
    </Suspense>
  );
}
