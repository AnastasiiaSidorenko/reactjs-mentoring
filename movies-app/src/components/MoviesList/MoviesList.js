export const MoviesList = ({ movies }) => {
  const moviesList = movies.map((movie, index) => {
    return <li key={index}>{movie}</li>;
  });

  return (
    <div>
      <h2>Movies categories</h2>
      <ul>{moviesList}</ul>
    </div>
  );
};
