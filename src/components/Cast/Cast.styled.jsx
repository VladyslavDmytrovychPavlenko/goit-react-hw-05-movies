import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const CastCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 180px;
  justify-content: space-between;
  &:hover {
    transform: scale(1.06);
  }
`;

export const CastChar = styled.p`
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  color: grey;
`;
export const CastName = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 10px;
`;
