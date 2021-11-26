import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch } from 'react-router';
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
