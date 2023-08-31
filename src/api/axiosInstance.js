import axios from 'axios';

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const issuesClient = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
});

issuesClient.interceptors.request.use((config) => {
	if (ACCESS_TOKEN) {
		config.headers.Authorization = ACCESS_TOKEN;
	}

	return config;
});

export default issuesClient;
