import React from 'react';
import { Button } from 'react-bootstrap';//will allow user to switch components but also disable button when on named page
import { Table } from 'react-bootstrap';//table listing genres and links to best books of that genre

//export class to be used in App
export class Genre extends React.Component{

render(){
    return(
        <div>
            <br></br>
            <h1>Search by Genre</h1>
            <br></br>
            <Button href="/" variant="success" size="lg">Home</Button>{' '}
            <Button href="/suggest" variant="warning" size="lg">Suggestions</Button>{' '}
            <Button href="/current" variant="danger" size="lg">Reading List</Button>{' '}
            <Button href="/genre" variant="info" size="lg"disabled>Genres</Button>{' '}
            <br></br>
            <br></br>
            <h4>The following links are to the best books of each genre</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Fiction</th>
                    <th>Non Fiction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><a href="https://www.goodreads.com/list/show/514.Best_Action_Adventure_Novels">Action/Adventure</a></td>
                    <td><a href="https://www.architecturaldigest.com/story/best-books-architecture-art-design-read-while-home#:~:text=%20The%20Best%20Books%20on%20Architecture%2C%20Art%2C%20and,Geffroy%2C%20and%20the%20New%20Look%2C%20by...%20More%20">
                    Art/Architecture</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.southernliving.com/culture/best-classic-books">Classics</a></td>
                    <td><a href="https://www.telegraph.co.uk/books/biography-books/best-biographies-autobiographies-ever-written/">Biography/AutoBiography</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.comicbookherald.com/the-best-comics-of-all-time/">Comics</a></td>
                    <td><a href="https://www.bbcgoodfood.com/review/the-best-cookbooks-of-2020">Cookbooks</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.forbes.com/sites/erikkain/2019/07/21/the-best-fantasy-novels-of-all-time/">Fantasy</a></td>
                    <td><a href="https://www.marieclaire.com/culture/g32619099/best-true-crime-books/">True Crime</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.goodreads.com/list/tag/romance">Romance</a></td>
                    <td><a href="https://expertvagabond.com/best-travel-books/">Travel</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.wired.co.uk/article/best-sci-fi-books">Science Fiction</a></td>
                    <td><a href="https://www.theguardian.com/books/2020/nov/28/best-science-books-of-2020">Science</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.goodreads.com/list/show/141.Best_Young_Adult_Fiction">Young Adult</a></td>
                    <td><a href="https://www.refseek.com/directory/encyclopedias.html">Encylopedia</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.goodreads.com/list/show/135.Best_Horror_Novels">Horror</a></td>
                    <td><a href="https://www.abebooks.com/books/best-history-books/index.shtml">History</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://reedsy.com/discovery/blog/best-mystery-books">Mystery</a></td>
                    <td><a href="https://www.verywellmind.com/best-self-help-books-4157995">Self Help</a></td>
                    </tr>
                    <tr>
                    <td><a href="https://www.oprahmag.com/entertainment/books/g27152635/best-thriller-books/">Thriller</a></td>
                    <td><a href="https://www.forbes.com/sites/nomanazish/2019/10/22/the-best-fitness-and-nutrition-books-of-2019/">Health/Fitness</a></td>
                    </tr>
                </tbody>
            </Table>
            </div>
    );
}
}