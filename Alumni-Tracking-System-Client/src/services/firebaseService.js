import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const saveFcmToken = async (userId, fcmToken) => {
  return  await axios.put('/users/fcm-token', {
    fcmToken: fcmToken
  });
}

export {
  saveFcmToken
}
