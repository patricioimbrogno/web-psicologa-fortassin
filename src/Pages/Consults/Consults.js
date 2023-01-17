import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import "../Home/Home.css";
import "../About/About.css";
import Fade from "react-reveal/Fade";
import resumeData from "../../Utils/resumeData";
import Separator from "../../Utils/Separator";
import "../../Components/Divider/Divider.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Consults.css";

const Consults = () => {
  return (
    <Grid
      sx={{ backgroundColor: "#ffeb9b"}}
      container
      display="flex"
      flexDirection="row"
      id="consultas"
      JustifyContent="center"
      className="shapedividers_com-7944"
    >
      <Grid
        item
        xs={12}
        sm={12}
        container
        justifyContent="center"
        sx={{ mt: "80px" }}
        className="consultas"
      >
        <Fade bottom>
          <Grid item display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: "#737373",
                mt: "50px",
              }}
              className='centro'
            >
              CONSULTAS PSICOLÓGICAS
            </Typography>

            <Separator color="#f9ac85" />
          </Grid>
        </Fade>

        <Typography
          sx={{ color: "#545454", pt: "20px" }}
          align="center"
          variant="h6"
          className="consultasText"
        >
          Consulta psicológica para niños con desafíos en el neurodesarrollo y
          orientación a padres, cómo también cuestiones emocionales y de
          autoestima. 
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} className="iconosConsultas" sx={{ mt: "5%" }}>
        {Object.keys(resumeData.consultsOne).map((key) => (
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              sx={{ color: "#545454", paddingLeft:'10px', paddingRight:'10px' }}
              align="center"
              className="centro"
            
            >
              {resumeData.consultsOne[key].title}
            </Typography>
            <Grid className="iconos">{resumeData.consultsOne[key].icon}</Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={12} className="iconosConsultasDos iconosConsultas">
        {Object.keys(resumeData.consultsTwo).map((key) => (
          <Grid
            container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              sx={{ color: "#545454" }}
              align="center"
              className="centro"
            >
              {resumeData.consultsTwo[key].title}
            </Typography>
            <Grid>{resumeData.consultsTwo[key].icon}</Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} justifyContent="center">
        <AnchorLink href="#contacto" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              mb: "10px",
              mt: "10px",
              backgroundColor: "#f9ac85",
              color: "white",
              boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.2)",
              "&:hover": {
                color: "white",
                backgroundColor: "#e09a77",
              },
            }}
          >
            Consultar
          </Button>
        </AnchorLink>
      </Grid>
    </Grid>
  );
};

export default Consults;
