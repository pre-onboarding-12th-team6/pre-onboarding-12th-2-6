import { useCallback, useRef } from 'react';

function useInfiniteScroll(hasNextPage, setPage) {
	const observer = useRef();

	const lastItemRef = useCallback(
		(node) => {
			if (observer.current) {
				observer.current.disconnect();
			}
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage) {
					setPage((prevPage) => prevPage + 1);
				}
			});

			if (node) {
				observer.current.observe(node);
			}
		},
		[hasNextPage, setPage],
	);

	return lastItemRef;
}

export default useInfiniteScroll;
