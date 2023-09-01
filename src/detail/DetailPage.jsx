import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import IssueItem from '../main/IssueItem';
import { getIssuesDetail } from '../api/request';
import MDEditor from '@uiw/react-md-editor';

const DetailPage = () => {
	// const { id } = useParams(); navigate에서 넘기면?
	const id = 14099;
	const [issueDetail, setIssueDetail] = useState();
	const [loading, setLoading] = useState(false);

	const requestGetIssueDetail = async () => {
		setLoading(true);
		const { data } = await getIssuesDetail(id);
		console.log(data);
		setIssueDetail(data);
		setLoading(false);
	};
	useEffect(() => {
		requestGetIssueDetail();
	}, []);

	console.log(loading);

	return (
		<Wrapper>
			{issueDetail && (
				<>
					<div>
						<CenteredContainer>
							<Img src={issueDetail.user.avatar_url} alt="아바타 이미지" />
							<IssueItem issue={issueDetail} />
						</CenteredContainer>
					</div>
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

const Wrapper = styled.div`
	border: 1px solid var(--color-placeholder);
	border-radius: 20px;
	padding: 24px;
`;

const CenteredContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	margin-bottom: 20px;
`;

const Img = styled.img`
	height: 20vh;
	padding-right: 16px;
`;

const Content = styled.div`
	position: relative;
	border-top: 1px solid var(--color-placeholder);
	padding-top: 20px;
`;

export default DetailPage;
