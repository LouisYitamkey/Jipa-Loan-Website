import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Form from './Form';



export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className=''>
      <Button className='font-semibold text-white hover:bg-[#495dcd] bg-[#080357] px-4 py-2' variant="contained" onClick={handleClickOpen}>
        Contact Sales
      </Button>
      <Dialog
       
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <p className=' md:pl-5   md:pt-5'>  Please fill out this form.</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Form  />
          </DialogContentText>
        </DialogContent>
        <DialogActions className='mr-2'>
            <div className=' '>
            <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        

            </div>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}
