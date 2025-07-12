import {useState, useEffect} from 'react';
import {Box,Container,Grid,List,ListItem,Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import './Users.css';
import axios from 'axios';


const Users = () => {

    const [users, setUsers ] = useState([]);
    const [errorMessage,setErrorMessage] = useState(''); 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => {
                // console.log(response.data);
                setUsers(response.data);
            }
        ).catch(error => {
            // console.log(error.message);
            setErrorMessage(error.message);
        })
    },[])

    return ( 
        <Box sx={{minHeight: '80vh',paddingTop:'32px',paddingBottom:'32px'}}>
              <Container>
                <Grid container spacing={2}>
                    {
                        users.length > 0 ? users.map(user => (
                            <Grid size={4} key={user.id}>
                                <Box sx={{ padding:'16px',borderRadius:'8px',backgroundColor:'#f5f5f5' }}>
                                    <Typography variant='h6' component="h6">Name: {user.name}</Typography>
                                    <Typography variant='p' component="p">Username: {user.username}</Typography>
                                    <Typography variant='p' component="p">Email: {user.email}</Typography>
                                    <Link to={`/users/${user.id}`}>See more</Link>
                                </Box>
                            </Grid>
                        )) : 'No data'
                    }
                   
                </Grid>
            </Container>
        </Box>
     );
}
 
export default Users;