import Item from './Item/Item';
import { Grid } from '@mui/material';

const ItemList = ({listaProd})=>{  
    const listaProdMap = listaProd.map( (data)=>{
        return(
            <Grid item md={3} key={data.id} value={data.id}  sx={{marginBottom:'64px'}}>
                <Item  datos={data} />
            </Grid>      
        )
    })

    return( 
        <> 
        {listaProdMap}
        </>     
    )
}

export default ItemList;


