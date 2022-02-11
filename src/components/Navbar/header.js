import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function  Navbar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{
        backgroundColor:'#261f18',
        height:'100px',
    }} position="static">
        <Toolbar>
       
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Typography  style={{
              marginTop:"30px",
             
          }}>
          <Button color='inherit'>HOME</Button>
          <Button style={{
              marginLeft:"25px",
             
          }} color='inherit'>PROJECTS</Button>
          <Button style={{
              marginLeft:"25px",
             
          }} color='inherit'>ABOUT US</Button>
          <Button style={{
              marginLeft:"25px",
             
          }} color='inherit'>CONTRACT</Button>
          <Button style={{
              marginLeft:"25px",
             
          }} color='inherit'>SERVICES</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}