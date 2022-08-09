
import studentReducer from '../slices/studentSlice';
import tagsReducer from '../slices/tagsSlice';
import jobAdsReducer from '../slices/jobAdsSlice';
import myAdsReducer from '../slices/myAdsSlice';
import userReducer from "../slices/userSlice";

export default {
    student: studentReducer,
    tags: tagsReducer,
    jobAds: jobAdsReducer,
    myAds: myAdsReducer,
    user: userReducer,
}