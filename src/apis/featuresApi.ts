import axios from 'axios';

const featuresApi = axios.create({
    baseURL: import.meta.env.VITE_FEATURES_API,
});

export default featuresApi;