import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const BASE_URL = '/students';

const getStudents = async () => {
    const result = await axios.get(BASE_URL);
    return result.data;
}

const getStudentByid = async (id) => {
    const result = await axios.get(`${BASE_URL}/${id}`);
    return result.data;
}

export {
    getStudents,
    getStudentByid
} 