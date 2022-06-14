import './pages.css';

import * as React from 'react';
import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';

import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

import { Link } from 'react-router-dom';
import { Grid } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Cart = ()=>{ 
        const options = ['Buenos Aires','Ciudad Autónoma de Bs.As.','Catamarca','Chaco','Chubut','Córdoba','Corrientes','Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucumán'];

        const [value, setValue] = React.useState(options[0]);
        const [inputValue, setInputValue] = useState('');
        const {cartListItem, removeCart, total} = useContext(CartContext);

    return(
        <div className="cartCont">
            <h1>CARRITO DE COMPRAS</h1>
            {(cartListItem.length !== 0) ? 
            <Grid container>
                <Grid item md='8'>
                    <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">PRODUCTO</TableCell>
                                    <TableCell align="center">CANTIDAD</TableCell>
                                    <TableCell align="center">PRECIO</TableCell>
                                    <TableCell align="center">QUITAR</TableCell>
                                </TableRow>
                            </TableHead>
                            {cartListItem.map((data) =>{ 
                const {id,titulo,precio,imagen,count} = data;
                return( 
                            <TableBody>
                                <TableRow>
                                    <TableCell 
                                        key={id}
                                        align="center"
                                        component="th" 
                                        scope="row">
                                        <p>{titulo}</p>
                                        <img className='imgCart' src={`/prod/${imagen}`} alt={`${titulo}`} />
                                    </TableCell>
                                    <TableCell align="center">{count}</TableCell>
                                    <TableCell align="center">${precio}</TableCell>
                                    <TableCell align="center"><Button
                                     onClick={() => removeCart(id)} 
                                    ><DeleteIcon/></Button></TableCell>
                                </TableRow>
                            </TableBody>
                )})}
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md='4'>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <h2>Total Del Carrito:</h2>
                                <p>Introducí tu dirección para ver las opciones de envío.</p>
                            </TableHead>
                            <TableBody>
                                <div className='checkField'>
                                    <div className="checkFieldSons">
                                        <Autocomplete
                                            value={value}
                                            onChange={(event, newValue) => {
                                            setValue(newValue);
                                            }}
                                            inputValue={inputValue}
                                            onInputChange={(event, newInputValue) => {
                                            setInputValue(newInputValue);
                                            }}
                                            id="controllable-states-demo"
                                            options={options}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Provincia" />}
                                        />
                                    </div>
                                    <div className="checkFieldSons">
                                        <TextField id="standard-basic" label="Código Postal" variant="standard" type='number' required/>
                                    </div>
                                    <div className="checkFieldSons">
                                        <div className="check" >
                                            <div item >
                                                TOTAL  
                                            </div>
                                                    <div item >
                                                    :  ${total}
                                                </div>
                                        </div>
                                    </div>
                                    <div >
                                        <Button
                                            variant="contained" 
                                            color="error"
                                            className='btnDe'
                                            >
                                            FINALIZAR COMPRA
                                        </Button>
                                    </div>
                                </div>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
            :
            <>
            <h2 className='carritoVacio'>¡Tu <ShoppingCartSharpIcon/> está vacío...Podés empezar a comprar en el siguiente <Link to='/'>acá!</Link></h2>
            </>
            }
        </div>
    )
}
export default Cart;