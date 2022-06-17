import { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import {doc, getDoc} from 'firebase/firestore';
import db from './../../utils/firebaseConfig';

const ItemDetailContainer = ()=>{
    const { id } = useParams();
    const  [ data , setData] = useState({});

    useEffect( ()=>{
        getItems()
        .then( (prod)=>{
            setData(prod)
        })

    },[id])

    const getItems = async ()=>{
        const docRef = doc(db, 'listados', id)
        const docSnapshop = await getDoc(docRef)
        let product = docSnapshop.data();
        product.id = docSnapshop.id
        return product;
    }

    // setData(prod.find( (data)=>{
    //     // eslint-disable-next-line
    //     return data.id == id}))

    return(
        <ItemDetail data={data}/>
        
    )
}

export default ItemDetailContainer; 
