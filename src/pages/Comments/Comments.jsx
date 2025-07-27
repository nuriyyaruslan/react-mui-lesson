import { Button } from '@mui/material';
import './Comments.css';
import { redirect } from 'react-router-dom';

const Comments = () => {

    // const username = localStorage.getItem('username');
    //    const username = localStorage.removeItem('username');
      const username = sessionStorage.getItem('username');

    //   convert data to string type
    //   JSON.stringify(10)

    return ( 
        <div>
            Comments

            <h2>Username: {username}</h2>

           <Button
            onClick={() => {
                redirect('/users');
            }}
            >
             Logout
            </Button>
        </div>
     );
}
 
export default Comments;