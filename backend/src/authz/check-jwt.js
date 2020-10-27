const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { issuerUrl, audience } = require("../config/env.dev");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerUrl}.well-known/jwks.json`,
  }),

  audience: audience,
  issuer: issuerUrl,
  algorithms: ["RS256"],
});

module.exports = {
  checkJwt,
};
