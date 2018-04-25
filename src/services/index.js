import * as axios from 'axios';

import { removeAuthInfo } from './authService';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Axios inteceptor to intercept all HTTP request and to handle 401 requests
 */
axios.interceptors.response.use(
  response => response,
  error => {
    const resStatus = error.response ? error.response.status : 400;
    if (
      (401 === resStatus || 403 === resStatus || 400 === resStatus) &&
      (error.request &&
        error.request.responseURL &&
        !error.request.responseURL.includes('/login'))
    ) {
      // Unauthorised error
      // TODO - add pop up to show error
      removeAuthInfo();
      window.location = '/';
    } else {
      return Promise.reject(error);
    }
  }
);
