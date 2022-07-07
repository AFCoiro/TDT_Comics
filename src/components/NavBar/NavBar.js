//impota de component
import CartWidgetNav from './CartWidget/CartWidget';
import CartContext from '../../context/CartContext';
//importa de react/react-router-dom
import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//importa de mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const pages = ['marvel', 'dc comics', 'ivrea'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const {cartListItem,cantTot} = useContext(CartContext);

  return (
    
    <AppBar
     position="fixed" 
     >
      <Container maxWidth="xl" className="MenuApp">
        <Toolbar disableGutters>
            <Link to={`/`}><img src="./logomio.png" alt="logo TDT" className='logoImg'/></Link> 
              
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >      
                
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                />

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
                    <MenuItem key={page} onClick={handleCloseNavMenu} >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
            </Box>
              
              
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='ContPages'>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 1, color: 'white', display: 'block' }}
                  >
                  <Link className='BtnPages' to={`/products/${page}`}>{page}</Link>
                    
                  </Button>
                ))}
            </Box>

            <Box className='boxCart'>
                <CartWidgetNav/>
                {cartListItem.length > 1 &&
                    <p>{cantTot}</p>
                  } 
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

