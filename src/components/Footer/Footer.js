import React from 'react';
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='Footer'>

        <Grid className='BtnSocial'>
            <a  href="https://facebook.com" target="_blank" rel="noreferrer"><img src="./footer/facebook.png" alt="logo facebook"/></a>
            <a  href="https://instagram.com" target="_blank" rel="noreferrer"><img src="./footer/instagram.png" alt="logo instagram"/></a>
            <a  href="https://twitter.com" target="_blank" rel="noreferrer"><img src="./footer/twitter.png" alt="logo twitter"/></a>
        </Grid>

        <Grid className='footerDatos'>
              <img src="./logomio.png" alt="logo TDT"/>
              <p>@COPYRIGHT LA TIENDA DE DON TINO - 2022. TODOS LOS DERECHOS RESERVADOS.</p>
              <p>CREADO POR AGUSTÍN COIRO</p>
        </Grid>

        <Grid className='BtnSPagos'>
          
          <img src="./footer/PayPal.png" alt="logo PayPal" />
          <img src="./footer/MasterCard.png" alt="logo MasterCard" />
          <img src="./footer/Visa.png" alt="logo Visa" />
        </Grid>
    </Grid>
  )
}

export default Footer