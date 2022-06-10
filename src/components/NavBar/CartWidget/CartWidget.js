import './../NavBar.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useState , useContext } from 'react';
import Menu from '@mui/material/Menu';
import {Link} from 'react-router-dom';
import CartContext from '../../../context/CartContext';
import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const CartWidgetNav = () => {
const [windowOpen, setwindowOpen] = useState(null);
const open = Boolean(windowOpen);
const {cartListItem,removeCart,clear} = useContext(CartContext);

const handleClick = (e)=>{setwindowOpen(e.currentTarget)};
const handleClose = () =>{setwindowOpen(null)};

return(
    <div className='cart-container-icon'>
        <ShoppingCartSharpIcon 
         className="MyCart"
         aria-controls={open ? 'basic-menu': undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick}
         />
            <Menu
             className='MenuCarrito'
             id='basic-menu'
             anchorEl={windowOpen}
             open={open}
             onClose={handleClose}
             MenuListProps={{'aria-labelledby': 'basic-button',}}
            >
            {cartListItem.length === 0 && (
                        <>
                            <p className='vacio'>¡Ups!Tu carrito está vacío :( </p>
                        </>
                    )}
                    {<>
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">PRODUCTO</TableCell>
                            <TableCell align="right">CANTIDAD</TableCell>
                            <TableCell align="right">PRECIO</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {cartListItem.map((item) => (
                            <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell 
                                    component="th" 
                                    scope="row">
                                    <img className='imgCart' src={`prod/${item.imagen}`} alt={`${item.titulo}`} />
                                </TableCell>
                                <TableCell align="right">{item.titulo}</TableCell>
                                <TableCell align="right">{item.count}</TableCell>
                                <TableCell align="right">{item.precio}</TableCell>
                                <TableCell align="right"><Button onClick={() => removeCart(item.id)}><DeleteIcon/></Button></TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div container> 
                    <Button
                        align="center"
                        variant="contained" 
                        color="error"
                        className='btnDetalle'>
                        <Link to='/cart' 
                            className='btnDetalle'
                            >comprar
                        </Link>
                    </Button>
                    <Button
                        align="center"
                        variant="contained" 
                        color="error"
                        className='btnDetalle'
                        onClick={clear}
                        >
                        borrar todo
                    </Button>
                </div>
                </>}
            </Menu>
    </div>
)

}
export default CartWidgetNav;








                    



