import * as React from 'react';
import { useState , useContext } from 'react';
import { Button } from '@mui/material';
import CartContext from '../../../../context/CartContext';

const ItemCount = ({titulo,precio,imagen,stock,showBtn,setShowBtn})=>{
    const [count, setCount] =useState(1);
    const {addCart} = useContext(CartContext);
    const onAdd = ()=>{
        setShowBtn(count);
        showBtn(true);
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
            <div>
                 <Button onClick={() => {
                 addCart({titulo,precio,imagen,count});
                onAdd();
                 }}
                    href='#' 
                    variant="contained"
                    color="error"> Agregar al Carrito</Button>
            </div>
         </>
    )

}
export default ItemCount;









