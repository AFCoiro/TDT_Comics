import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './../../ItemListContainer/ItemListContainer';
import CartContext from '../../../context/CartContext';

import { Button, Grid, Skeleton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { useContext } from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom'; 

const ItemDetail= ({data})=>{
    const {nombre,titulo,precio,imagen,stock,detalle,id,count} = data;
    const [showBtn, setShowBtn] = useState(false);
    const {removeCart, loading } = useContext(CartContext);

    const returnItem =()=>{
        setShowBtn(false);
        removeCart(id)
    }


    return(
        <>
        <Grid container  className='detalle'> 
            <Grid item md={5}>
                {loading?
                (<Skeleton
                    animation="wave"
                    variant="rectangular"
                    height={500}
                    width={355}
                    sx={{ marginLeft: '20%'}}
                 />)
                :
                (<div>           
                <img src={imagen} alt={titulo}/>   
            </div>)
            }

            </Grid>

            <Grid item md={6}>
            {loading ? (
                <Box sx={{display: 'flex',  flexDirection:'column'}}>
                <Skeleton sx={{ margin: '10px' }} variant="h1"  animation="wave" />
                <Skeleton sx={{ width: '80px', alignSelf:'center' }} variant="h2"  animation="wave" />
                </Box>
            )
            :(<><h1>{nombre}-{titulo}</h1>
                <h2>${precio}</h2></>)}
                <p> 12 cuotas sin interés - 
                    20% de descuento pagando con Efectivo Contraentrega para Envíos en moto- 
                    Transferencia o Deposito bancario - Efectivo o Débito en sucursal.</p>
                
                {!showBtn ?
                <ItemCount
                 stock={stock} 
                 titulo={titulo}
                 precio={precio}
                 imagen={imagen}
                 id={id}
                 count={count}
                 setShowBtn={setShowBtn}
                 tituloBtn='AGREGAR AL CARRITO'
                />           
                 : 
                <> 
                <h4>Este producto fue agregado a tu carrito de compras.</h4>
                <Button
                    variant="contained" 
                    color="error">
                    <Link className='btnDetalle1' to={'/cart'} >
                        TERMINAR COMPRA  
                    </Link> 
                </Button>
                <Button onClick={returnItem} color="error">
                    <EditIcon /> 
                </Button>
                </>
                } 

            </Grid>

        </Grid>

        <Grid >
            <h2>Descripción</h2>
            {loading?
                (   <><Box>
                    <Skeleton variant="text"  animation="wave" />
                    <Skeleton variant="text"  animation="wave" />
                    <Skeleton variant="text"  animation="wave" />
                    <Skeleton variant="text"  animation="wave" />
                    </Box></>)
                :
                (
            <p>{detalle}</p>)}
        </Grid>
            
        <Grid>
            <ItemListContainer titleCont='Productos Relacionados'/>
        </Grid>


        </>
    )

}
export default ItemDetail;

