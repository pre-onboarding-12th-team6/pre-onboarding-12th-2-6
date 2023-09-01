export const dateParsing = (created_at) => {
	return new Date(created_at).toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
