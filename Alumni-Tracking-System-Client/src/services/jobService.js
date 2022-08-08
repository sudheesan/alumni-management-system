import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getAllJobs = async () => {
    const result = await axios.get('/jobs');
    return result.data;
}

const getJobDetailsByJobId = async (jobId)=>{
    const result = await axios.get(`/jobs/${jobId}`);
    return result.data;
}

export {
    getAllJobs,
    getJobDetailsByJobId
} 