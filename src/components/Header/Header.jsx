import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useCart} from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Header = ()=> {

    const {cart} = useCart()
    let cartSize = (cart && cart.cart.length) || 0;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{color:'#2874f0'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,color:'white'}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1,color:'white' }}>
            <Link to="/home" style={{color:'white'}}>Flipkart</Link> 
          </Typography>
          <IconButton sx={{ color:'white',position:'relative',marginRight:"1rem"}} >
            <Link to="/cart" style={{color:'white'}}>   <ShoppingCartIcon sx={{fontSize:"1.8rem"}}/></Link>
            {cartSize>0 &&<Box sx={{position:'absolute',color:'black',zIndex:6000,top:"-5px",fontSize:"1.1rem",border:"1px solid black",borderRadius:"50%",background:"hotpink", fontWeight:"600",right:"-2px",width:"24px"}} >{cartSize}</Box>}
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header