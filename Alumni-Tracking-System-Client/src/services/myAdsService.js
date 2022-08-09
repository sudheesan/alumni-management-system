import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const BASE_URL = "/jobs";
const getMyAds = async () => {
  const result = await axios.get(`${BASE_URL}/my-jobs`);
  return result.data;
};

const postNewAdd = async (params) => {
  const { description, tags, companyText, companyCity, companyState, fileUrls } = params;
  const updatedTags = tags.map((tg) => {
    return { tag: tg.tag };
  });
  const body = {
    description,
    tags: updatedTags,
    companyName: companyText,
    state: companyState,
    city: companyCity,
    files: fileUrls,
  };
  const result = await axios.post(BASE_URL, body);
  return result.data;
};

const updateAnAd = async (params) => {
  const { description, jobTags, companyText, companyCity, companyState, id } =
    params;
  const updatedTags = jobTags.map((tg) => {
    return { tag: tg.tag };
  });
  const body = {
    description,
    tags: jobTags,
    companyName: companyText,
    state: companyState,
    city: companyCity,
  };

  const result = await axios.put(`${BASE_URL}/${id}`, body);
  return result.data;
};

export { getMyAds, postNewAdd, updateAnAd };
