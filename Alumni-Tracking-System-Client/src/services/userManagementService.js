import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getUserByEmail = async () => {
    const result = await axios.get('/tags');
    return result.data;
}

export {
    getTags
} 