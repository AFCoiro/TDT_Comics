import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert=({children,id,titulo,precio,imagen,count,onAdd,addCart}) =>{

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const SnackAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => {
    setState({ open: true, ...newState });
    
  };
  
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (

      <Button
      
      onClick={() => {
        handleClick({vertical: 'top', horizontal: 'right'});
        addCart({titulo,precio,imagen,count,id});
        onAdd();
        }}

      >{children}
      </Button>

  );

  return (
    <div>
      {buttons}
      <Snackbar
        autoHideDuration={4000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      ><SnackAlert 
      onClose={handleClose}
      severity="success"
      sx={{ width: '100%' }}>
      ¡Se Agregó tu producto al Carrito!
    </SnackAlert></Snackbar>
    </div>
  );
}
export default Alert;