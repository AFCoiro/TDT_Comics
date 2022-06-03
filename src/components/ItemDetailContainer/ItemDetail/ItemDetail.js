import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount';
import { Grid } from '@mui/material';
import ItemListContainer from './../../ItemListContainer/ItemListContainer'


const ItemDetail= ({data})=>{
    const {id,nombre,titulo,precio,imagen,stock,detalle} = data;

    return(
        <>
        <Grid container className='detalle'> 
            <Grid item md={5}>
                <div>           
                    <img src={`/prod/${imagen}`} alt={titulo}/>   
                </div>
            </Grid>

            <Grid item md={6}>
            <h1>{nombre} {id}-{titulo}</h1>
                <h2>{precio}</h2>
                <p> 12 cuotas sin interés - 
                    20% de descuento pagando con Efectivo Contraentrega para Envíos en moto- 
                    Transferencia o Deposito bancario - Efectivo o Débito en sucursal.</p>
                <ItemCount stock={stock}/>
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

