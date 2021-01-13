import React, { Component } from 'react'

export default class MovieRow extends Component {

viewMovie=()=>{
    window.location.href=`https://www.themoviedb.org/movie/${this.props.movie.id}`
}
    render() {
        return (
    <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td><img src={"https://image.tmdb.org/t/p/w185"+this.props.movie.poster_path} width="120" alt="poster"></img></td>
            <td>
              {this.props.movie.title}
              <p>{this.props.movie.overview}</p>
              <input type="button"value="View"onClick={this.viewMovie}></input>
            </td>
          </tr>
        </tbody>
      </table>
        )
    }
}
