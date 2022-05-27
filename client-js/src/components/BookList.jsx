import BookDetail from "./BookDetail";

const BookList = () => {
  const data = {
    books: [
      {
        id: "1",
        name: "GraphQL",
      },
      {
        id: "2",
        name: "React",
      },
    ],
  };

  return (
    <section className="grid grid-cols-3 min-h-screen">
      <div className="col-span-2 p-10">
        <h1 className="font-bold text-center text-3xl font-mono mb-12">
          Reading List
        </h1>

        <div className="flex flex-wrap gap-3">
          {data.books.map((book) => (
            <button
              key={book.id}
              className="p-2 border-2 border-neutral-300 rounded-lg bg-neutral-200 hover:outline outline-offset-2"
            >
              {book.name}
            </button>
          ))}
        </div>
      </div>

      <BookDetail />
    </section>
  );
};

export default BookList;
