import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We are delighted to have you <span className='text-secondary'>Here! </span>
          </h1>
          <p className='mt-12'>
            Here you can different kinds of books ranging from fiction to non-fiction, from science to arts. 
            Do suggest us if you want us to add any other category.
          </p>
          <Link to="/">
            <button className='btn mt-4 btn-secondary hover:bg-pink-700 duration-200'>Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item = {item} />
          ))}
        </div>
      </div>
    </>
  ) 
}

export default Course