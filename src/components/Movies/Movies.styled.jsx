import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SearchForm = styled.form`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  border: none;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  &::placeholder {
    font: inherit;
    font-size: 15px;
  }
`;
export const SearchFormBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  background: white;
  max-width: 270px;
  justify-content: space-between;
  &:hover {
    transform: scale(1.06);
  }
`;
export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  background-color: blue;

  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const MovieDesc = styled.p`
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
  text-decoration: none;
`;
export const TitleLink = styled(NavLink)`
  text-decoration: none;
`;
