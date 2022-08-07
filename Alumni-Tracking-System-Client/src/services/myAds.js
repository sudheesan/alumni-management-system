import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getMyAds = async () => {
    const result = await axios.get('/ads/1');
    return result.data;
}

export {
    getMyAds
} 