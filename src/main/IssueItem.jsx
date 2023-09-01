import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const IssueItem = ({ issue }) => {
	const { number, title, login, created_at, comments } = issue;

	const navigate = useNavigate();
	const createdData = new Date(created_at).toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	const goToDetail = (path) => {
		return () => {
			navigate(path);
		};
	};

	return (
		<IssueItemContainer>
			<IssueInfoSection>
				<div className="about-issue">
					<div className="issue-number">{'#' + number}</div>
					<div
						className="issue-title"
						onClick={goToDetail(`/issues/${number}`)}
					>
						{title}
					</div>
				</div>
				<div className="about-record">
					<div className="issue-user">
						<span>작성자 : </span>
						<span>{login},</span>
					</div>
					<div className="issue-date">{createdData}</div>
				</div>
			</IssueInfoSection>
			<CommentSection>
				<span>코멘트</span>
				<span>{comments}</span>
			</CommentSection>
		</IssueItemContainer>
	);
};

const IssueItemContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	border-bottom: 1px solid #d3d3d3;
`;
const IssueInfoSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 70%;
	flex-grow: 1;

	.about-issue {
		display: flex;
		flex-direction: row;
		gap: 12px;

		.issue-number {
			font-weight: 700;
			color: darkgreen;
		}
		.issue-title {
			font-weight: 700;
			cursor: pointer;
			white-space: pre-line;
		}
	}
	.about-record {
		display: flex;
		flex-direction: row;
		gap: 12px;
		color: #707070;

		.issue-user {
			display: flex;
			flex-direction: row;
			gap: 5px;
		}
	}
`;

const CommentSection = styled.section`
	width: 80px;
	margin: auto 0;
	display: flex;
	text-align: center;
	gap: 5px;
	color: #707070;
`;
export default IssueItem;
