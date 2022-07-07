import { createContext , useState } from "react"
import { Skeleton } from "@mui/material";

const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cartListItem, setCartListItem] = useState(JSON.parse(localStorage.getItem('productos')) || [] );
    const [ total, setTotal] = useState(0); 
    const [ cantTot, setCantTot] = useState(0); 
    const [loading, setLoading] = useState(true);

//Hook predeterminado del MUI para el Alert
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const handleClick = (newState) => {
        setState({ open: true, ...newState });
    };
//skeleton para simular la forma del item(hice el array de 4 para poder repetirlo y que se vea la parte superior solamente en la carga del listado.)
    const iMap =()=>{
       let i = [0,1,2,3];
        return(
            <>
                {i.map((index)=>{
                return(
                <Skeleton
                key={index}
                variant="rectangular"
                animation="wave"
                width='23%'
                sx={{marginTop:'5%'}}
                height={350}/>)})}
            </>
            )    
    }
//agrega el producto al cart y a localStorage. suma el precio al total de la compra
    const addCart = (prod)=>{
        let isInCart = cartListItem.find(cartItem => cartItem.id === prod.id)
        if(!isInCart){
            setTotal(total + prod.precio * prod.count);
            setCantTot(cantTot +  prod.count )
            localStorage.setItem('productos',JSON.stringify([...cartListItem, prod]))
            return setCartListItem(cartListItem => [...cartListItem, prod])
        }   
    }
//resta el producto al cart y a localStorage. descuenta el precio al total de la compra
    const removeCart = (id, precio, count)=>{
        setCartListItem (cartListItem.filter((prod) => prod.id !== id))
        localStorage.setItem('productos', JSON.stringify(cartListItem.filter((prod) => prod.id !== id)))
        setTotal(total - precio * count)
    };
//remueve el total de productos del cart y de localStorage
    const clear = ()=>{
        setCartListItem(localStorage.clear('productos') || [] );
        setCartListItem([]);
    }

    const data = {
        cartListItem,
        addCart,
        removeCart,
        clear,
        total,
        cantTot,
        loading,
         setLoading,
         iMap,
         state,
         handleClick,
         setState         
    }   

        return(
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        )
}

export default CartContext;
export {CartProvider};

