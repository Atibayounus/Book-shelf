import { useState } from 'react'
import BookForm from './BookForm'
import ShelfStats from './ShelfStats'
import BookList from './BookList'
import './App.css'

function App() {

  // alll the books will go here

  const [books, setBooks] = useState([])

  // which tab we're looking at right now

  const [filter, setFilter] = useState('All')

  // just add the new book onto the end of the array

  function addBook(newBook) {
    setBooks([...books, newBook])
  }

  // find the book by id and flip its finished status

  function toggleFinished(id) {
    setBooks(books.map((b) => (b.id === id ? { ...b, finished: !b.finished } : b)))
  }

  // keep everything except the book with this id
  
  function removeBook(id) {
    setBooks(books.filter((b) => b.id !== id))
  }

  return (
    <div className="app">

    

      <header className="header">
        <h1>My BookShelf</h1>
        <p>A simple React reading tracker.</p>
      </header>

      {/* form handles its own inputs, just gives us the finished book */}

      <BookForm onAddBook={addBook} />


      <ShelfStats books={books} />


      <div className="filters">
        {['All', 'Reading', 'Finished'].map((f) => (
          <button
            key={f}
            className={filter === f ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

     

      <BookList
        books={books}
        filter={filter}
        onToggleFinished={toggleFinished}
        onRemoveBook={removeBook}
      />
    </div>
  )
}

export default App