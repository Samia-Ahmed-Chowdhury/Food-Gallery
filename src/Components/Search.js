import React, { useContext } from 'react'
import { AppContext } from "../App"

function Search() {
   const {err,query, setQuery } = useContext(AppContext)


   return (
      <>
      <section className='search '>
      <div className='row search_title'>
      <h1>See What's inside....</h1>
         <div className='searchbar'>
         <form onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder='Search Anything' 
            value={query} onChange={(e)=>setQuery(e.target.value)}/>
            </form>
         </div>
         </div>
         <p>{err.show && err.msg}</p>
         </section>
      </>
   )
}

export default Search