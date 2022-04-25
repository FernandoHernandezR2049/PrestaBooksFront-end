import React from "react";

const Book = (props) => {
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.author}</li>
            <li>{props.isbn}</li>
        </ul>
    )
}

export default Book