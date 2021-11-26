import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../UserMenu/defaultImg.png';
import { getUsername } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import styles from '../UserMenu/UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultImg;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <span className={styles.name}>Wellcome, {name}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}
