import  '../../ItemListContainer.css';
import Alert from './../../../Alert/Alert';
import CartContext from '../../../../context/CartContext';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';

 
const Item = ({datos})=>{
    const {id,nombre,titulo,precio,imagen} = datos;
    const {handleClick,addCart } = useContext(CartContext);
return( 
    <div className='ItemClass'>
        <img src={imagen}  alt={nombre} className='imgProd'/>
        <h2 className='titulo'>{nombre} - {titulo}</h2> 
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
                    onClick={() => {
                    handleClick({vertical: 'top', horizontal: 'right'});
                    addCart({titulo,precio,imagen,count:1,id}); 
                }}>
                    <Alert> <AddShoppingCartIcon className="MyCart"/> </Alert>
                </Button>
            </Grid>            
        </Grid>
        

    </div>
    )
}
export default Item;
    