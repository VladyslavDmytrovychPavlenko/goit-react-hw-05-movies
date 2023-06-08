import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Cont } from 'components/Cont';
import { fetchMoviesReviews } from 'API/API';
import { BeatLoader } from 'react-spinners';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMoviesReviews(movieId)
      .then(setReview)
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
        <p>Error 404: Reviews not found</p>
      </Cont>
    );
  }

  if (!review) {
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
      <Cont as="ul" display="flex" flexDirection="column" gridGap={15} p={0}>
        {review.results.map(({ author, content }, index) => (
          <li key={index}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </Cont>
    </Cont>
  );
};

export default Reviews;
