import ContactForm from '../../components/ContactForm/ContactForm';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import { Box, Container,Typography } from '@mui/material';
import './Home.css';
import UsersSlider from '../../components/UsersSlider/UsersSlider';
import UsersChart from '../../components/UsersChart/UsersChart';

const Home = () => {
    return ( 
        <Box sx={{minHeight: '80vh'}}>
            <HomeSlider/>
            <Container>
                <Box sx={{marginTop:'40px', marginBottom: '24px'}}>
                    <Typography variant='p' component='p'>
                        Black is a powerful color with a rich and complex history, often associated with both negative and positive connotations. From its earliest use in cave paintings and ancient civilizations to its modern-day association with elegance and mourning, black's symbolism has evolved across cultures and time periods. 
                        Ancient Times: 
                        Black was one of the first colors used in art, appearing in prehistoric cave paintings.
                        In ancient Egypt, black symbolized fertility due to the Nile's fertile black silt and was associated with the god Osiris.
                        Ancient Greeks used black in pottery, creating intricate designs with black figures on clay vases.
                        Symbolic Meanings:
                        Mourning and Death:
                        Black is widely associated with mourning, death, and loss in many cultures, particularly in Europe and North America. 
                        Power and Authority:
                        In some contexts, black has signified power, authority, and formality, as seen in the clothing of royalty, clergy, and judges in the past. 
                    </Typography>
                </Box>
                 <UsersSlider/>
                 <Box>
                    <UsersChart/>
                 </Box>
                <Box sx={{marginTop:'40px', marginBottom: '60px'}}>
                    <ContactForm/>
                </Box>
            </Container>
        </Box>
     );
}
 
export default Home;