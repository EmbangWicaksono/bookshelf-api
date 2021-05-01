const { addBook } = require('./handlers')

const routes = [
  {
    path: '/books',
    method: 'POST',
    handler: addBook
  }
]

module.exports = routes
