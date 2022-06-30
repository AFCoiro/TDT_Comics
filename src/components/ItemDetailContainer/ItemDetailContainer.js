import ItemDetail from './ItemDetail/ItemDetail';
import CartContext from '../../context/CartContext';
import db from './../../utils/firebaseConfig';

import {doc, getDoc} from 'firebase/firestore';
import { useEffect , useState ,useContext } from 'react';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = ()=>{
    const { id } = useParams();
    const  [ data , setData] = useState({});
    const {setLoading} = useContext(CartContext);
    
    useEffect( ()=>{ 
        getItems()
        .then( (prod)=>{
            setData(prod)
            setLoading(false)
        })

    },[id])

    const getItems = async ()=>{
        const docRef = doc(db, 'listados', id)
        const docSnapshop = await getDoc(docRef)
        let product = docSnapshop.data();
        product.id = docSnapshop.id
        return product;
    }

    return(
        <>
        <ItemDetail data={data}/>
        </>
    )
}

export default ItemDetailContainer; 
