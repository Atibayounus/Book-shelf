function BookCard({ book, onToggleFinished, onRemoveBook }) {
  return (
    <div className="book-card">
      <label className="book-check">
        <input
          type="checkbox"
          checked={book.finished}
          onChange={() => onToggleFinished(book.id)}
        />
        <div className="book-info">
          <p className={book.finished ? 'book-title finished' : 'book-title'}>{book.title}</p>
          <p className="book-meta">
            {book.author} • {book.pages} pages
          </p>
        </div>
      </label>

      <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>
        Remove
      </button>
    </div>
  )
}

export default BookCard
