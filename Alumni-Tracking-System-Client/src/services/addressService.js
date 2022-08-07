import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getAllAddresses = async () => {
    const result = await axios.get('/addresses');
    return result.data;
}

export {
    getMyAds
} 