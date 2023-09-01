import React from 'react';
import styled from 'styled-components';

const AdBanner = () => {
	return (
		<BannerContainer>
			<a href={BANNER_INFO.to} target="_blank" rel="noreferrer">
				<img src={BANNER_INFO.img} alt="wanted banner" />
			</a>
		</BannerContainer>
	);
};

export const BANNER_INFO = {
	to: 'https://www.wanted.co.kr/',
	img: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
};
const BannerContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border-bottom: 1px solid #d3d3d3;

	img {
		position: relative;
		width: 200px;
		display: block;
		margin: auto;
	}
`;
export default AdBanner;
