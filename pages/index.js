import Header from './components/Footer';

import Layout from "./components/Layout";
import auth0 from '../utils/auth0';
import fetch from 'isomorphic-unfetch'

export default function Index() {
  return (
      <Layout>Welcome to WHAT'S NEXT!</Layout>
  )
}

//Index.getInitialProps = async ({ req, res }) => {
  //if (typeof window === 'undefined') {
  //   const { user } = await auth0.getSession(req);
  //   if (!user) {
  //     res.writeHead(302, {
  //       Location: '/api/login'
  //     });
  //     res.end();
  //     return;
  //   }

     //return {}//{ user };
  // }
//}
