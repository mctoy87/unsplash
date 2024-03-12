import {
  URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  REDIRECT_URI,
  SCOPE,
} from './const';

// URL_AUTH?CLIENT_ID&REDIRECT_URI&RESPONSE_TYPE&SCOPE

const searchParams = new URLSearchParams('');

searchParams.append('client_id', CLIENT_ID);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('response_type', RESPONSE_TYPE);
searchParams.append('scope', SCOPE);


export const urlAuth = `${URL_AUTH}?${searchParams.toString()}`;
