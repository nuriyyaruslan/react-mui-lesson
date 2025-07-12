import './About.css';
import { Box, Container,Typography } from '@mui/material';
// import unsplash from '../../assets/images/unsplash.avif';
import { AboutData } from '../../data/data';
import AboutModal from '../../components/AboutModal/AboutModal';

const About = () => {
    return (
        <Box sx={{ padding: '40px 0' }}>
            <Container sx={{ color: '#000' }}>
                <Typography variant="h2" component="h2">{AboutData.title}</Typography>
                <Box sx={{ overflow: 'hidden', height: '320px', marginBottom: '16px' }}>
                    <Box
                        component="img"
                        sx={{ width:'100%',height:'100%',objectFit:'cover' }}
                        alt="The house from the offer."
                        src={AboutData.url}
                    />
                </Box>
                <Box>
                    {AboutData.description}
                </Box>
                <AboutModal AboutData = {AboutData}  />
            </Container>
        </Box>
    );
}

export default About;