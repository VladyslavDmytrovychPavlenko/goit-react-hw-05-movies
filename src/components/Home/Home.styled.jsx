import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const TrendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const TrendCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 270px;
  justify-content: space-between;
  &:hover {
    transform: scale(1.06);
  }
`;
export const TitleLink = styled(NavLink)`
  /* font-size: 18px;
  font-weight: 500;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px; */
`;
export const TrendDesc = styled.p`
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: grey;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;
