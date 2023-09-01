// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import IssueItem from '../main/IssueItem';

const DetailPage = () => {
	// const { id } = useParams();
	// const [issueDetail, setIssueDetail] = useState(null);
	// const [loading, setLoading] = useState(false);

	// const getIssueDetail = async () => {
	// 	setLoading(true);
	// 	// const { data } = await
	// 	// setIssueDetail(data);
	// 	setLoading(false);
	// };

	// useEffect(() => {
	// 	getIssueDetail();
	// }, []);

	return (
		<Wrapper>
			{/* <div>
				<CenteredContainer>
					<Img src={issueDetail.user.avatar_url} alt="아바타 이미지" />
					<IssueItem issue={issueDetail} />
					sdfsdf
				</CenteredContainer>
			</div> */}
			<Content />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	border: 1px solid var(--color-placeholder);
	border-radius: 20px;
	padding: 24px;
`;

// const CenteredContainer = styled.div`
// 	display: flex;
// 	justify-content: start;
// 	align-items: center;

// 	margin-bottom: 20px;
// `;

// const Img = styled.img`
// 	height: 20vh;
// 	padding-right: 16px;
// `;

const Content = styled.p`
	border-top: 1px solid var(--color-placeholder);
	padding-top: 20px;
`;

export default DetailPage;
