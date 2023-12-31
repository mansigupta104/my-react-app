const API_BASE_URL = "https://ecommce-be.herokuapp.com/ecomm/api/v1";
const TIMEOUT = 5000


if (!API_BASE_URL) {

  throw new Error(".env is missing the definition for REACT_APP_API_BASE_URL environment variable")
}


if (!TIMEOUT) {

  throw new Error(".env is missing the definition for REACT_APP_API_TIMEOUT environment variable")
}

export { API_BASE_URL, TIMEOUT }