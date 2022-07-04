import { createContext , useState } from "react"
import { Skeleton } from "@mui/material";
const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cartListItem, setCartListItem] = useState(JSON.parse(localStorage.getItem('productos')) || [] );
    const [ total, setTotal] = useState(0); 
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
    

    const addCart = (prod)=>{
        let isInCart = cartListItem.find(cartItem => cartItem.id === prod.id)
        if(!isInCart){
            setTotal(total + prod.precio * prod.count);
            // localStorage.setItem('productos',JSON.stringify([...cartListItem, prod]))
            return setCartListItem(cartListItem => [...cartListItem, prod])
        }   
    }
     

    const removeCart = (id, precio, count)=>{
        const arrayRest = cartListItem.filter((prod) => prod.id !== id)
         setCartListItem(arrayRest);
        // setCartListItem(localStorage.setItem(('productos', (arrayRest)) || []));
            return(setTotal(total - precio * count))
        
    };
 
    const clear = ()=>{
        // setCartListItem(localStorage.removeItem('productos') || [] );
        
        setCartListItem([]);
    }

    const data = {
        cartListItem,
        addCart,
        removeCart,
        clear,
        total,
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

