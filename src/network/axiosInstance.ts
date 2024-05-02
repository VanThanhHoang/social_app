import axios from 'axios';
import {localStorage} from '@/utils';

const AxiosInstance = (contentType = 'application/json') => {
//  const BASE_URL = 'https://sever-social-media-app.onrender.com/';
   const BASE_URL = 'http://192.168.1.11:8000/';
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, // có tác dụng khi gọi api lâu quá thì sẽ   báo lỗi
  });

  axiosInstance.interceptors.request.use(
    async (config: any) => {
      const token = localStorage.getString('token');
      // const token =
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjY5ZGY4NzI5OGM0Y2FmNjI0ZTNiMiIsImVtYWlsIjoiaG9hbmd2YW50aGFuaGRldkBnbWFpbCIsImlhdCI6MTcxMzk0NDkyOSwiZXhwIjoxNzE0NTQ5NzI5fQ.Qmb3oRyn9xvAPq9YKn0ZezkZDjbtMmyCpKF4-j8T7cw';
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );

  axiosInstance.interceptors.response.use(
    res => res.data,
    err => Promise.reject(err),
  );
  return axiosInstance;
};

export default AxiosInstance;
