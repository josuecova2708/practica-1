import React from 'react'

export default function Card({name, pic, pos}) {
  return (
    <div className='card w-44 h-60 flex'>
          <div className='flex flex-col w-5/6'>
            <figure className='w-full h-full'>
              <img src={pic} alt="" className='w-full h-full' />
            </figure>
            <label htmlFor="" className='text-center mt-2'>{name}</label>
          </div>
          <div className='flex flex-col items-center justify-start w-1/6 pt-3'>
            <label htmlFor="" className='[writing-mode:vertical-rl] text-sm '>
              {pos}
            </label>
          </div>
        </div>
  )
}
