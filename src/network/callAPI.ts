import AxiosInstance from "./axiosInstance";

const axios = AxiosInstance();

export interface ILogin {
    idToken: string | null;
    fcm_token: string;
}

export const loginWithGoogle = async (data: ILogin) => {
    try {
        const response = await axios.post("auth/login-google", data);
        return response;
    } catch (error) {
        return error;
    }
}
