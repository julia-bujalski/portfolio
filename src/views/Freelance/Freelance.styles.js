import styled from 'styled-components';
import { MOBILE } from '../../theme';

export const MockupSectionWrapper = styled.div`
	width: 90%;
	margin: 0 auto;

	@media only screen and (max-width: ${MOBILE}) {
		width: 100%;
	}
`;