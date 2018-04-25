import { toast } from 'react-toastify';

// Toast position
const toastPosition = {
  position: toast.POSITION.TOP_RIGHT
};

/**
 * Invokes success toast
 * @param {string} msg - toast message
 */
const notifySuccess = msg => {
  toast.success(msg, toastPosition);
};

/**
 * Invokes error toast
 * @param {string} msg - toast message
 */
const notifyError = msg => {
  toast.error(msg, toastPosition);
};

/**
 * Invokes warning toast
 * @param {string} msg - toast message
 */
const notifyWarning = msg => {
  toast.warn(msg, toastPosition);
};

/**
 * Invokes info toast
 * @param {string} msg - toast message
 */
const notifyInfo = msg => {
  toast.info(msg, toastPosition);
};

export { notifySuccess, notifyError, notifyWarning, notifyInfo };
