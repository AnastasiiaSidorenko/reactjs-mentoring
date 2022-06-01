import "./App.css";
import { Counter } from "./components/Counter";
import { PureComponentExample } from "./components/PureComponentExample";
import { MoviesList } from "./components/MoviesList";

const movies = ["all", "documentary", "comedy"];

function App() {
  return (
    <div className="App">
      <Counter />
      <PureComponentExample />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
