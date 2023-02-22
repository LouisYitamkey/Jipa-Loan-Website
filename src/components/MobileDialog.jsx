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
  const [formData, setFormData] = React.useState({}); // add a state variable to store the form data
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = () => {
    // send the form data to the server using a fetch or axios request
    console.log(formData); // log the form data to the console for testing
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className=''>
      <Button className='bg-white border-2 shadow-2xl border-[#080357] hover:border-white  hover:bg-[#080357] hover:text-white text-[#080357]   font-semibold px-10 mt-10 md:mt-16 py-3 rounded-full' variant="outlined" onClick={handleClickOpen}>
        Get Started
      </Button>
      <Dialog
       
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <p className=' md:pl-5 md:pt-4'>  Please fill out this form.</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Form onChange={handleFormChange} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <div className=' md:pb-5'>
            <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button className='bg-blue-400 hover:bg-blue-300 md:ml-4 md:mr-14 text-white' onClick={handleFormSubmit} autoFocus> {/* modify the Send button to call the handleFormSubmit function */}
            Send 
          </Button>

            </div>
      
        </DialogActions>
      </Dialog>
    </div>
  );
}
