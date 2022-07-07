import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Error404 = () => {
  return (
        <>
        <div className='error'>
        <h1>Error404 - La página que buscas no fue encontrada :(</h1>

        <ItemListContainer titleCont='Quizás te interese alguno de estos productos'/>
        </div>
        </>

  )
}

export default Error404;