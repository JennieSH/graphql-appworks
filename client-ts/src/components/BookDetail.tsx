import { useGetBookQuery } from '../generated/graphql'

interface Props {
  bookId?: string
}

const BookDetail = ({ bookId }: Props) => {
  const { data, isSuccess } = useGetBookQuery(
    {
      id: bookId!,
    },
    {
      enabled: !!bookId,
      onSuccess: data => console.log(data),
    }
  )

  if (!bookId)
    return (
      <div className="flex flex-col gap-4 bg-stone-300 h-full p-20 text-center">
        <div>No book selected...</div>
      </div>
    )

  return (
    <div className="flex flex-col gap-4 bg-stone-300 h-full p-20 text-center">
      {isSuccess && (
        <>
          <h2 className="text-2xl semibold mb-1 truncate">{data.book.name}</h2>
          <p className="italic text-sm text-stone-500 ">{data.book.genre}</p>
          <p className="semibold text-stone-800 mb-4">{data.book.author.name}</p>
          <div className="text-left">
            All books by this author:
            <ul>
              {data.book.author.books.map(book => {
                return (
                  <li key={book?.id} className="ml-8 list-disc my-2">
                    {book?.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default BookDetail
