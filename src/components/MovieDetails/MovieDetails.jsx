import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect, Suspense, useRef } from 'react';
import { Cont } from 'components/Cont';
import { fetchMoviesDetails } from 'API/API';
import { Puff } from 'react-loader-spinner';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const searchQuery = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, release_date, popularity, overview, genres, title } =
    movie;

  return (
    <Cont as="main">
      <NavLink to={searchQuery.current}>
        <button type="button" style={backButtonStyle}>
          Go Back
        </button>
      </NavLink>
      <Cont
        as="section"
        pt={15}
        pb={15}
        borderBottom="2px solid blue"
        display="flex"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={300}
          alt=""
        />
        <Cont
          as="div"
          display="flex"
          flexDirection="column"
          gridGap={20}
          width={900}
          paddingLeft="20px"
        >
          <h1>{title}</h1>
          <Cont as="div" display="flex" flexDirection="column" gridGap={10}>
            <p>Release date: {new Date(release_date).toLocaleDateString()}</p>
            <p>User score: {Number(popularity).toFixed(0)}%</p>
          </Cont>

          <Cont as="div" display="flex" flexDirection="column" gridGap={10}>
            <h2>Overview:</h2>
            <p>{overview}</p>
          </Cont>
          <Cont as="div" display="flex" flexDirection="column" gridGap={10}>
            <h2>Genres:</h2>
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </Cont>
        </Cont>
      </Cont>
      <Cont
        display="flex"
        as="section"
        justifyContent="center"
        pt={15}
        pb={15}
        borderBottom="2px solid blue"
        alignItems="center"
        gridGap={10}
      >
        <h3>Additional information:</h3>
        <NavItem to={`cast`}>Cast</NavItem>
        <NavItem to={`reviews`}>Reviews</NavItem>
      </Cont>
      <Suspense
        fallback={
          <div>
            <Puff color="blue" height={80} width={80} />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Cont>
  );
};

const backButtonStyle = {
  backgroundColor: 'blue',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '4px',
  cursor: 'pointer',
};
export default MoviesDetails;
// style
const NavItem = styled(NavLink)`
  color: black;
  font-size: 25px;

  &.active {
    color: blue;
  }

  :hover:not(.active) {
    color: yellowgreen;
  }
`;
