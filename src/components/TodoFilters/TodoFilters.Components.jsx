import React from 'react'


const FiltersContainer = ( {children} ) => {
  return (
    <div className='flex item-center justify-between p-4 bg-gray-700 border-b bordero-solid border-gray-600'>
        {children}
    </div>
  )
}


const ItemsLeft = ( {total = 0} ) => {
  return (
    <p className='text-gray-400 text-sm'>
        {total} items left
    </p>
  )
}


const FilterButtonContainer = ( {children} ) => {
  return (
    <div className='flex items-center space-x-2'>
        {children}
    </div>
  )
}


const Filterbutton = ( {action, active, filter} ) =>{
    //console.log(filter)

    return(
        // Cuando ponemos `` en Tailwind, podemos mezclar la logica con los estilos, como vemos aqui debajo.
        <button 
           className= {` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
            + (filter.toLowerCase().includes(active.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')
        } 
        onClick={action}
        >
            {filter}
        </button>
    )
}


export {FiltersContainer, ItemsLeft, FilterButtonContainer, Filterbutton}
/* Cuando es mas de un componente a exportar, quitar el "default" */