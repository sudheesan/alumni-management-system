import { getAxiosClient } from "./httpService";
import { getEmail } from "./userService";

const axios = getAxiosClient();

const getUserByEmail = async () => {
    const result = await axios.get(`/users/${getEmail()}`);
    return result.data;
}

export {
    getUserByEmail
} 