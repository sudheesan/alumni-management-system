import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const BASE_URL = "/faculties";

const addComment = async (params) => {
  const { comment, id } = params;
  const body = {
    comment,
  };
  const result = await axios.post(`${BASE_URL}/${id}/add-comment`, body);
  return result.data;
};

export { addComment };
