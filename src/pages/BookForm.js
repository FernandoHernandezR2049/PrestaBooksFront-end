import React from "react";

const BookForm = () => {
    const [bookInForm, setBookInForm] = React.useState({ title: "", author: "", isbn: "", state: 0 });
    const handleChangeInBookForm = (event) => {
        setBookInForm(prevBookInForm => {
            return { ...prevBookInForm, [event.target.name]: event.target.value }
        })
    }

    return (
        <>
            <h3>Agregar libro</h3>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={bookInForm.title} onChange={handleChangeInBookForm} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" value={bookInForm.author} onChange={handleChangeInBookForm} />
                <label htmlFor="isbn">Isbn</label>
                <input type="text" name="isbn" id="isbn" value={bookInForm.isbn} onChange={handleChangeInBookForm} />
                <label htmlFor="state">State</label>
                <input type="number" name="state" id="state" value={bookInForm.state} onChange={handleChangeInBookForm} />
                <button type="submit">Create book</button>
            </form>
        </>

    )
}

export default BookForm;