//impota de component
import ItemCount from './ItemCount/ItemCount';
import ItemListContainer from './../../ItemListContainer/ItemListContainer';
import CartContext from '../../../context/CartContext';
//importa de mui
import { Button, Grid, Skeleton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
//importa de react/react-router-dom
import { useContext } from 'react';
import { useState} from 'react';
import { Link } from 'react-router-dom'; 

const ItemDetail= ({data})=>{
    const {nombre,titulo,precio,imagen,stock,detalle,id,count} = data;
    const [showBtn, setShowBtn] = useState(false);
    const {removeCart, loading } = useContext(CartContext);
    
    //funcion para editar contenido seleccionado del detail. borra el item del cart y vuelve a mostrar el count para seleccionar cantidad de item.
    const returnItem =()=>{
        setShowBtn(false);
        removeCart(id)
    }


    return(
        <>
        <Grid container  className='detalle'> 
            <Grid item md={6}>
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
                <img src={imagen} alt={titulo} className='imgDetail'/>   
            </div>)
            }

            </Grid>

            <Grid item md={6} className='contDetalle' >
                {loading ? (
                    <Box sx={{display: 'flex',  flexDirection:'column'}}>
                    <Skeleton sx={{ margin: '10px' }} variant="h1"  animation="wave" />
                    <Skeleton sx={{ width: '80px', alignSelf:'center' }} variant="h2"  animation="wave" />
                    </Box>
                )
                :(<><h1>{nombre}</h1>
                    <h2 className='tituloDetail'>{titulo}</h2>
                    <h2>${precio}</h2></>)}
                    
                <Grid >
                    <h3>Descripción</h3>
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
                    <ul className='listDetail'>
                        <li>✓ 12 cuotas sin interés</li>
                        <li>✓ 20% de descuento pagando con Efectivo</li>
                        <li>✓ Envios en el día</li>
                        <li>✓ Contraentrega para Envíos en moto</li>
                    </ul>
                    
                    {!showBtn ?
                    <ItemCount
                    className='itemCount'
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
                    <div className='itemCount'> 
                    <h4>Este producto fue agregado a tu carrito de compras.</h4>
                    <div>
                        <Button
                        variant="contained" 
                        color="error">
                            <Link to={'/cart'} >
                                TERMINAR COMPRA  
                            </Link> 
                        </Button>
                        <Button onClick={returnItem} color="error">
                            <EditIcon /> 
                        </Button>
                    </div>
                    </div>
                    } 
            </Grid>

        </Grid>
            
        <Grid>
            <ItemListContainer titleCont='Productos Relacionados'/>
        </Grid>


        </>
    )

}
export default ItemDetail;

