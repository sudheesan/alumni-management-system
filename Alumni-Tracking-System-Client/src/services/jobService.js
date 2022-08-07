import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getAllJobs = async () => {
    const result = await axios.get('/jobs');
    return result.data;
}

export {
    getAllJobs
} 