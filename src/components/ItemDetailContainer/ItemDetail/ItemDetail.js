import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './../../ItemListContainer/ItemListContainer';

import { Button, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { useState} from 'react';
import { Link } from 'react-router-dom';


const ItemDetail= ({data})=>{
    const {nombre,titulo,precio,imagen,stock,detalle} = data;
    const [showBtn, setShowBtn] = useState(false);
    console.log('cantidad de productos comprados:',showBtn);

    return(
        <>
        <Grid container className='detalle'> 
            <Grid item md={5}>
                <div>           
                    <img src={`/prod/${imagen}`} alt={titulo}/>   
                </div>
            </Grid>

            <Grid item md={6}>
            <h1>{nombre}-{titulo}</h1>
                <h2>${precio}</h2>
                <p> 12 cuotas sin interés - 
                    20% de descuento pagando con Efectivo Contraentrega para Envíos en moto- 
                    Transferencia o Deposito bancario - Efectivo o Débito en sucursal.</p>
                
                {!showBtn ?
                <ItemCount
                 stock={stock} 
                 showBtn={showBtn}
                 setShowBtn={setShowBtn}
                 titulo={titulo}
                 precio={precio}
                 imagen={imagen}
                 tituloBtn='AGREGAR AL CARRITO'
                />              
                 : 
                <> 
                <h4>SELECCIONASTE {showBtn} ITEM/S.</h4>
                <Button
                    variant="contained" 
                    color="error">
                    <Link className='btnDetalle1' to={'/cart'} >
                        TERMINAR COMPRA  
                    </Link> 
                </Button>
                <Button color="error"><EditIcon /></Button>
                </>
                } 

            </Grid>

        </Grid>

        <Grid >
            <h2>Descripción</h2>
            <p>{detalle}</p>
        </Grid>
            
        <Grid>
            <ItemListContainer titleCont='Productos Relacionados'/>
        </Grid>


        </>
    )

}
export default ItemDetail;

