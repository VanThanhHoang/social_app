import AxiosInstance from "./axiosInstance";
import { localStorage } from "@/utils";
const axios = AxiosInstance();

export interface ILogin {
    idToken: string | null;
    fcm_token: string;
}



export const loginWithGoogle = async (data: ILogin) => {
    try {
        const response = await axios.post("auth/login-google", data);
        localStorage.set('token', response.data.accessToken);
        console.log("fcm phiiiiiiiiiiiiiiiii",response.data.accessToken, "fcm phiiiiiiiiiiiiiiiii");
        return response;
    } catch (error) {
        return error;
    }
}
