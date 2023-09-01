import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getIssuesDetail } from '../api/request';
import MDEditor from '@uiw/react-md-editor';

const DetailPage = () => {
	const { id } = useParams();
	const [issueDetail, setIssueDetail] = useState();

	useEffect(() => {
		const requestGetIssueDetail = async () => {
			const { data } = await getIssuesDetail(id);
			setIssueDetail(data);
		};
		requestGetIssueDetail();
	}, [id]);

	return (
		<Wrapper>
			{issueDetail && (
				<>
					<CenteredContainer>
						<Img src={issueDetail.user.avatar_url} alt="아바타 이미지" />
						<section>
							<Title>
								<h2>{`#${issueDetail.number} ${issueDetail.title}`}</h2>
								<Comment>{issueDetail.comments}</Comment>
							</Title>
							<p>{`작성자: ${
								issueDetail.user.login
							} / 작성일: ${issueDetail.created_at.slice(0, 10)}`}</p>
						</section>
					</CenteredContainer>

					<Content data-color-mode="light">
						<MDEditor.Markdown
							style={{ padding: 10 }}
							source={issueDetail.body}
						/>
					</Content>
				</>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.main`
	border: 2px solid #d9dddc;
	border-radius: 20px;
	padding: 24px;
	margin: 20px auto 20px;
`;

const CenteredContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	margin-bottom: 20px;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 12px;
	color: black;
	font-size: 20px;
	font-weight: 900;
`;

const Comment = styled.div`
	padding: 4px 10px;
	margin-left: 16px;
	border-radius: 20px;
	background-color: #03c75a;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
`;

const Img = styled.img`
	height: 20vh;
	padding-right: 16px;
`;

const Content = styled.div`
	position: relative;
	border-top: 2px solid #d9dddc;
	padding-top: 20px;
`;

export default DetailPage;
