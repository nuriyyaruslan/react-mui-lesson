import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';
import './UsersSlider.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersSlider = () => {

    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

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
    }, [])

    console.log(users)

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <Box>
            <Typography variant='h4' component='h4' sx={{ marginBottom: '12px' }}>Users</Typography>
            <Box sx={{ overflow: 'hidden', paddingBottom: '32px' }}>
                <Slider {...settings}>
                    {
                        users.map(user => (
                            user.id < 7 ?
                                <Box key={user.id}>
                                    <Box sx={{ padding: '16px', borderRadius: '8px', backgroundColor: '#95fafdff', margin: '10px' }}>
                                        <Typography variant='h6' component="h6">Name: {user.name}</Typography>
                                        <Typography variant='p' component="p">Username: {user.username}</Typography>
                                        <Typography variant='p' component="p">Email: {user.email}</Typography>
                                        <Link to={`/users/${user.id}`}>See more</Link>
                                    </Box>
                                </Box>
                                : ''
                        ))
                    }
                </Slider>
            </Box>
            <Box sx={{ textAlign:'center'}}>
                <Link to={`/users`}>See more</Link>
            </Box>
        </Box>
    );
}

export default UsersSlider;