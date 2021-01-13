import React,{Component} from "react"
import "./App.css"
import MovieRow from "./MovieRow";
import $ from "jquery"
class App extends Component {

  constructor(props){
    super(props);
    this.state={}
    this.performSearch("woman");

    
  }

  performSearch=(seacrhTerm)=>{

    const url=`https://api.themoviedb.org/3/search/movie?query=${seacrhTerm}&api_key=f1e3d8a64dd65f44826c0c41033bebfd`;
      $.ajax({
        url:url,
        success:(searchResults)=>{
          console.log(searchResults)

          let movieRows=[];
          const results=searchResults.results;

          results.forEach(movie=>{
            const movieRow=<MovieRow key={movie.id} movie={movie}></MovieRow>
            movieRows.push(movieRow)
          })

          this.setState({rows:movieRows})
        },
        error:(xhr,status,error)=>{
          console.error("error")
        }
      })
  }

  searchChangeHandler=(e)=>{
    const {value}=e.target;

    this.performSearch(value);
  }

render(){
  return (
    <div>
      <table className="titleBar" >
        <tbody>
          <tr>
            <td>
              <img width="50px" src="themoviedb.png" alt="imdb" />
            </td>
            <td width="8"/>
            <td>
              <h3>MoviesDB Search</h3>
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize:24,
        display:"block",
        width:"99%",
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:16
        
      }} placeholder="Enter search term" onChange={this.searchChangeHandler}></input>

      {this.state.rows}
    </div>
  );
}
 
}

export default App;
