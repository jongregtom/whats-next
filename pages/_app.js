import App from 'next/app';
import Router from 'next/router';

import { Auth0Provider } from 'use-auth0-hooks';

/**
 * This Page wraps the Auth0 provider.
 */
export default class Root extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Auth0Provider
        domain={'whats-next.auth0.com'}
        clientId={'OARYhXr51Ymt95NsLpjTiw4pFtsOKvFr'}
        redirectUri={'http://localhost:3000/'}>
          <Component {...pageProps} />
      </Auth0Provider>
    );
  }
}