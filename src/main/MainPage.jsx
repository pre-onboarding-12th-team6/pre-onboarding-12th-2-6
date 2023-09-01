// import React, { useState, useEffect } from 'react';
// import { getIssuesList } from '../api/request';
// import AdBanner from './AdBanner';
// import IssueItem from './IssueItem';
// import Loading from '../common/Loading';
// import useObserver from '../hooks/useInfiniteScroll';
// import styled from 'styled-components';

const MainPage = () => {
	// const [issueList, setIssueList] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [nextPage, setNextPage] = useState(true);
	// const [page, setPage] = useState(1);

	// const getIssues = async () => {
	// 	setLoading(true);
	// 	const { data } = await getIssuesList({
	// 		sort: 'comments',
	// 		page,
	// 		state: 'open',
	// 	});

	// 	if (data.length === 0) {
	// 		setNextPage(false);
	// 	} else {
	// 		setIssueList((prev) => [...prev, ...data]);
	// 		setPage((prev) => prev + 1);
	// 	}
	// 	setLoading(false);
	// };

	// console.log(issueList);
	// useEffect(() => {
	// 	getIssues();
	// }, []);

	// const loadMore = async () => {
	// 	if (nextPage && !loading) {
	// 		await getIssues();
	// 	}
	// };

	// const targetRef = useObserver(loadMore, [nextPage, loading]);

	return (
		<main>
			{/* <Wrap>
				{issueList.map((issue, idx) => {
					const isBannerVisible = (idx + 1) % 4 === 0;
					return (
						<li key={`${issue.number}-${idx}`}>
							<IssueItem issue={issue} />
							{isBannerVisible && <AdBanner />}
						</li>
					);
				})}
				{loading && <Loading />}

				<div ref={targetRef} />
			</Wrap> */}
		</main>
	);
};

// const Wrap = styled.ul`
// 	padding: 20px;
// `;

export default MainPage;
