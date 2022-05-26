import { useState } from 'react'

const Form = ({className}) => {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    alert(name)
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
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre：</label>
        <input
          className="w-60 p-2 rounded-sm focus:outline-stone-400"
          type="text"
          onChange={e => setGenre(e.target.value)}
        />
      </div>
      <div>
        <label>Author：</label>
        <select
          className="w-60 p-2 rounded-sm focus:outline-stone-400"
          onChange={e => setAuthorId(e.target.value)}
        >
          <option>Select author</option>
          <option disabled>loading Authors...</option>
        </select>
      </div>
      <button className="w-10 h-10 text-white bg-stone-600 rounded-full text-2xl hover:bg-stone-800">
        ＋
      </button>
    </form>
  )
}

export default Form
