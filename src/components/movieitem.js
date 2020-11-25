import React from 'react';
//Import card from bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//class for movie item
export class Movieitem extends React.Component {

    //Constructor
    constructor() {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    //Delete Method
    DeleteMovie(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.movie._id);

        axios.delete("http://localhost:4000/api/movies/" + this.props.movie._id)
            .then(() => {
                this.props.ReloadData();

            })
            .catch();
    }

    render() {
        return (
            <div>
                {/*Using card from bootstrap*/}
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>

                    <Card.Body>

                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.poster} width="200" height="200"></img>

                            <footer className="blockquote-footer">
                                <p>{this.props.movie.year}</p>
                            </footer>
                        </blockquote>

                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>

            </div>

        );
    }
}
