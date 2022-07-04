import './pages.css';
import db from './../utils/firebaseConfig';
import CartModal from './cartModal/CartModal';
import CartContext from '../context/CartContext';

import * as React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {addDoc, collection} from 'firebase/firestore';

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
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import EditIcon from '@mui/icons-material/Edit';

const Cart = ()=>{ 
        const options = ['Buenos Aires','Ciudad Autónoma de Bs.As.','Catamarca','Chaco','Chubut','Córdoba','Corrientes','Entre Ríos','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquén','Río Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucumán'];

        const [value, setValue] = React.useState(options[0]);
        const [inputValue, setInputValue] = useState('');
        const {cartListItem, removeCart,clear, total} = useContext(CartContext);
        const [showModal, setShowModal] = useState(false);
        const [compra, setCompra] = useState();
        const [buyerV, setBuyerV] = useState(
            {name:'',
            phone:'',
            mail:''}
        );

        const handleSubmit=(e)=>{
            e.preventDefault();
            seOC({...oc, buyer : buyerV})
            pushFB({...oc, buyer : buyerV})
            
        }

        const handleChange=(e)=>{
            setBuyerV({...buyerV, [e.target.name] : e.target.value})

        }

        let date = new Date();
        let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
        
        const [oc, seOC] = useState({
            buyer: {},
            items: cartListItem.map( item => {
                return {
                    id: item.id,
                    title: item.titulo,
                    price: item.precio,
                }}),
            total : total,
            date: output
        })

        const [enableButton, setEnableButton] = useState(false);
        const emailMatch = (e)=>{
           if( e.target.value === buyerV.mail){
             setEnableButton(true)
            
            }
        }


        const pushFB = async (newOC)=>{
            const ordenesFB = collection(db,'ordenes')
            const ocDoc = await addDoc(ordenesFB, newOC)
            setCompra( ocDoc.id )
        }

    return(
        <div className="cartCont">
            <h1>CARRITO DE COMPRAS</h1>
            {(cartListItem.length !== 0) ? 
            <Grid container>
                <Grid item md={8}>
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
                            <TableBody key={id}>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        component="th" 
                                        scope="row">
                                        <p>{titulo}</p>
                                        <img 
                                         className='imgCart'
                                         src={imagen} 
                                         alt={`${titulo}`} />
                                    </TableCell>
                                    <TableCell align="center"> 
                                        {count}
                                        <Link to={`/product/${id}`}
                                         onClick={() => removeCart(id, precio,count)}
                                         ><EditIcon /> </Link> 
                                    </TableCell>
                                    <TableCell align="center">
                                        ${precio*count}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                        color="error"
                                        onClick={() => removeCart(id, precio,count)}>
                                            <DeleteIcon/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                )})}
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item md={4} component={Paper}>
                                    <div>
                                        <h2>Total Del Carrito:</h2>
                                        <p>Introducí tu dirección para ver las opciones de envío.</p>
                                    </div>
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
                                                <div item>
                                                :  ${total}
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <Button
                                            variant="contained" 
                                            color="error"
                                            className='btnDe'
                                            onClick={()=>setShowModal(true)}
                                            >
                                            FINALIZAR COMPRA
                                        </Button>
                                    </div>
                                </div>

                </Grid>
                <CartModal 
                    open={showModal}
                    handleClose={()=>setShowModal(false)}>
                        {compra? (
                            <>
                            <h1 className='CompraExitosa'>¡Exitosa!</h1>
                            <p>Tu pedido fue confirmado. Te enviaremos todos los datos a tu email.</p>
                            <p>Orden nº:{compra}</p>
                            <p>Fecha: {output}</p>
                            <Button 
                            variant="contained" 
                            color="error"
                            className='btnDe'
                            onClick={clear}
                            >
                                <Link to={'/'}>aceptar</Link>
                            </Button>
                            </>
                        ):(
                            <form 
                            className="form-contact
                            FormCompra" 
                            onSubmit={handleSubmit}>
                          <TextField 
                              className='FormItem'
                              id="outlined-basic" 
                              type="text"
                              name="name"
                              label="Nombre y Apellido"
                              variant="outlined"
                              value={buyerV.name}
                              onChange={handleChange}
                              required
                              title="El nombre y apellido solo pueden contener letras."
                          />
                          <TextField 
                              className='FormItem'
                              id="outlined-basic"
                              type='number' 
                              name="phone"
                              label="Teléfono" 
                              variant="outlined" 
                              value={buyerV.phone}
                              onChange={handleChange}
                              required
                          />
                          <TextField 
                              className='FormItem'
                              id="outlined-basic" 
                              type="email"
                              name="mail"
                              label="e-mail" 
                              variant="outlined" 
                              value={buyerV.mail}
                              onChange={handleChange}
                              title='El correo tieneque conteneer la siguiente estructura : usuario@ejemplo.com'
                              required
                          />
                          <TextField 
                              className='FormItem'
                              id="outlined-basic" 
                              type="email"
                              name="mailCheck"
                              label="validar e-mail" 
                              variant="outlined"
                              required
                              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                              onChange={emailMatch}
                          />
                          <Button
                          className='btnDetalle FormItem'
                          variant="contained"
                          color="error"
                           type="submit"
                           onSubmit={clear}
                           disabled={!enableButton}>
                           COMPRAR
                           </Button>
                      </form> 
                        )}
 

                </CartModal>
            </Grid>
            :
            <>
            <h2 className='carritoVacio'>
                ¡Tu <ShoppingCartSharpIcon/> 
                está vacío...Podés empezar a comprar 
                <Link to='/'> acá!</Link>
            </h2>
            </>
            }
        </div>
    )
}
export default Cart;