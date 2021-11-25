import { useDispatch, useSelector } from 'react-redux';
/* import authSelectors from '../../redux/auth/selectors'; */
/* import operations from '../../redux/auth/operations'; */
import defaultImg from '../UserMenu/defaultImg.png';
import { getUsername } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
    /* borderRadius: 50, */
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultImg;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="50" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
