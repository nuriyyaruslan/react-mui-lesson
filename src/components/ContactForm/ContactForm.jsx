import './ContactForm.css';
import { Box, Typography, TextField,Button } from '@mui/material';

const ContactForm = () => {
     return (
          <Box>
               <Typography variant="h4" component="h4">Contact Us</Typography>
               <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}
                    noValidate
                    autoComplete="off"
               >
                    <div>
                         <TextField
                              required
                              id="contact-name"
                              label="Ad"
                              defaultValue=""
                              variant="standard"
                              error
                         />
                         <TextField
                              required
                              id="contact-surname"
                              label="Soyad"
                              defaultValue=""
                              variant="standard"
                         />
                         <TextField
                              required
                              id="contact-email"
                              label="Email"
                              type="email"
                              defaultValue=""
                              variant="standard"
                         />
                         <TextField
                              required
                              id="contact-phone"
                              label="Telefon nömrəsi"
                              type="number"
                              defaultValue=""
                              variant="standard"
                              slotProps={{
                                   min: 0, 
                                   inputMode: 'numeric', 
                                   style: { MozAppearance: 'textfield' } 
                              }}
                              sx={{
                              '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                   WebkitAppearance: 'none',
                                   margin: 0,
                              },
                              }}
                         />
                         <TextField
                              required
                              id="contact-message"
                              label="Mesaj"
                              type="text"
                              defaultValue=""
                              variant="standard"
                              maxRows={4}
                         />
                         <Button variant="contained" type="submit" sx={{ marginTop: '32px'}}>Göndər</Button>
                    </div>
               </Box>
          </Box>
     );
}

export default ContactForm;