import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routePath from './routePath';
import MainPage from '../main/MainPage';
import DetailPage from '../detail/DetailPage';
import ErrorPage from '../error/ErrorPage';

const Path = {
	home: routePath.home.path,
	issues: routePath.issues.path,
	detailIssue: routePath.detailIssue.path,
	errorRedirect: routePath.errorRedirect.path,
	error: routePath.error.path,
};

const Router = () => {
	const routes = useRoutes([
		{
			path: Path.home,
			element: <Navigate to={Path.issues} />,
			replace: true,
		},
		{
			path: Path.issues,
			element: <MainPage />,
		},
		{
			path: Path.detailIssue,
			element: <DetailPage />,
		},

		{
			path: Path.errorRedirect,
			element: <Navigate to={Path.error} />,
			replace: true,
			children: [
				{
					path: Path.errorRedirect,
					element: <Navigate to={Path.error} />,
				},
			],
		},
		{
			path: Path.error,
			element: <ErrorPage />,
		},
	]);

	return routes;
};

export default Router;
