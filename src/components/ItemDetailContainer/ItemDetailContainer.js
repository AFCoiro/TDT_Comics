import { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import listados from '../../utils/DataMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ()=>{
    const { id } = useParams();
    const  [ data , setData] = useState({});

    useEffect( ()=>{
        setData(listados.find( (data)=>{
            // eslint-disable-next-line
            return data.id == id}))
    },[id])



    return(
        <ItemDetail data={data}/>
        
    )
}

export default ItemDetailContainer; 
