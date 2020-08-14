import styled from 'styled-components';
import { COLORS } from '../../visual/constants';

export const Container = styled.header`
  display: grid;
  grid-row-gap: 10px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.greyLight};
  text-align: center;
  order: 2;
`;

export const Photo = styled.img`
  border-radius: 100%;
  margin: 0 auto;
  order: 1;
`;
