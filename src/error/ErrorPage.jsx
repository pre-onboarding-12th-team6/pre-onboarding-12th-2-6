import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();

	const returnToMainPage = useCallback(() => {
		navigate('/');
	}, [navigate]);

	const returnToPreviousPage = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	return (
		<div>
			<div>
				<h1>사용할 수 없는 페이지 입니다.</h1>
			</div>
			<div>
				<h3>
					이용에 불편을 드려 죄송합니다 <br /> 주소를 다시 한 번 확인해주세요
				</h3>
			</div>
			<div>
				<button onClick={returnToPreviousPage}>이전 페이지로</button>
				<button onClick={returnToMainPage}>메인 페이지로</button>
			</div>
		</div>
	);
};

export default ErrorPage;
