import CartContext from '../../../context/CartContext';
//importa de react/react-router-dom
import * as React from 'react';
import { useState , useContext } from 'react';
import {Link} from 'react-router-dom';
//importa de mui
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
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
    <div>
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
            {(cartListItem.length === 0) ? 
                        <div className='menuVacio'>
                            <p>¡Ups!Tu carrito está vacío :( </p>
                            <Button ><Link to={'/'}  className='seguirCompra'>Seguir Comprando </Link></Button>
                        </div>
                     :
                    <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                            <TableRow className='headerWidget'>
                                <TableCell></TableCell>
                                <TableCell align="right">PRODUCTO</TableCell>
                                <TableCell align="right">CANTIDAD</TableCell>
                                <TableCell align="right">PRECIO</TableCell>
                                <TableCell align="right"> BORRAR</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {cartListItem.map((item) => {
                                const {id,titulo,precio,imagen,count} = item;
                                return(
                                <TableRow
                                key={id}

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell 
                                    className='itemsWidget'
                                        component="th" 
                                        scope="row">
                                        <img className='imgCart' src={imagen} alt={`${titulo}`} />
                                    </TableCell>
                                    <TableCell align="right">{titulo}</TableCell>
                                    <TableCell align="right">{count}</TableCell>
                                    <TableCell align="right">${precio*count}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            onClick={() => removeCart(id)}>
                                            <DeleteIcon/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )})}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div container className='cajaBtn'> 
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
                            className='btnDetalle '
                            onClick={clear}
                            >
                            borrar todo
                        </Button>
                    </div>
                </div>}
            </Menu>
    </div>
)

}
export default CartWidgetNav;








                    



