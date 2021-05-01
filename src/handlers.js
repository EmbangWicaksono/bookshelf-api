const books = require('./books')
const { nanoid } = require('nanoid')

const addBook = (request, h) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload

  const id = nanoid(16)
  const insertedAt = new Date().toISOString()
  const updatedAt = new Date().toISOString()
  const finished = (pageCount === readPage)
  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    })
    response.code(400)
    return response
  }
  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    })
    response.code(400)
    return response
  }

  const newBook = {
    id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt
  }

  books.push(newBook)
  const BookAdded = books.filter(book => book.id === id).length > 0

  if (BookAdded) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
    response.code(201)
    return response
  }

  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan'
  })
  response.code(500)
  return response
}

const getAllBooks = () => ({
  status: 'success',
  data: {
    books
  }
})

module.exports = { addBook, getAllBooks }
