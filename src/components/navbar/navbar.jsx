'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        Lamamia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        <Link href={'/'} className={styles.link}>
          Home
        </Link>
        <Link href={'/portfolio'} className={styles.link}>
          Portfolio
        </Link>
        <Link href={'/blog'} className={styles.link}>
          Blog
        </Link>
        <Link href={'/about'} className={styles.link}>
          About
        </Link>
        <Link href={'/contact'} className={styles.link}>
          Contact
        </Link>
        <Link href={'/dashboard'} className={styles.link}>
          Dashboard
        </Link>
        <button
          className={styles.logout}
          onClick={() => {
            console.log('logged out');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
