const jwt = require("jsonwebtoken");
const config = require("config");

/*This helper functions signs a JWT Token using user data provided in the parameter
 * and the expiry time which is 3600 seconds
 */
module.exports = function createToken(user) {
  return jwt.sign({ id: user.id, name: user.name }, config.get("jwt_secret"), {
    expiresIn: 3600
  });
};
