import React from 'react';
//Import card from bootstrap
import Card from 'react-bootstrap/Card';
//class for movie item
export class Movieitem extends React.Component {

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
                </Card>

            </div>

        );
    }
}
