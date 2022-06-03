import { useState } from 'react';
import { Button } from '@mui/material';

const ItemCount = ({stock})=>{
    const [count, setCount] =useState(1);
    const onAdd = ()=>{
        console.log(count)
}
    return(
        <>
            <div className='Contador'>
                <Button onClick={()=> 
                    setCount(count - 1)} 
                    disabled={count === 0}>-</Button>

                <p>{count}</p>

                <Button onClick={()=> 
                    setCount(count + 1)} 
                    disabled={count === (stock)}>+</Button>
            </div>
                 <Button onClick={onAdd} 
                    href='#' 
                    variant="contained"
                    color="error"> Agregar al Carrito</Button>

         </>
    )

}
export default ItemCount;