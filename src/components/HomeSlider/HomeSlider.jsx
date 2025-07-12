import React from "react";
import Slider from "react-slick";
import { Box } from '@mui/material';
import './HomeSlider.css';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Box sx={{ overflow: 'hidden', paddingBottom: '32px' }}>
            <Slider {...settings}>
                <Box>
                    <Box sx={{ overflow: 'hidden', height: '400px' }}>
                        <Box
                            component="img"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            alt="The house from the offer."
                            src="https://images.unsplash.com/photo-1639050707569-bcb510493714?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ overflow: 'hidden', height: '400px' }}>
                        <Box
                            component="img"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            alt="The house from the offer."
                            src="https://images.unsplash.com/photo-1752254091842-3f26af77d5f2?q=80&w=1671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ overflow: 'hidden', height: '400px' }}>
                        <Box
                            component="img"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            alt="The house from the offer."
                            src="https://images.unsplash.com/photo-1648020265363-f7c106bbedc7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Box>
                </Box>
            </Slider>
        </Box>

    );
}

export default HomeSlider;