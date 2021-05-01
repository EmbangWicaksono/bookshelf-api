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

const getAllBooks = (request, h) => {
  const booklist = books.map(book => ({ id: book.id, name: book.name, publisher: book.publisher }))
  const response = h.response({
    status: 'success',
    data: {
      books: booklist
    }
  })
  response.code(200)
  return response
}

const getBookDetails = (request, h) => {
  const { bookId } = request.params
  const book = books.find(bookItem => bookItem.id === bookId)

  if (book) {
    const response = h.response({
      status: 'success',
      data: {
        book
      }
    })
    response.code(200)
    return response
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  })
  response.code(404)
  return response
}

const updateBook = (request, h) => {
  const { bookId } = request.params
  const index = books.findIndex(bookItem => bookItem.id === bookId)
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload

  if (index !== -1) {
    const updatedAt = new Date().toISOString()
    const finished = (pageCount === readPage)
    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      })
      response.code(400)
      return response
    }
    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      response.code(400)
      return response
    }
    books[index] = {
      ...books[index], name, year, author, summary, publisher, pageCount, readPage, reading, updatedAt, finished
    }
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })
    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan'
  })
  response.code(404)
  return response
}

const deleteBook = (request, h) => {
  const { bookId } = request.params
  const index = books.findIndex(bookItem => bookItem.id === bookId)

  if (index !== -1) {
    books.splice(index, 1)
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus'
    })
    response.code(200)
    return response
  }
  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan'
  })
  response.code(404)
  return response
}
module.exports = { addBook, getAllBooks, getBookDetails, updateBook, deleteBook }
