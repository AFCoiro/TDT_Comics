import './pages.css';
import ItemList from '../components/ItemListContainer/ItemList/ItemList'
import db from './../utils/firebaseConfig';
import Carousel from './../components/Carousel/Carousel';
import CartContext from '../context/CartContext';

import { useState , useEffect ,useContext } from 'react'
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';


import {Grid , Skeleton} from '@mui/material';
import { Container } from '@mui/system';

const Categories = ()=>{   
    
    const { category } = useParams();
    const  [data, setData] = useState([]);
    const {setLoading, loading,i } = useContext(CartContext);
    

    useEffect( () => {
        setData([])
        getProducts()
        .then( (productos) => {
            category ?  getProducts() : setData(productos)
        })
    }, [category])

    const getProducts = async (comics)=>{
        const prodRef = collection(db,'listados')
        const qResult = query(prodRef, where('categoria' , '==', category))
        const listadoSnapshot = await getDocs(qResult);
        const listaProd = listadoSnapshot.docs.map((doc)=>{
            let product = doc.data();
            product.id = doc.id;
            setLoading(false);
            return product;
        })
        return setData(listaProd);
    }
    
    let Cont1=0,Cont2=0,Cont3=0;

    if(category === 'dc'){
        Cont1='../ban/B1.jpg'
        Cont2='../ban/B4.jpg'
        Cont3='../ban/B5.jpg'
    }else if(category === 'marvel') {
        Cont1='../ban/B2.jpg'
        Cont2='../ban/B7.jpg'
        Cont3='../ban/B5.jpg'
    }else if(category === 'ivrea') {
        Cont1='../ban/B3.jpg'
        Cont2='../ban/B4.jpg'
        Cont3='../ban/B5.jpg'
    }
    
    return(
        <>
        <Carousel img1={Cont1} img2={Cont2} img3={Cont3}/>
        <h2 className='h2Cat'>{category}</h2>
        
        <Container>
            <Grid   
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >              
        
            {loading ?(
                i.map(()=>{
                return(
                <Skeleton
                key={i}
                variant="rectangular"
                animation="wave"
                width='23%'
                sx={{marginTop:'5%'}}
                height={350}/>)})
            ):(
                <ItemList listaProd={data} />
            )} 
            </Grid>
        </Container>
        
        </>                 
        );
    }
        
export default Categories;



