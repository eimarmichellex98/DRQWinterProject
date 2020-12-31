import React from 'react';
import { Button } from 'react-bootstrap';//will allow user to switch components but also disable button when on named page
import { ReadingList } from './readinglist';
import axios from 'axios';

//export class to be used in App
export class Current extends React.Component {

    state = {
        books: []
    };

    componentDidMount(){
        this.doReload()
    }
    
  
    doReload(){
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
                this.setState({books: response.data})
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    //asking user to enter the following to upload what they have read
    //binding
    constructor(){
        super();

        //wrong place?
        //this.ReloadData = this.ReloadData.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeBook = this.onChangeBook.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.doReload = this.doReload.bind(this)
    }

    onChangeAuthor(e){
        this.setState({
            Author: e.target.value
        });
    }

    onChangeBook(e){
        this.setState({
            Book: e.target.value
        });
    }

    onChangeGenre(e){
        this.setState({
            Genre: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const newBook = {
            Book: this.state.Book,
            Author: this.state.Author,
            Genre: this.state.Genre
        }
        //client and server talking to each other looking for http to use
        axios.post('http://localhost:4000/api/books', newBook)
        .then((res)=>{
            this.doReload()
            alert("New book added " + this.state.Book + "\nBy: " + this.state.Author + "\nGenre: " + this.state.Genre);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>What you have read so far</h1>
                <br></br>
                <Button href="/" variant="success" size="lg">Home</Button>{' '}
                <Button href="/suggest" variant="warning" size="lg">Suggestions</Button>{' '}
                <Button href="/current" variant="danger" size="lg" disabled>Reading List</Button>{' '}
                <Button href="/genre" variant="info" size="lg">Genres</Button>{' '}
                <br></br>
                <br></br>
                <div className = "App">
                <form onSubmit={this.onSubmit}>
                 <div className="form-group">
                  <label>Enter Book Title:</label>
                  <input type='text' 
                  className='form-control'
                  value={this.state.Book} 
                  onChange={this.onChangeBook}></input>
                </div>

                <div className="form-group">
                  <label>Enter Author:</label>
                  <input type='text' 
                  className='form-control'
                  value={this.state.Author} 
                  onChange={this.onChangeAuthor}></input>
                </div>

                <div className="form-group">
                  <label>Enter Genre:</label>
                  <input type='text' 
                  className='form-control'
                  value={this.state.Genre} 
                  onChange={this.onChangeGenre}></input>
                </div>

                <div className="form-group">
                  <input type='submit' 
                  value='Add to library'
                  className='btn btn-secondary' ></input>
                </div>

                </form>
                </div>

                <ReadingList books={this.state.books} reloadMethod={this.doReload} > </ReadingList>
            </div>
        );
    }
}