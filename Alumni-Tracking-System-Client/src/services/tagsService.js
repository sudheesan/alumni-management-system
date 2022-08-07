import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getTags = async () => {
    const result = await axios.get('/tags');
    return result.data;
}

export {
    getTags
} 