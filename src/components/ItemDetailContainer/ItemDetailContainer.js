//importa de component
import ItemDetail from './ItemDetail/ItemDetail';
import CartContext from '../../context/CartContext';
import db from './../../utils/firebaseConfig';
//importa de firestore
import {doc, getDoc} from 'firebase/firestore';
//importa de react/react-router-dom
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

    },[id])// eslint-disable-line react-hooks/exhaustive-deps
    //Busqué por todos lados el motivo por el cual me tirara este warning: React Hook useEffect has missing dependencies: 'getItems' and 'setLoading'. Either include them or remove the dependency array. Por lo que llegue a entender, despues de mucha prueba y error, es que al parecer no es un error de JavaScript/React, sino una advertencia de ESLint (eslint-plugin-react-hooks). Por eso, es que puse el eslint-diable-line.

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
