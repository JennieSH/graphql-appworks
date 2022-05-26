import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries";

const Form = ({ className }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, data } = useQuery(getAuthorsQuery);
  // 寫法一
  const [addBook] = useMutation(addBookMutation, {
    refetchQueries: [getBooksQuery],
    onCompleted: (res) => {
      console.log(res);
      setName("");
      setGenre("");
      setAuthorId("");
    },
    onError: () => alert("Error !"),
  });

  // 寫法二： addBook 可以直接呼叫，不用傳參數
  // useMutation 第二參數為一 options
  // const [addBook, { data: addBookRes, error, loading }] = useMutation(
  //   addBookMutation,
  //   { variables: { name, genre, authorId }, refetchQueries: [getBooksQuery] }
  // );

  const submitForm = (e) => {
    e.preventDefault();
    if (name && genre && authorId)
      addBook({ variables: { name, genre, authorId } });
  };

  return (
    <form
      className={`${className} w-[600px] p-10 flex flex-col items-end gap-4 bg-gray-50 `}
      onSubmit={submitForm}
    >
      <div className="field">
        <label>Book name：</label>
        <input
          className="w-60 p-2 rounded-sm focus:outline-stone-400"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre：</label>
        <input
          className="w-60 p-2 rounded-sm focus:outline-stone-400"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label>Author：</label>
        <select
          className="w-60 p-2 rounded-sm focus:outline-stone-400"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
        >
          <option>Select author</option>
          {loading ? (
            <option disabled>loading Authors...</option>
          ) : (
            data.authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))
          )}
        </select>
      </div>
      <button className="w-10 h-10 text-white bg-stone-600 rounded-full text-2xl hover:bg-stone-800">
        ＋
      </button>
    </form>
  );
};

export default Form;
