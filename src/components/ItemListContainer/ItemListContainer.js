import { useState , useEffect } from 'react'
import './ItemListContainer.css'
import listados from '../../utils/DataMock'
import ItemList from './ItemList/ItemList'
import Grid from '@mui/material/Grid';

const ItemListContainer = ({titleCont})=>{   
    const  [list, setList] = useState([])
    
    const getItems = ()=>{
        return new Promise( (resolve)=>{
            setTimeout(() => {
                resolve(listados)
            }, 1000);
            
        })
    }
    useEffect(()=>{
        getItems()
        .then( (resp)=>{
            setList(resp)
        })
        .catch((err)=>{
            console.log('no anda', err)
        })
    
    }, [])
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

