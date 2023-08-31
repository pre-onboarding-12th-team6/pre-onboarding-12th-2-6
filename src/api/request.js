import { axiosInstance as apiClient } from './axiosInstance';

export const ORGANIZATION = 'Facebook';
export const REPOSITORY = 'React';
const PATH = `${ORGANIZATION}/${REPOSITORY}/issues`.toLowerCase();

export const getIssuesList = (params) => {
	return apiClient.get(PATH, params);
};

export const getIssuesDetail = (id) => {
	return apiClient.get(`${PATH}/${id}`);
};
