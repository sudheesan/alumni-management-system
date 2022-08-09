import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getAllJobs = async () => {
    const result = await axios.get('/jobs');
    return result.data;
}

const applyToJob = async (params) => {
    const { id, cvUrl} = params;
    const result = await axios.post(`/students/apply-to-job/${id}`, {cvUrl});
    return result.data;
}

export {
    getAllJobs,
    applyToJob,
} 