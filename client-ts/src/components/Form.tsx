import { FormEvent, useState } from 'react'
import { useQueryClient } from 'react-query'
import { useGetAuthorsQuery, useAddBookMutation } from '../generated/graphql'

interface Props {
  className?: string
}

const Form = ({ className }: Props) => {
  const queryClient = useQueryClient()
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')

  const { data, isLoading } = useGetAuthorsQuery()
  const { mutate } = useAddBookMutation({
    onSuccess: res => {
      console.log(res)
      setName('')
      setGenre('')
      setAuthorId('')
      // 更新 books data
      queryClient.invalidateQueries('getBooks')
    },
    onError: error => {
      console.log(error)
      alert('Error !')
    },
  })

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && genre && authorId) mutate({ name, genre, authorId })
  }

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
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre：</label>
        <input
          className="w-60 p-2 rounded-sm focus:outline-stone-400"
          type="text"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label>Author：</label>
        <select
          className="w-60 p-2 rounded-sm focus:outline-stone-400"
          value={authorId}
          onChange={e => setAuthorId(e.target.value)}
        >
          <option>Select author</option>
          {isLoading ? (
            <option disabled>loading Authors...</option>
          ) : (
            data?.authors?.map(author => (
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
  )
}

export default Form
