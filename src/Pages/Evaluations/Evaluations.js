import React from "react";
import "animate.css";
import { Grid, Typography } from "@mui/material";
import Tabs from "../../Components/Tabs/Tabs";
import Separator from "../../Utils/Separator";
import image from "../../Utils/consultorio.png";
import separatorlogo from "../../Utils/seplgo.png";
import "../../App.css";
import "../../Components/Divider/Divider.css";
import "./Evaluations.css";
import Fade from "react-reveal/Fade";
import stars from '../../Utils/1.svg'

export const Evaluations = () => {
  return (
    <Grid
      sx={{ mb: "50px", backgroundColor: "#ffffff" }}
      container
      display="flex"
      flexDirection="row"
      id="evaluaciones"
      justifyContent="center"
      className="shapedividers_com-8730"

    >
      <Grid
        item
        xs={12}
        sm={12}
        container
        justifyContent="center"
        sx={{ mt: "80px" }}
      >
       
        <Fade bottom>
          <Grid display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="h4"
              sx={{
                color: "#737373",
                mt: "50px",
              }}
              className='centro'
            >
              EVALUACIONES
            </Typography>
            <Separator color='#f9ac85'/>
            
          </Grid>
        </Fade>
        <Grid>
        <img width='10%' src={stars} />
        </Grid>
      </Grid>
      <Grid container display="flex" flexDirection="row" className='evaluationsText'>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ mt: "2%", mb: "2%" }}
          container
          justifyContent="center"
        >
          <Fade left>
          <img
            className="evaluationsImage"
            src={image}
          ></img></Fade>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ mt: "2%", mb: "2%" }}>
          <Typography
            sx={{ color: "#545454", pr: "50px", mt: "30px", mb: "20px" }}
            align="center"
            variant="h6"
          >
            Realizo evaluaciones para niños con sospecha de trastorno del
            espectro autista mediante test estandarizados Ados-2 y Adi-R.
          </Typography>
          <Tabs />
        </Grid>
      </Grid>
    </Grid>
  );
};
