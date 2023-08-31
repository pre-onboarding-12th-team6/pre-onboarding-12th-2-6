import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import routePath from './routePath';
import MainPage from '../main/MainPage';
import DetailPage from '../detail/DetailPage';
import ErrorPage from '../error/ErrorPage';

const Router = () => {
	const routes = useRoutes([
		{
			path: routePath.home.path,
			element: <Navigate to={routePath.issues.path} />,
			replace: true,
		},
		{
			path: routePath.issues.path,
			element: <MainPage />,
		},
		{
			path: routePath.issuesDetail.path,
			element: <DetailPage />,
		},
		{
			path: routePath.errorRedirect.path,
			element: <Navigate to={routePath.error.path} />,
			replace: true,
		},
		{
			path: routePath.error.path,
			element: <ErrorPage />,
		},
	]);

	return routes;
};

export default Router;
