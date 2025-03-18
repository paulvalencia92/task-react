import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const ConfirmDialog = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>¿Estás seguro?</DialogTitle>
            <DialogContent>
                <Typography>Esta acción no se puede deshacer.</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">Cancelar</Button>
                <Button onClick={onConfirm} color="error" variant="contained">Eliminar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
