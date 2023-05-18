import React from 'react'
import {FilterButtonContainer, Filterbutton, FiltersContainer, ItemsLeft} from './TodoFilters.Components'

const TodoFilters = ({ 
    total,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos,
    handleClearComplete
 }) => {
  return (
    <FiltersContainer>
      <ItemsLeft total={total} />
      <FilterButtonContainer>
        <Filterbutton action={()=> showAllTodos() } active={activeFilter} filter= 'All' />
        <Filterbutton action={()=> showActiveTodos() } active={activeFilter} filter= "Active"/>
        <Filterbutton action={()=> showCompletedTodos() } active={activeFilter} filter= "Completed" />
      </FilterButtonContainer>


      <button 
        className='text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in'
        onClick={handleClearComplete}
      >
        Clear Completed
      </button>

    </FiltersContainer>
  )
}

export default TodoFilters