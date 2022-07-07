//impota de component
import Alert from './../../../Alert/Alert';
import CartContext from '../../../../context/CartContext';
//importa de react/react-router-dom
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//importa de mui
import { Button, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

 
const Item = ({datos})=>{ 
    const {id,nombre,titulo,precio,imagen} = datos;
    const {handleClick,addCart } = useContext(CartContext);
return( 
    <div className='ItemClass'>
        <img className='imgItem' src={imagen}  alt={nombre} />
        <h3 className='NombreItem'>{nombre}</h3> 
        <p className='tituloItem'>{titulo}</p> 
  
        <Grid className='contBtnsItem'>
            <Grid className='BtnsItem'>
                <Button 
                    variant="contained"
                     className='btnDetalleItem'> 
                    <Link to={`/product/${id}`} 
                        ><VisibilityIcon className="MyCart"/>
                    </Link> 
                </Button>
                <Button  
                    className="btnDetalleItem"
                    variant="contained"
                    onClick={() => {
                    handleClick({vertical: 'top', horizontal: 'right'});
                    addCart({titulo,precio,imagen,count:1,id}); 
                }}>
                    <Alert> <AddShoppingCartIcon className="MyCart"/> </Alert>
                </Button>
            </Grid> 
            <h3 className='precioItem'>${precio}</h3>           
        </Grid>
        

    </div>
    )
}
export default Item;
    