import Item from './Item/Item';


const ItemList = ({listaProd})=>{  
    return( 
        listaProd.map( (data)=>{
            return(
                <div item md={4} key={listaProd.id}>
                    <Item  datos={data} /></div>   
            )
        })        
    )
}

export default ItemList;