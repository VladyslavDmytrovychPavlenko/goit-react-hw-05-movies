import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Home from './Home/Home';
import { Cont } from 'components/Cont';
import { SharedLayout } from './SiteNav/SiteNav';
import { BeatLoader } from 'react-spinners';

const Movies = lazy(() => import('./Movies/Movies'));
const MoviesDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Cont>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Cont>
  );
};

const Fallback = () => (
  <Cont
    as="section"
    style={{
      minHeight: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <BeatLoader color="blue" size={15} />
  </Cont>
);

const AppWithSuspense = () => (
  <Suspense fallback={<Fallback />}>
    <App />
  </Suspense>
);

export default AppWithSuspense;
