
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const CartModal = ({handleClose, open, children}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <DialogTitle>Orden de compra:</DialogTitle>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default CartModal;