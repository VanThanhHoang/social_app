import axios from 'axios';
import {BASE_URL} from "@env"
console.log(BASE_URL)
const AxiosInstance = (contentType = 'application/json') => {
  const axiosInstance = axios.create({
    baseURL:`${BASE_URL}/api/`,
  });
  // config request
  axiosInstance.interceptors.request.use(
    async (config) => {
      // getToken here
      // const token = await AsyncStorage.getItem('token');
      config.headers['Authorization'] = `Bearer ${''}`;
      config.headers['Accept'] = 'application/json';
      config.headers['Content-Type'] = contentType;
      return config;
    },
    err => Promise.reject(err)
  );
  // handle response
  axiosInstance.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err)
  );
  return axiosInstance;
};

export default AxiosInstance;
