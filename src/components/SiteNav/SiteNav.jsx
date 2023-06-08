import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Cont } from 'components/Cont';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';

export const SharedLayout = () => {
  return (
    <Cont>
      <Cont
        as="header"
        background="linear-gradient(0deg, rgba(147,161,29,1) 25%, rgba(76,81,145,1) 85%)"
      >
        <Cont as="nav" display="flex" gridGap={15} justifyContent="center">
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </Cont>
      </Cont>
      <Suspense
        fallback={
          <LoadingContainer>
            <BeatLoader color="blue" size={30} />
          </LoadingContainer>
        }
      >
        <Outlet />
      </Suspense>
    </Cont>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NavItem = styled(NavLink)`
  color: black;
  font-size: 30px;
  padding: 20px 0;
  text-decoration: none;

  &.active {
    color: blue;
  }

  :hover:not(.active) {
    color: yellowgreen;
  }
`;
