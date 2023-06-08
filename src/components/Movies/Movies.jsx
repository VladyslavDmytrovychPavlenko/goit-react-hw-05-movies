import { Cont } from 'components/Cont';
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  MovieCard,
  MovieList,
  TitleLink,
  MovieDesc,
  Title,
} from './Movies.styled';
import { fetchMoviesBySearch } from 'API/API';

const Movies = () => {
  const location = useLocation();
  console.log(location);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const urlValue = searchParams.get('query') ?? '';
  useEffect(() => {
    if (urlValue === '') return;
    const queryValue = value !== '' ? value : urlValue;
    fetchMoviesBySearch(queryValue).then(movie => {
      setSearchMovie(movie.results);
    });
  }, [urlValue, value]);

  const handleQueryChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Write the correct name!!!');
      return;
    }
    setSearchQuery('');
    const nextParams = searchQuery !== '' ? { query: searchQuery } : {};
    setSearchParams(nextParams);
    setValue(searchQuery);
    setSearchMovie([]);
  };

  return (
    <Cont as="main">
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          autoComplete="off"
          placeholder="Search movies"
          onChange={handleQueryChange}
        />
        <SearchFormBtn type="submit">
          <BsSearch />
        </SearchFormBtn>
      </SearchForm>

      <MovieList>
        {searchMovie.map(({ title, id, poster_path, release_date }, index) => (
          <MovieCard key={index}>
            <TitleLink to={`${id}`} state={{ from: location }} id={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={250}
                alt=""
              />
              <Title>{title}</Title>
            </TitleLink>
            <MovieDesc>
              Release date: {new Date(release_date).toLocaleDateString()}
            </MovieDesc>
          </MovieCard>
        ))}
      </MovieList>
    </Cont>
  );
};

export default Movies;
