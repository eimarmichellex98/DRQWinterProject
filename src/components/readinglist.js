import React from 'react';
import { CreateList } from './createlist';

//using map function to split the books array
export class ReadingList extends React.Component{

    render(){
        
        return this.props.books.map( (book)=>{
            return <CreateList book={book} reloadMethod={this.props.reloadMethod}></CreateList>
        })
    }
}