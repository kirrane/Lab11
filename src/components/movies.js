import React from 'react';
//Imports movieitem.js
import {Movieitem} from './movieitem';
//class for movies
export class Movies extends React.Component{

        render(){
            return this.props.movies.map( (movie)=>{
                    return <Movieitem movie={movie}></Movieitem>
            })
        }
}
