export const MoviesList = ({ movies }) => {
  return (
    <div>
      <h2>Movies categories</h2>
      <ul>
        {movies.map((movie, index) => {
          return <li key={index}>{movie}</li>;
        })}
      </ul>
    </div>
  );
};
