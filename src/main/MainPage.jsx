import React, { useState, useMemo } from 'react';
import { getIssuesList } from '../api/request';
import AdBanner from './AdBanner';
import IssueItem from './IssueItem';
import Loading from '../common/Loading';
import useObserver from '../hooks/useInfiniteScroll';
import useApiHook from '../hooks/useApiHook';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const INIT_PAGE = 1;
const QUERY_PARAMS = {
	state: 'open',
	sort: 'comments',
	direction: 'desc',
	per_page: 10,
};

const MainPage = () => {
	const [page, setPage] = useState(INIT_PAGE);
	const navigate = useNavigate();

	const params = useMemo(() => {
		return {
			params: {
				...QUERY_PARAMS,
				page,
			},
		};
	}, [page]);

	const { issues, isLoading, isError, hasNextPage } = useApiHook(
		getIssuesList,
		params,
	);
	const lastItemRef = useObserver(hasNextPage, setPage);

	if (isError) {
		navigate('/error');
	}

	return (
		<main>
			<Wrap>
				{issues.map((issue, idx) => {
					const isBannerVisible = (idx + 1) % 4 === 0;
					return (
						<li key={`${issue.number}-${idx}`}>
							<IssueItem issue={issue} />
							{isBannerVisible && <AdBanner />}
						</li>
					);
				})}
				{isLoading && <Loading />}

				<div ref={lastItemRef} />
			</Wrap>
		</main>
	);
};

const Wrap = styled.ul`
	padding: 20px;
`;

export default MainPage;
