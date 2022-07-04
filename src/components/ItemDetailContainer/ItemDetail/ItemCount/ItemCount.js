import Alert from './../../../Alert/Alert';
import CartContext from '../../../../context/CartContext';

import * as React from 'react';
import { useState, useContext } from 'react';

import { Button } from '@mui/material';


const ItemCount = ({id,titulo,precio,imagen,stock,setShowBtn})=>{
    const [count, setCount] =useState(1);
    const {handleClick,addCart}= useContext(CartContext);
    const onAdd = ()=>{
        setShowBtn(true);
        // showBtn(count);
    }
    return(
        <>
            <div className='Contador'>
                <Button onClick={()=> 
                    setCount(count - 1)} 
                    disabled={count === 0}>
                -</Button>

                <p>{count}</p>

                <Button onClick={()=> 
                    setCount(count + 1)}   
                    disabled={count === (stock)}>
                +</Button>
            </div>
            <div>
                    <Button 
                    variant="contained" 
                    color="error"
                    onClick={() => {
                            handleClick({vertical: 'top', horizontal: 'right'});
                            onAdd();
                            addCart({titulo,precio,imagen,count,id}); 
                            }}>
                        <Alert>AGREGAR AL CARRITO</Alert>
                    </Button>
                
            </div>
         </>
    )

}
export default ItemCount;



