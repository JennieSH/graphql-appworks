import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries";

const BookDetail = ({ bookId }) => {
  const { data, loading } = useQuery(getBookQuery, {
    variables: { id: bookId },
    skip: !bookId,
  });

  // console.log(data);

  if (loading) return null;
  return (
    <div className="flex flex-col gap-4 bg-stone-300 h-full p-20 text-center">
      {data ? (
        <>
          <h2 className="text-2xl semibold mb-1 truncate">{data.book.name}</h2>
          <p className="italic text-sm text-stone-500 ">{data.book.genre}</p>
          <p className="semibold text-stone-800 mb-4">
            {data.book.author.name}
          </p>
          <div className="text-left">
            All books by this author:
            <ul>
              {data.book.author.books.map((item) => {
                return (
                  <li key={item.id} className="ml-8 list-disc my-2">
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <div>No book selected...</div>
      )}
    </div>
  );
};

export default BookDetail;
