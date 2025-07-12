import './Header.css';
import {Box,Container,Grid,Link,List,ListItem} from '@mui/material';


const Header = () => {
    return (
        <Box component="header" sx={{ background: '#000', padding: '24px' }}>
            <Container sx={{ color: '#fff' }}>
                <Grid container spacing={2}>
                    <Grid size={4} sx={{ paddingTop:'12px' }}>
                        <Link href="/" sx={{ color:'#fff',fontWeight:'bold',textDecoration:'none',fontSize:'24px'}}>LOGO</Link>
                    </Grid>
                    <Grid size={8}>
                        <List sx={{ display:'flex',alignItems:'center',justifyContent:'flex-end' }}>
                            <ListItem sx={{ justifyContent:'flex-end' }}>
                                <Link href="/" sx={{ color:'#fff',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>Home</Link>
                            </ListItem>
                            <ListItem sx={{ justifyContent:'flex-end' }}>
                                <Link href="/about" sx={{ color:'#fff',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>About</Link>
                            </ListItem>
                            <ListItem sx={{ justifyContent:'flex-end' }}>
                                <Link href="/users" sx={{ color:'#fff',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>Users</Link>
                            </ListItem>
                            <ListItem sx={{ justifyContent:'flex-end' }}>
                                <Link href="/comments" sx={{ color:'#fff',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>Comments</Link>
                            </ListItem>
                            <ListItem sx={{ justifyContent:'flex-end' }}>
                                <Link href="/contact" sx={{ color:'#fff',fontWeight:'500',textDecoration:'none',fontSize:'18px' }}>Contact</Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Header;