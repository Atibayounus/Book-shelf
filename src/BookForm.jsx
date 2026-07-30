import { useState } from 'react'

function BookForm({ onAddBook }) {

  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pages, setPages] = useState('')

  // error message shown when the form is invalid

  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault() 

    // check that no field is empty

    if (!title.trim() || !author.trim() || !pages.trim()) {
      setError('Please fill in all fields.')
      return
    }

    // check that pages is a valid positive whole number

    const pageCount = Number(pages)
    if (!Number.isInteger(pageCount) || pageCount <= 0) {
      setError('Pages must be a valid positive number.')
      return
    }

    // build the new book object

    const newBook = {
      id: Date.now(), 
      title: title.trim(),
      author: author.trim(),
      pages: pageCount,
      finished: false
    }

    // send it up to App.jsx


    onAddBook(newBook)

    // reset the form after a successful add

    setTitle('')
    setAuthor('')
    setPages('')
    setError('')
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>Add a book</h2>
      <div className="form-row">
        {/* title field */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* author field */}
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            placeholder="Author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        {/* pages field */}
        <div className="form-group">
          <label htmlFor="pages">Pages</label>
          <input
            id="pages"
            type="number"
            placeholder="Pages"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </div>

        <button type="submit" className="add-btn">
          Add Book
        </button>
      </div>

      {/* only shows up when there's a validation error */}
      
      {error && <p className="error-msg">{error}</p>}
    </form>
  )
}

export default BookForm
