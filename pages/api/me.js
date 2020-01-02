import auth0 from '../../utils/auth0';

export default async function me(req, res) {
  try {
      console.log(auth0)
    //await auth0.handleProfile(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}