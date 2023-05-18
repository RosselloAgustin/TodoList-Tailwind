import React from 'react'
import cross from '../../assets/images/close-icon.svg'
import check from '../../assets/images/check-icon.svg'

const Todo = ( {todo, handleSetComplete, handleDelete} ) => {

  const { id, title, completed } = todo


  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600'>
        <div className='flex items-center'>
          {
            completed ? (
              <div onClick={ () => handleSetComplete(id) } className='bg-green-700 p-1 rounded-full cursor-pointer'>
                <img className='h-4 w-4' src= {check} alt=" Check Icon " />
              </div>
            )
            
            :(
            <span onClick={ () => handleSetComplete(id) } className='border-solid border border-gray-500 rounded-full p-3 cursor-pointer'></span>
            )
          }


            {/* Nota: Para que tome esta logica, NO olvidar el espacio despues de pl-3, porque sino no se adhiere el line-through */}
            <p className= { `pl-3 ` + (completed && "line-through") }>
                {title}
            </p>
        </div>

        <img 
            src= {cross} 
            alt="Close Icon"
            className='h-5 w-5 cursor-pointer transition-all duration-300 ease-in'
            onClick={ () => handleDelete(id) }
            />
            
    </div>
  )
}

export default Todo