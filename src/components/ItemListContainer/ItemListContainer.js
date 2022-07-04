import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'
import db from "./../../utils/firebaseConfig";
import Pagination from '../Pagination/Pagination';
import CartContext from '../../context/CartContext';
import { useState , useEffect,useContext } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { Container } from '@mui/material';

import Grid from '@mui/material/Grid';

const ItemListContainer = ({titleCont})=>{   
    const  [list, setList] = useState([]);
    const  [currentPage, setCurrentPage] = useState(1);
    const  [listPerPage] = useState(8);
    const {setLoading, loading,iMap} = useContext(CartContext);

    useEffect(()=>{
        setList([])
        getItems()
        .then( (listados)=>{
            setList(listados)
        })
        .catch((err)=>{
            console.log('no anda', err)
        })

    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    //Busqué por todos lados el motivo por el cual me tirara este warning: React Hook useEffect has missing dependencies: 'getProducts' and 'getSubProducts'. Por lo que llegue a entender, despues de mucha prueba y error, es que al parecer no es un error de JavaScript/React, sino una advertencia de ESLint (eslint-plugin-react-hooks). Por eso, es que puse el eslint-diable-line.

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
                    <>{iMap()}</>
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

