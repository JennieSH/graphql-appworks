import BookDetail from "./BookDetail";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries";
import { useState } from "react";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selectedBookId, setSelectedBookId] = useState(null);

  // console.log(data);

  if (error) return <p>Oops! Error!</p>;
  return (
    <section className="grid grid-cols-3 min-h-screen">
      <div className="col-span-2 p-10">
        <h1 className="font-bold text-center text-3xl font-mono mb-12">
          Reading List
        </h1>
        <div className="flex gap-3 flex-wrap">
          {loading ? (
            <p className="animate-pulse">Loading ...</p>
          ) : (
            data.books.map((book) => (
              <button
                key={book.id}
                className="p-2 border-2 border-neutral-300 rounded-lg bg-neutral-200 hover:outline outline-offset-2"
                onClick={() => setSelectedBookId(book.id)}
              >
                {book.name}
              </button>
            ))
          )}
        </div>
      </div>

      <BookDetail bookId={selectedBookId} />
    </section>
  );
};

export default BookList;
