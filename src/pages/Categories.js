import './pages.css';
import { useState , useEffect } from 'react'
import listados from '../utils/DataMock'
import ItemList from '../components/ItemListContainer/ItemList/ItemList'
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';

const Categories = ()=>{   
    const { category } = useParams();
    const  [data, setData] = useState([]);
    
    const getItems = ()=>{
        return new Promise( (resolve)=>{
            setTimeout(() => {
                resolve(listados)
            }, 500);
            
        })
    }
    useEffect(()=>{
        getItems()
        .then( (resp)=>{
            setData([])
            resp.filter( (item)=>{
                // eslint-disable-next-line
                if(item.categoria == category){
                    return setData(data => [...data, item])
                }
            })
        })
        .catch((err)=>{
            console.log('no anda', err)
        })
    
    }, [category])
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

