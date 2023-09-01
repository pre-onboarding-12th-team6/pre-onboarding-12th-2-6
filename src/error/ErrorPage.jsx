import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const ErrorPage = () => {
	const navigate = useNavigate();

	const returnToMainPage = useCallback(() => {
		navigate('/');
	}, [navigate]);

	return (
		<PageContainer>
			<div>
				<Header>사용할 수 없는 페이지 입니다.</Header>
			</div>
			<div>
				<Subheader>
					이용에 불편을 드려 죄송합니다 <br /> 주소를 다시 한 번 확인해주세요
				</Subheader>
			</div>
			<ButtonWrapper>
				<Button onClick={returnToMainPage}>메인 페이지로</Button>
			</ButtonWrapper>
		</PageContainer>
	);
};

export default ErrorPage;

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #f4f4f4;
	font-family: Arial, sans-serif;
`;

const Header = styled.h1`
	font-size: 24px;
	margin-bottom: 10px;
`;

const Subheader = styled.h3`
	font-size: 18px;
	text-align: center;
	margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

const Button = styled.button`
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 80px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #0056b3;
	}
`;
