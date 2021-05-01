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
  }
]

module.exports = routes
