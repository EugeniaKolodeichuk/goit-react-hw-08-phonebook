import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AuthNav/AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}
