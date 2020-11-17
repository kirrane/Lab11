import React from 'react';
//imports movie.js
import { Movies } from './movies';
//Importing axios to allow async opperations
import axios from 'axios';
//class for read
export class Read extends React.Component {
    //Adding the data to components state, data format in JSON
    state = {
        movies: [

        ]
    };
    //Lifestyle hook, gets called everytime our component is active.
    componentDidMount() {
        //using axios to fetch the url api, added in url for server to get json blob
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    //Updates state with response from search url, changed search to movies for new api
                    this.setState({ movies: response.data })
                }


            )
            .catch(
                //If theres a problem this will log to the console to let you know 
                (error) => {
                    console.log(error)
                }
            );
    }

    render() {
        return (
            <div>
                <h1>This is the Read Component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>

        );
    }
}
