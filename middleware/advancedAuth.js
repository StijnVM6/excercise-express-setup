import { auth } from 'express-oauth2-jwt-bearer';

const checkJwt = auth({
    audience: "https://book-store-api", // {yourApiIdentifier}
    issuerBaseURL: "https://dev-5370qlrf012oq6lb.eu.auth0.com//", // Your Auth0 domain
});

export default checkJwt;