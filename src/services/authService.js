// import * as axios from 'axios';

/**
 * User authentication request
 *
 * @param {string} username - user email
 * @param {string} pass - user password
 * @returns {Object} http promise object
 */
const authenticateUser = (username, pass) => {
  // return axios.post(`/users/login`, { username, pass });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: 'sandipnirmal',
        loginToken: 'some#hashed#token#value'
      });
    }, 1500);
  });
};

/**
 * User logout request
 *
 * @returns {Object | Promise} http request Object
 */
const logoutUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: 'success' }, 500);
    });
  });
};

/**
 * Stores loggedIn users auth info
 *
 * @param {string} userId
 * @param {string} token
 */
const saveAuthInfo = userData => {
  localStorage.setItem('userData', userData);
};

/**
 * Returns stored authentication values
 *
 * @returns {Object}
 */
const getAuthInfo = () => {
  return JSON.parse(localStorage.getItem('userData')) || {};
};

/**
 * Clears stored auth data
 */
const removeAuthInfo = () => {
  localStorage.removeItem('userData');
};

/**
 * Checks if auth tokens are available in storage. If tokens are availabel
 * returns true else returns false
 *
 * @returns {boolean}
 */
const isAuthenticated = () => {
  const { username = '', loginToken = '' } = getAuthInfo();
  return username && loginToken;
};

export {
  authenticateUser,
  saveAuthInfo,
  getAuthInfo,
  removeAuthInfo,
  logoutUser,
  isAuthenticated
};
