import issuesClient from './axiosInstance';

export const ORGANIZATION = 'Facebook';
export const REPOSITORY = 'React';
const PATH = `${ORGANIZATION}/${REPOSITORY}/issues`.toLowerCase();

export const getIssuesList = (params) => {
	return issuesClient.get(PATH, params);
};

export const getIssuesDetail = (id) => {
	return issuesClient.get(`${PATH}/${id}`);
};
