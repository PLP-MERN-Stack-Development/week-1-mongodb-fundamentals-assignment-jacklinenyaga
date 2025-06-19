// finding a specific book by author
({author: "Harper Lee"})

//finding a specific book by title
({ title: "The Hobbit" })

//Find books published after 1950
({ published_year: { $gt: 1950 } })

// Find books in a specific genre
({genre: "Fantasy"})

// Find in-stock books
({ in_stock: true })

// Find books with a price less than $10
({ price: { $lt: 10 } })

// Find books with more than 300 pages
({pages: { $gt: 300} })