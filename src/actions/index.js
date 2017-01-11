import { CHANGE_AUTH } from './types';

export function autenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
