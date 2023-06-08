import { Cont } from 'components/Cont';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMoviesTrends } from 'API/API';
import { BeatLoader } from 'react-spinners';

import {
  TrendCard,
  TrendList,
  TitleLink,
  TrendDesc,
  Title,
} from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoviesTrends().then(trending => {
      const newData = trending.results;

      setTrends(trends => {
        return [...trends, ...newData];
      });

      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Cont
        as="main"
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
  }

  return (
    <Cont as="main">
      <Cont
        as="h1"
        fontSize={34}
        fontWeight={500}
        mt={15}
        mb={15}
        textAlign="center"
      >
        Trending now
      </Cont>

      <TrendList>
        {trends.map(({ title, id, poster_path, release_date }, index) => (
          <TrendCard key={index}>
            <TitleLink to={`movies/${id}`} id={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={270}
                alt=""
              />
              <Title>{title}</Title>
            </TitleLink>
            <TrendDesc>
              Release date: {new Date(release_date).toLocaleDateString()}
            </TrendDesc>
          </TrendCard>
        ))}
      </TrendList>
      <Outlet />
    </Cont>
  );
};

export default Home;
