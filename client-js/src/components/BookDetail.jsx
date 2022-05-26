const BookDetail = () => {
  return (
    <div className="flex flex-col gap-4 bg-stone-300 h-full p-20 text-center">
      <h2 className="text-2xl semibold mb-1 truncate">{'書名啦'}</h2>

      <p className="italic text-sm text-stone-500 ">{'歡樂搞笑'}</p>

      <p className="semibold text-stone-800 mb-4">{'Jennie'}</p>

      <div className="text-left ">
        All books by this author:
        <ul>
          <li className="ml-8 list-disc my-2">{'自傳'}</li>
          <li className="ml-8 list-disc my-2">{'自傳'}</li>
        </ul>
      </div>
    </div>
  )
}

export default BookDetail
