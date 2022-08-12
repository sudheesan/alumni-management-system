import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const saveFcmToken = async (userId, fcmToken) => {
  return  await axios.post('/api/v1/users/fcm-token', {
    userId: userId,
    fcmToken: fcmToken
  });
}

export {
  saveFcmToken
}
