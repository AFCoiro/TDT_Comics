import { createContext , useState } from "react"

const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cartListItem, setCartListItem] = useState([]);

    const addCart = (prod)=>{
        let isInCart = cartListItem.find(cartItem => cartItem.id === prod.id)
        if(!isInCart){
            console.log('se agego al carrito',prod)
            return setCartListItem(cartListItem => [...cartListItem, prod])
            
        }
        
    }

    const removeCart = (id)=>{
        const arrayRest = cartListItem.filter((prod) => prod.id !== id)
        setCartListItem(arrayRest);
    };

    const clear = (id)=>{
        setCartListItem([]);
        cartListItem(0);
    }

    const data = {
        cartListItem,addCart,removeCart,clear
    }   

        return(
            <CartContext.Provider value={data}>
                {children}
            </CartContext.Provider>
        )
}

export default CartContext;
export {CartProvider};

