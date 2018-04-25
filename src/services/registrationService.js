import * as axios from 'axios';

/**
 * Request to register user
 *
 * @param {object} user
 * @param {promise | object}
 */
const registerNewUser = user => {
  return axios.post('/users/register', user);
};

export { registerNewUser };
