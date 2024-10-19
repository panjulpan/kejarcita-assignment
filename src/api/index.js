import axios from 'axios';
import {BaseURL} from '../config';
import {Alert} from 'react-native';

const Client = axios.create({
  baseURL: BaseURL,
});

Client.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);

Client.interceptors.response.use(
  async res => {
    return res;
  },
  async error => {
    if (error.response) {
      console.log('error response: ', error.response);
      // Request made and server responded
      if (error.response.status >= 422) {
        Alert.alert(`Error Status: ${error.response.status}`);
      } else if (error.response.status >= 401) {
        Alert.alert(
          `Error Status: ${error.response.status}`,
          'Unauthorized Access',
        );
      } else {
        Alert.alert(
          `Error Status: ${error.response.status}`,
          // error?.response?.data?.message?.email[0] ||
          error?.response?.data?.message,
        );
      }
    } else if (error.request) {
      // The request was made but no response was received
      Alert.alert(
        'Koneksi Error',
        'The request was made but no response was received',
      );
      console.log('error request: ', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      Alert.alert('Koneksi Error', 'Harap periksa koneksi anda');
    }
    console.log('error interceptor: ', error.request);

    return Promise.reject(error);
  },
);

export {Client};
