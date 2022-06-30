import {collection, getDocs, query, where} from 'firebase/firestore';
import db from './../../utils/firebaseConfig';
import { useState , useEffect } from 'react'


const Brands = ()=>{


    const  [data, setData] = useState([]);

    useEffect( () => {
        setData([])
        getProducts()
        .then( (productos) => {
             getProducts() ; setData(productos);
        })
    }, [])
    const getProducts = async (comics)=>{
        const prodRef = collection(db,'listados')
        const qResult = query(prodRef, where('nombre' , '==', comics))
        const listadoSnapshot = await getDocs(qResult);
        const listaProd = listadoSnapshot.docs.map((doc)=>{
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        return setData(listaProd);
    }

    return(
        <>
            {data.map=(item)=>{
                return(
                    <div key={item.id}>
                    <h2>{item.nombre}</h2>
                </div>
                )
            }}

        </>
    )
}
export default Brands;