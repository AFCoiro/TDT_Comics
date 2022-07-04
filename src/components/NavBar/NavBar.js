import './NavBar.css';
import CartWidgetNav from './CartWidget/CartWidget';
import CartContext from '../../context/CartContext';

import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const pages = ['marvel', 'dc', 'ivrea'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const {cartListItem} = useContext(CartContext);

  return (
    
    <AppBar
     position="fixed" 
     className="MenuApp"
     sx={{
      bgcolor: 'error.main'
    }}
     >
      <Container maxWidth="xl">
        <Toolbar disableGutters >

        <Link to={`/`}><img src="./logomio.png" alt="logo"/></Link> 
          
           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >      
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: 'white', display: 'block' }}
              >
              <Link className='BtnLinks' to={`/products/${page}`}>{page}</Link>
                
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 ,
               display:'flex',
               flexDirection:'row',
               alignItems:'flex-end',
               marginBottom:'5px'
                }}>
              
            <CartWidgetNav/>
            {cartListItem.length > 0 &&
                <p>{cartListItem.length}</p>
            }
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

