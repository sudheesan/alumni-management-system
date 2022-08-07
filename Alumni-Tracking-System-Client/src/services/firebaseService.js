import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const saveFcmToken = async (userId, fcmToken) => {
  return  await axios.post('/notification-token', {
    userId: userId,
    fcmToken: fcmToken
  });
}

export {
  saveFcmToken
}
