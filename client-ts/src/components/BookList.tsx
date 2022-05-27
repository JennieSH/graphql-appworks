import { useState } from 'react'
import { useGetBooksQuery } from '../generated/graphql'
import BookDetail from './BookDetail'

const BookList = () => {
  const [selectedBookId, setSelectedBookId] = useState<string | undefined>(undefined)

  const { data, isSuccess } = useGetBooksQuery()

  return (
    <section className="grid grid-cols-3 min-h-screen">
      <div className="col-span-2 p-10">
        <h1 className="font-bold text-center text-3xl font-mono mb-12">Reading List</h1>

        <div className="flex gap-3 flex-wrap">
          {isSuccess ? (
            data.books.map(book => (
              <button
                key={book.id}
                className="p-2 border-2 border-neutral-300 rounded-lg bg-neutral-200 hover:outline outline-offset-2"
                onClick={() => setSelectedBookId(book.id)}
              >
                {book.name}
              </button>
            ))
          ) : (
            <p className="animate-pulse">Loading ...</p>
          )}
        </div>
      </div>

      <BookDetail bookId={selectedBookId} />
    </section>
  )
}

export default BookList
