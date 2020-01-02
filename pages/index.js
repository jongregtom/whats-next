import Header from './components/Header';
import auth0 from '../utils/auth0';
import fetch from 'isomorphic-unfetch'

export default function Index() {
  return (
    <div>
      <Header></Header>
      <p>Home Page</p>
    </div>
  )
}

Index.getInitialProps = async ({ req, res }) => {
  //if (typeof window === 'undefined') {
  //   const { user } = await auth0.getSession(req);
  //   if (!user) {
  //     res.writeHead(302, {
  //       Location: '/api/login'
  //     });
  //     res.end();
  //     return;
  //   }

     return {}//{ user };
  // }
}
