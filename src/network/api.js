import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '9620b570ee4c767b505dd8d9b4e9b191';

const api = axios.create({
  baseURL: BASE_URL
});

export const GET = (url, config = null) => {
  
  return new Promise((resolve, reject) => {

    let finalUrl = BASE_URL + url;
    if (config != null) {
      config.params.api_key = API_KEY
    } else {
      config = {
        params: {
          "api_key": API_KEY
        }
      }
    }
    api
      .get(finalUrl, config)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const POST = (url, body, config = null) => {
  return new Promise((resolve, reject) => {
    api
      .post(url, body, config)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const API = api;
