import './pages.css';
import { useState , useEffect } from 'react'
import ItemList from '../components/ItemListContainer/ItemList/ItemList'
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import {collection, doc, getDocs, query, where} from 'firebase/firestore';
import db from './../utils/firebaseConfig';

const Categories = ()=>{   
    const { category } = useParams();
    const  [data, setData] = useState([]);

    useEffect( () => {
        setData([])
        getProducts()
        .then( (productos) => {
            category ?  getProducts() : setData(productos)
        })
    }, [category])

    const getProducts = async ()=>{
        const prodRef = collection(db,'listados')
        const qResult = query(prodRef, where('categoria', '==', category))
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
        <div><img className='CarouselClass2' src="../ban/B2.jpg" alt='banner ofertas'/></div>
        <h2 className='h2Cat'>{category}</h2>
        <Grid   
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >   
                 

            <ItemList listaProd={data} />

        </Grid>
        </>                 
        );
    }
        
export default Categories;

