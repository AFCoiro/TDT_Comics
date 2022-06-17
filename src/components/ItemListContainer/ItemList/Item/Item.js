import { Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CartContext from '../../../../context/CartContext';

const Item = ({datos})=>{
    const {id,nombre,titulo,precio,imagen} = datos;
    const {addCart} = useContext(CartContext)
return( 
        <div className='ItemClass'>
        <h2 className='titulo'>{nombre} - {titulo}</h2> 
        
        <img src={`/prod/${imagen}`}  alt={nombre} className='imgProd'/>
        <h4>${precio}</h4> 
        <Grid container
                direction="row"
                sx={{ justifyContent: 'center' }}
                >

            <Grid>
            <Button 
            variant="contained" 
            color="error"
            className='btnDetalle'> 
                <Link to={`/product/${id}`} 
                      ><VisibilityIcon className="MyCart"/>
                </Link> 
            </Button>
            </Grid>

            <Grid>
            <Button 
             variant="contained"
             color="error"
             className='btnDetalle'
             onClick={()=> addCart({id,nombre,titulo,precio,imagen,count:1})}
                ><AddShoppingCartIcon className="MyCart"/>
            </Button>
            </Grid>

        </Grid>


    </div>
    )
}
export default Item;
    

