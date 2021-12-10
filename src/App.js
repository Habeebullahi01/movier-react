import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header.component";
import MovieBody from "./components/movies.components";
import Movie from "./components/movie";
import SearchBody from "./components/search/search";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <MovieBody /> */}
        <Switch>
          <Route path="/" exact component={MovieBody} />
          <Route path="/search/:title" component={SearchBody} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
