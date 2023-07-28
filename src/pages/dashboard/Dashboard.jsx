import React from 'react';
import './Dashboard.css';
import Navbar2 from '../navbar2/Navbar2';
import Login from '../login/Login';
import Dsa from '../dsa/Dsa.jsx';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
  return (
    <div>
      <Navbar2/>
      <div className="main_content">
       <Box sx={{display: 'flex','& > :not(style)': {m: 1,width: 275,height: 150,},}}>
      {/* <Paper variant="outlined" /> */}
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'gray', borderRadius:5}} >Hello</Paper>
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'gray', borderRadius:5}} >Hello</Paper>
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'gray', borderRadius:5}} >Hello</Paper>
      <Paper variant="outlined" square elevation={20} sx={{backgroundColor:'gray', borderRadius:5}} >Hello</Paper>
      
    </Box>
    

      </div>
    </div>
  )
}

export default Dashboard