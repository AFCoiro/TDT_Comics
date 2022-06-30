import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'
import db from "./../../utils/firebaseConfig";
import Pagination from '../Pagination/Pagination';
import CartContext from '../../context/CartContext';

import { useState , useEffect,useContext } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { Container, Skeleton } from '@mui/material';

import Grid from '@mui/material/Grid';

const ItemListContainer = ({titleCont})=>{   
    const  [list, setList] = useState([]);
    const  [currentPage, setCurrentPage] = useState(1);
    const  [listPerPage] = useState(8);
    const {setLoading, loading,i } = useContext(CartContext);

    useEffect(()=>{
        setList([])
        getItems()
        .then( (listados)=>{
            setList(listados)
        })
        .catch((err)=>{
            console.log('no anda', err)
        })

    }, [])

    const getItems = async () =>{
        
        const listadoSnapshot = await getDocs(collection(db, "listados"));
        const productList = listadoSnapshot.docs.map( (doc)=>{
        let product = doc.data();
            product.id = doc.id;
            setLoading(false);
        return (product);
        })
        
        return (productList)
    }

    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = list.slice(indexOfFirstList, indexOfLastList);

    const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    return(
        <>
         <Container>
            <h2>{titleCont}</h2>
            <Grid   
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center" 
                >  
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
                    <ItemList listaProd={currentList} />
                )} 
                <Pagination 
                listPerPage={listPerPage} 
                totalList={list.length}
                paginate={paginate} />
            </Grid>
        </Container>
        </>                 
        );
    }
        
export default ItemListContainer;

