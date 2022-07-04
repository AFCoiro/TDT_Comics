import CartContext from '../../context/CartContext';

//importa de React
import * as React from 'react';
import { useContext } from 'react';
//importa de MUI
import {  Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert=({children}) =>{
  const {state,setState} = useContext(CartContext);

  const { vertical, horizontal, open } = state;

  const SnackAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = () => {
    setState({ ...state, open: false });
};

//boton con: posición del alert,
  const buttons = (
      <div>{children}</div>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <SnackAlert
          severity="success"
          sx={{ width: '100%' }}>
          ¡Se Agregó tu producto al Carrito!
        </SnackAlert>
      </Snackbar>
    </div>
  );
}
export default Alert;


