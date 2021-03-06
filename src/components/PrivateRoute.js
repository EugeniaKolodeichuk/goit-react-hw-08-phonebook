import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { getIsLoggedIn } from '../redux/auth/selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
