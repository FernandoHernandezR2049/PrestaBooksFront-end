import React, { useEffect } from "react";
import Book from './Book'
import BookForm from "./BookForm";

const LibrarianDashboard = (props) => {
    const [books, setBooks] = React.useState([]);
    const fetchBooks = () => {
        const url = "http://localhost:8080/api/book"
        let options = {
            method: "GET",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${props.jwt}`
            }
        }
        return fetch(url, options);
    }
    useEffect(() => {
        fetchBooks().then((res) =>
            res.ok
                ? res.json()
                : Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "Ocurrió un error",
                })
        ).then(items => { setBooks(items) })
            .catch((err) => err);
    }, [])
    return (
        <div>
            <button onClick={props.deleteJWT}>Log out</button>
            <h1>Welcome !</h1>
            <BookForm />
            <h3>Books in library</h3>
            {books.map(book => {
                return (<Book key={book.id} title={book.title} author={book.author} isbn={book.isbn} />)
            })}
        </div>
    )
}

export default LibrarianDashboard;