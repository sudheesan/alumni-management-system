import { getAxiosClient } from "./httpService";

const axios = getAxiosClient();

const getChartData = async () => {
    const result = await axios.get('/dashboard/get-chart-data');
    return result.data;
}

export{ 
    getChartData,
}
