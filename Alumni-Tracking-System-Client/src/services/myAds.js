import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getMyAds = async () => {
  const result = await axios.get("/ads/1");
  return result.data;
};

const postNewAdd = async (params) => {
  const result = await axios.post("/jobs", params);
  return result.data;
};

export { getMyAds, postNewAdd };
