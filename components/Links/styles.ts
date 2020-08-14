import styled from 'styled-components';
import { COLORS } from '../../visual/constants';

export const Container = styled.div`
  display: grid;
  grid-row-gap: 10px;
  margin-top: 20px;
`;

export const Link = styled.a`
  padding: 13px 0px;
  text-decoration: none;
  color: ${COLORS.dark};
  text-align: center;
  border-radius: 2px;
  background-color: ${COLORS.tertiary};
  font-weight: 500;
`;
