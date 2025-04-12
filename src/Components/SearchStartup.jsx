import React from 'react'

const SearchStartup = ({handleReset,handleSubmit,query,setQuery}) => {
  return (
    <form onSubmit={handleSubmit} className='search-form'>
    <input
      className='search-input'
      name="query"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder='Search Startups'
    />

    <div className='flex gap-2'>
      {query && (
        <button type='button' onClick={handleReset}>
          <i className="fa-solid fa-xmark text-3xl cursor-pointer text-black px-2 relative left-4 rounded-full" />
        </button>
      )}
      <button type='submit'>
        <i className="fa-solid fa-magnifying-glass text-3xl bg-black text-white p-4 relative left-4 rounded-full" />
      </button>
    </div>
  </form>
  )
}

export default SearchStartup
