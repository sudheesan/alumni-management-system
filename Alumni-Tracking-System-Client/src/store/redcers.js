
import studentReducer from '../slices/studentSlice';
import tagsReducer from '../slices/tagsSlice';
import jobAdsReducer from '../slices/jobAdsSlice';
import myAdsReducer from '../slices/myAdsSlice';


export default {
    student: studentReducer,
    tags: tagsReducer,
    jobAds: jobAdsReducer,
    myAds: myAdsReducer,
}