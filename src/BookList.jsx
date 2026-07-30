import BookCard from './BookCard'

function BookList({ books, filter, onToggleFinished, onRemoveBook }) {
  let filteredBooks = books

  if (filter === 'Reading') {
    filteredBooks = books.filter((b) => !b.finished)
  } else if (filter === 'Finished') {
    filteredBooks = books.filter((b) => b.finished)
  }

  if (filteredBooks.length === 0) {
    return <p className="empty-msg">No books to show.</p>
  }

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onToggleFinished={onToggleFinished}
          onRemoveBook={onRemoveBook}
        />
      ))}
    </div>
  )
}

export default BookList
