import React from 'react';
//class for create
export class Create extends React.Component{
    //  
    constructor(){
        //To use forms 
        super();
        //bindings so the copy can run when the button is clicked
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    //Method for the value when its changed 
    onChangeTitle(e){
        this.setState({
            Title: e.target.value
        });
    }
    //Method for value of year to update state
    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
        }
    //Method for value of poster to update state
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    //On Submit method
    onSubmit(e){
        e.preventDefault();
        alert("Movie: "+ this.state.Title + " " + this.state.Year + " " + this.state.Poster);
    }
        render(){
            return(
                <div className='App'>
                   <form onSubmit={this.onSubmit}> 
                   <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text' 
                        className='form-control' 
                        value={this.state.Title}
                        onChange={this.onChangeTitle}></input>
                   </div>
                   <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>

                    <div className='form-group'>
                        <label>Movie Poster: </label>
                        <textarea type='text' 
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>

                        </textarea>
                    </div>

                   <div className="form-group">
                    <input type='submit' 
                    value='Add Movie'
                    className='btn btn-primary'></input>
                   </div>

                   </form>
                </div>

            );
        }
}
