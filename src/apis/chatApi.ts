import axios from 'axios';

const chatApi = axios.create({
    baseURL: import.meta.env.VITE_CHAT_API,
});

export default chatApi;