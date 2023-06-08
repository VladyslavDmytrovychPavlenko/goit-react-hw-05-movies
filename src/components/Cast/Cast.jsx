import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cont } from 'components/Cont';
import { fetchMoviesCast } from 'API/API';
import { CastCard, CastList, CastName, CastChar } from './Cast.styled';
import { BeatLoader } from 'react-spinners';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMoviesCast(movieId)
      .then(setCast)
      .catch(() => setError(true));
  }, [movieId]);

  if (error) {
    return (
      <Cont
        as="section"
        style={{
          minHeight: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p>Error 404: Cast not found</p>
      </Cont>
    );
  }

  if (!cast) {
    return (
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
  }

  return (
    <Cont as="section">
      <CastList>
        {cast.cast.map(({ name, character, profile_path }, index) => (
          <CastCard key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              width={180}
              alt=""
            />
            <CastName>{name}</CastName>
            <CastChar>char: {character}</CastChar>
          </CastCard>
        ))}
      </CastList>
    </Cont>
  );
};

export default Cast;
