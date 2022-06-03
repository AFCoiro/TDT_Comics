import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({datos})=>{
    const {id,nombre,titulo,precio,imagen} = datos;

return( 
        <div className='ItemClass'>
        <h2 className='titulo'>{nombre} - {titulo}</h2> 
        
        <img src={`/prod/${imagen}`}  alt={nombre} className='imgProd'/>
        <h4>{precio}</h4> 
        <Button variant="contained" color="error"> 
        <Link to={`/product/${id}`} className='btnDetalle'>DETALLE</Link> 
        </Button>

    </div>
    )
}
export default Item;
    

