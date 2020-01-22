import Layout from "./components/Layout";
import React from 'react';

import { withAuth, withLoginRequired } from 'use-auth0-hooks';

function Profile({ auth }) {
  const { user } = auth;
  return (
    <Layout>
      <h1>Profile</h1>
      <p>This is the profile page.</p>
      <pre>{JSON.stringify(user || { }, null, 2)}</pre>
    </Layout>
  );
}

export default withLoginRequired(
  withAuth(Profile)
);