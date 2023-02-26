import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__brand}>
        <Link href="/" className={styles.li}>
          Event Planner App 
        </Link>
      </div>
      <div className={styles.navbar__menu}>
        <button className={styles.navbar__menuButton} onClick={toggleMenu}>
          Menu
        </button>
        <ul className={`${styles.navbar__menuList} ${isMenuOpen && styles.navbar__menuListOpen}`}>
          <li>
            <Link href="/Events" className={styles.li}>
            Add Event
            </Link>
          </li>
          <li>
            <Link href="/Login" className={styles.li}>
              Login
            </Link>
          </li>
          <li>
            <Link href="Signup" className={styles.li}>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
