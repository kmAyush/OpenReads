import React from 'react'

function Cards({item}) {
  return (
    <>
        <div className='mt-4 my-3 p-3'>
            <div className="card bg-base-100 w-92 shadow-xl dark:bg-slate-950 dark:text-white">
                <figure>
                    <img
                    src={item.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                    <div className="badge badge-outline p-3">₹ {item.price}</div>
                    <div className="cursor-pointer p-3 badge badge-outline hover:bg-secondary hover:text-white p-3">Open</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards
