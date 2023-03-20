import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: orange;
  }
`;
