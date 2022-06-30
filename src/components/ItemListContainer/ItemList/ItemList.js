import Item from './Item/Item';
import { Grid } from '@mui/material';

const ItemList = ({listaProd})=>{  

    return( 
        <>
        
        {listaProd.map( (data)=>{
            return(
                <>
                <Grid item md={3} key={listaProd.id}>
                    <Item  datos={data} />
                </Grid>   
                </>
            )
        })}
        </>     
    )
}

export default ItemList;

