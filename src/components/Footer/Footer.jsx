import { Link } from 'react-router-dom';
import './Footer.css';
import { Box, Container } from '@mui/material';
 
const Footer = () => {
    return ( 
        <Box component="footer" sx={{ background: '#000', padding: '24px' }}>
            <Container sx={{ color: '#fff' }}>
               <Box sx={{ textAlign:'center' }}>
                    All rights reserved by 
                    microcode.az
               </Box>
            </Container>
        </Box>
     );
}
 
export default Footer;