//importa componentes propios
import ItemList from '../components/ItemListContainer/ItemList/ItemList'
import db from './../utils/firebaseConfig';
import Carousel from './../components/Carousel/Carousel';
import CartContext from '../context/CartContext';
//importa externos
import { useState , useEffect ,useContext } from 'react'
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from 'firebase/firestore';

//importa de MUI
import {Grid } from '@mui/material';
import { Container } from '@mui/system';


const Categories = ()=>{   
    
    const { category , subcategory} = useParams();
    const  [data, setData] = useState([]);
    const {setLoading, loading,iMap } = useContext(CartContext);

useEffect( () => {
    console.log('category:', category, 'subcategory:', subcategory)
    setData([])
    if(category) {
        getProducts()
    }
    if(subcategory) {
        getSubProducts()
    }
}, [category, subcategory]) // eslint-disable-line react-hooks/exhaustive-deps
    
//llamado de items filtrados por categorias
    const getProducts = async ()=>{
            console.log('db:', db)
            console.log('buscando:', category)  
        try{
        const prodRef = collection(db,'listados')
        const qResult = query(prodRef, where('categoria' , '==', category))
        const listadoSnapshot = await getDocs(qResult);
        const listaProd = listadoSnapshot.docs.map((doc)=>{
            let product = doc.data();
            product.id = doc.id;
            return product; 
        })
        console.log('listaProd', listaProd)
        setLoading(false);
        return setData(listaProd);     
    }catch(err){
        console.log('error getProducts',err)
        setLoading(false);
    }
    };

//llamado de items filtrados por categorias    
    const getSubProducts = async ()=>{
        try{
        const prodRefSub = collection(db,'listados')
        const qResultSub = query(prodRefSub, where('nombre' , '==', subcategory))
        const listadoSnapshotSub = await getDocs(qResultSub);
        const listaProdSub = listadoSnapshotSub.docs.map((doc)=>{
            let productSub = doc.data();
            productSub.id = doc.id;
            return productSub; 
        })
        setLoading(false);
        return setData(listaProdSub);    
    }catch(err){
        console.log('error getSubProducts',err)
        setLoading(false);
    }
};

//condicional para cambiar banners segun la página donde esté
    let Cont1='/ban/Banner_01.png',Cont2='/ban/Banner_02.png',Cont3='/ban/Banner_03.png';
    let page1='marvel', page2='dc', page3='ivrea';

    if(category === 'marvel') {
        Cont1='../ban/Banner_05.jpg' 
        Cont2='../ban/Banner_09.jpg'
        Cont3='../ban/Banner_08.jpg'
        page1='category/Spiderman'
        page2='category/X-Men'
        page3='Avengers'

    }else if(category === 'dc'){
        Cont1='../ban/Banner_04.jpg'
        Cont2='../ban/Banner_07.jpg' 
        Cont3='../ban/Banner_08.jpg'
        page1='category/Batman'
        page2='category/Flash'
        page3='Justice League'
    }else if(category === 'ivrea') {
        Cont1='../ban/Banner_06.jpg'
        Cont2='../ban/Banner_07.jpg'
        Cont3='../ban/Banner_08.jpg'
        page1='category/Slam Dunk'
        page2='category/Demon Slayer'
        page3='ivrea'
    }
//cambiador de título decategories.js dependiendo si es una category o subcategory
    let title;
    subcategory ?title= subcategory:title= category;

//Return de Category page
    return(
        <>
        <Carousel img1={Cont1} img2={Cont2} img3={Cont3} page1={page1} page2={page2} page3={page3} />
        <h2 className='h2Cat'>{title}</h2>
        
        <Container>
            <Grid   
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >              
        
            {loading ?(
                <>{iMap()}</>
            ):(
                <ItemList listaProd={data} />
            )} 
            </Grid>
        </Container>
        
        </>                 
        );
    }
        
export default Categories;






