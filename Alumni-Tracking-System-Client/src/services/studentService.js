import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getStudents = async () => {
    const result = await axios.get('/tests',{ crossdomain: true });
    return result.data;
}

export {
    getStudents
} 