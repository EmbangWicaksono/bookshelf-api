const handle = require('./handlers')

const routes = [
  {
    path: '/books',
    method: 'POST',
    handler: handle.addBook
  },
  {
    path: '/books',
    method: 'GET',
    handler: handle.getAllBooks
  },
  {
    path: '/books/{bookId}',
    method: 'GET',
    handler: handle.getBookDetails
  },
  {
    path: '/books/{bookId}',
    method: 'PUT',
    handler: handle.updateBook
  },
  {
    path: '/books/{bookId}',
    method: 'DELETE',
    handler: handle.deleteBook
  }
]

module.exports = routes
