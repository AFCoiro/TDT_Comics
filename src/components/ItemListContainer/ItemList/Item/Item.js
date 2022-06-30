import CartContext from '../../../../context/CartContext';
import Alert from './../../../Alert/Alert';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

 
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
             
                ><Alert id={id}
                 nombre={nombre}
                 titulo={titulo}
                 precio={precio}
                 imagen={imagen}
                 addCart={addCart}
                 count={1}><AddShoppingCartIcon className="MyCart"/></Alert>
            </Button>
            </Grid>

        </Grid>
        

    </div>
    )
}
export default Item;
    
// onClick={()=> addCart({id,nombre,titulo,precio,imagen,count:1})}
