import Link from 'next/link';
import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <header>
      <ul className="level1__links">
        <li className="level1__links--item">
          <Link href="/profile">Profile</Link>
          <ul className="level2__links">
            <li>
              <Link href="/profile/account">Account</Link>
            </li>
            <li>
              <Link href="/profile/subscriptions">Subscriptions</Link>
            </li>
            <li>
              <Link href="/profile/dashboard">Dashboard</Link>
            </li>
          </ul>
        </li>
        <li className="level1__links--item">
          <Link href="/feeds">Feeds</Link>
        </li>
        <li className="level1__links--item">
          <Link href="/images">Images</Link>
        </li>
      </ul>
    </header>
  );
};
