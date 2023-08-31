import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();

	const returnToMainPage = useCallback(
		(e) => {
			navigate('/');
		},
		[navigate],
	);

	useEffect(() => {
		window.addEventListener('click', returnToMainPage);
		return () => {
			window.removeEventListener('click', returnToMainPage);
		};
	});

	return (
		<div>
			<div>this is error page</div>
			<div>React의 이슈 페이지로 돌아가실려면 화면을 클릭 해주세요</div>
		</div>
	);
};

export default ErrorPage;
