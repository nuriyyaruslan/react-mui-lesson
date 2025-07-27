import './Users.css';
import { Box, Container, Typography, List, ListItem,Breadcrumbs } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {

    const params = useParams();
    console.log('ID = ' + params.id);

    const [ userData, setUserData ] = useState();
    const [ errorState, setErrorState] = useState();

    // localStorage.setItem('username',userData?.name);
       sessionStorage.setItem('username',userData?.name);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
            response => {
                // console.log(response.data);
                setUserData(response.data);
            }
        ).catch(error => {
            // console.log(error.message);
            setErrorState(error.message);
        })
    },[params.id])


    console.log(userData?.address?.city);

    return (
        <Box sx={{ minHeight: '80vh', paddingTop: '32px', paddingBottom: '32px' }}>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '32px' }}>
                    <Link underline="hover" color="inherit" to={`/`}>Home</Link>
                    <Link underline="hover" color="inherit" to={`/users`}>Users</Link>
                    <Typography sx={{ color: 'text.primary' }}>{userData?.name}</Typography>
                </Breadcrumbs>
                <Box sx={{ padding: '16px', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
                    <Typography variant='h6' component="h6">Name: {userData?.name}</Typography>
                    <Typography variant='p' component="p">Username: {userData?.username}</Typography>
                    <Typography variant='p' component="p">Email: {userData?.email}</Typography>
                    <Typography variant='p' component="p">Adress:</Typography>
                    <List sx={{ backgroundColor: '#f5f5f5', paddingTop: '12px', borderRadius: '12px', padding: '16px' }}>
                        <ListItem>
                            <Typography variant="p" component="p">
                                street: {userData?.address?.street}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="p" component="p">
                                suite: {userData?.address?.suite}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="p" component="p">
                                city: {userData?.address?.city}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="p" component="p">
                                zipcode: {userData?.address?.zipcode}
                            </Typography>
                        </ListItem>
                    </List>
                    <Typography variant='p' component="p">telefon nomresi:{userData?.phone}</Typography>
                    <Typography variant='p' component="p">website: {userData?.website}</Typography>
                    <Typography variant='p' component="p">company:</Typography>
                    <List sx={{ backgroundColor: '#f5f5f5', paddingTop: '12px', borderRadius: '12px', padding: '16px' }}>
                        <ListItem>
                            <Typography variant="p" component="p">
                                name: {userData?.company?.name}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="p" component="p">
                                catchPhrase: {userData?.company?.catchPhrase}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="p" component="p">
                                bs: {userData?.company?.bs}
                            </Typography>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Box>
    );
}

export default User;