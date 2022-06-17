import { useState , useEffect } from 'react'
import './ItemListContainer.css'

import ItemList from './ItemList/ItemList'
import Grid from '@mui/material/Grid';

import { collection, getDocs } from "firebase/firestore";
import db from "./../../utils/firebaseConfig";

const ItemListContainer = ({titleCont})=>{   
    const  [list, setList] = useState([])
    

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
            return product;
        })
        return (productList);
    }

    return(
        <>
        <h2>{titleCont}</h2>
        <Grid   
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >   
                 

            <ItemList listaProd={list} />

        </Grid>
        </>                 
        );
    }
        
export default ItemListContainer;

