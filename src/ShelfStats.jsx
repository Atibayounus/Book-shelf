function ShelfStats({ books }) {
  const total = books.length
  const finished = books.filter((b) => b.finished).length
  const pagesRead = books.filter((b) => b.finished).reduce((sum, b) => sum + b.pages, 0)

  return (
    <div className="shelf-stats">
      <span>
        <strong>{total}</strong> books
      </span>
      <span className="dot">•</span>
      <span>
        <strong>{finished}</strong> finished
      </span>
      <span className="dot">•</span>
      <span>
        <strong>{pagesRead}</strong> pages read
      </span>
    </div>
  )
}

export default ShelfStats
