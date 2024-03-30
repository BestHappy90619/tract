import { DEBUG_MODE } from "@/utils/Constants";
import http from "@/utils/Http";

import { postRequestPayload } from "@/types";

const _API = ""; // prefix url

// GET request example
const getRequest = () => {
  return new Promise((resolve, reject) => {
    http
      .get(_API + "") // method: GET
      .then((response) => {
        if (response.status === 200) {
          // if api call has been succeeded
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        // if it has error from server.
        if (!DEBUG_MODE) console.clear(); // clear the console log in prod mode
        reject(error.response);
      });
  });
};

// POST request example
const postRequest = (props: postRequestPayload) => {
  return new Promise((resolve, reject) => {
    http
      .post(_API + "", props) // method : POST
      .then((response) => {
        if (response.status === 200) {
          // if api call has been succeeded
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        // if it has error from server
        if (!DEBUG_MODE) console.clear(); // clear the console log in prod mode
        reject(error.response);
      });
  });
};

const service = {
  getRequest,
  postRequest,
};

export default service;
