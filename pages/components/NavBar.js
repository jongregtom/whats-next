import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { useAuth } from 'use-auth0-hooks';

export default function NavBar() {
    const { pathname, query } = useRouter();
    const { isAuthenticated, isLoading, login, logout } = useAuth();

    return (
    <div className="NavBar">
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          {!isLoading && (
            isAuthenticated ? (
              <>
                <li>
                  <Link href='/profile'>
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <button onClick={() => logout({ returnTo: 'http://localhost:3000' })}>Log out</button>
                </li>
              </>
            ) : (
              <li>
                <button onClick={() => login({ appState: { returnTo: { pathname, query } } })}>
                  Log in
                </button>
              </li>
            )
          )}
        </ul>
        <style jsx>{`
            display: flex;
            justify-content: space-around;
            align-items: center;

            height: 60px;
            width: 100%;
            padding: 10px 0;

            background: crimson;

            font-family: Arial, sans-serif;
            font-size: 22px;
            color: white;

            box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);

             a {
                color: inherit;
                text-decoration: none;
             }

            .active {
                color: navy;
            }
        `}</style>
    </div>
    )
};