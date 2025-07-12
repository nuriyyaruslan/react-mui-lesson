import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';
import {Box,Container,Grid,Link,List,ListItem,Typography} from '@mui/material';

const Contact = () => {
    return ( 
        <Box sx={{padding: '24px', minHeight:'80vh' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid size={4}>
                       <List sx={{backgroundColor:'#f5f5f5',paddingTop:'12px',borderRadius:'12px',padding:'16px'}}>
                            <ListItem>
                                <Box>
                                    <Typography variant="p" component="p">
                                        Telefon nömrəsi:
                                    </Typography>
                                    <Link href="tel:+994509823456" sx={{ color:'#000',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>+994509823456</Link>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <Box>
                                    <Typography variant="p" component="p">
                                        Email adresi:
                                    </Typography>
                                    <Link href="mailto:nuriyya@gmail.com" sx={{ color:'#000',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>nuriyya@gmail.com</Link>
                                </Box>
                            </ListItem>
                             <ListItem>
                                <Box>
                                    <Typography variant="p" component="p">
                                        Ofis Adress
                                    </Typography>
                                    <Typography variant="h4" component="h4" sx={{ color:'#000',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>Ataturk Prospekti</Typography>
                                </Box>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid size={8}>
                        <ContactForm/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
     );
}
 
export default Contact;
