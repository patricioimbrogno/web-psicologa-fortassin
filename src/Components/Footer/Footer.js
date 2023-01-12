import { Typography, Grid } from '@mui/material';
import React from 'react'
import resumeData from '../../Utils/resumeData';
import '../../Components/Divider/Divider.css'
import './Footer.css'

const Footer = () => {
    return (
      <Grid className="footer">
        <Grid item className="footer_left">
          <Typography> Copyright {new Date().getFullYear()} ©  Lic. {resumeData.name}</Typography>
        </Grid>
      </Grid>
    );
  };
  
  export default Footer;