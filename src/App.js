import React, { Component } from "react";
import "./App.css";
import MovieRow from "./MovieRow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.performSearch("woman");
  }

  performSearch = (seacrhTerm) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${seacrhTerm}&api_key=f1e3d8a64dd65f44826c0c41033bebfd`;

    fetch(url)
      .then((data) => data.json())
      .then((result) => this.renderMovies(result))
      .catch((err) => console.error(err));
  };

  renderMovies = (data) => {
    let movieRows = [];
    const results = data.results;

    results.forEach((movie) => {
      const movieRow = <MovieRow key={movie.id} movie={movie}></MovieRow>;
      movieRows.push(movieRow);
    });

    this.setState({ rows: movieRows });
  };

  searchChangeHandler = (e) => {
    const { value } = e.target;

    this.performSearch(value);
  };

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img
                  width="100px"
                  src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle_white._CB1509060989_SY230_SX307_AL_.png"
                  alt="imdb"
                />
              </td>
              <td width="8" />
              <td>
                <h3>MoviesDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
          }}
          placeholder="Enter search term"
          onChange={this.searchChangeHandler}
        ></input>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
