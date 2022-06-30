import Alert from './../../../Alert/Alert';
import CartContext from '../../../../context/CartContext';

import * as React from 'react';
import { useState , useContext } from 'react';

import { Button } from '@mui/material';


const ItemCount = ({id,titulo,precio,imagen,stock,showBtn,setShowBtn, tituloBtn})=>{
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
                    disabled={count === 0}>
                -</Button>

                <p>{count}</p>

                <Button onClick={()=> 
                    setCount(count + 1)}   
                    disabled={count === (stock)}>
                +</Button>
            </div>
            <div>
                <Alert id={id}
                 titulo={titulo}
                 precio={precio}
                 imagen={imagen}
                 count={count}
                //  onAdd={onAdd}
                 addCart={addCart}
                 >
                    <Button 
                        onClick={onAdd}
                        href='#' 
                        variant="contained"
                        color="error">
                            {tituloBtn}
                    </Button>
                </Alert>
            </div>
         </>
    )

}
export default ItemCount;

// onClick={() => {
//     addCart({titulo,precio,imagen,count,id});
//     onAdd();
//     }}







