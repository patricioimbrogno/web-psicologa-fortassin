import { Grid, Typography, Button } from "@mui/material";
import ProfileImage from "../../Utils/foto profesional.png";
import "./About.css";
import React, { useState } from "react";
import "../../Components/Divider/Divider.css";
import "../../Utils/utils.css";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const toggledClass = expanded ? "expanded" : "collapsed";

  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      id="sobremi"
      sx={{ backgroundColor: "#fff8d0", pt: "50px", pb: "50px" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ mt: "5%"}}
        container
        justifyContent="center"
      >
        <img src={ProfileImage} alt='Fiorella Fortassin' className="profileImage"></img>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ mt: "5%", borderLeft: '8px solid #f9ac85' }} className="bio">
        <Grid container display='flex' flexDirection='column' alignItems='center'>
          <Typography
            sx={{ color: "#545454" }}
            align="center"
            variant="subtitle2"
            className="blockquote"
          >
            Licenciada en psicología, egresada de la Universidad Católica
            Argentina. Orientación de trabajo TCC (terapia cognitiva
            conductual), especialmente en los trastornos del
            neurodesarrollo como el autismo, TDAH y trastornos del lenguaje.
          </Typography>

          <Typography
            sx={{ color: "#545454" }}
            align="center"
            variant="subtitle2"
            className={`content ${toggledClass} otro-blockquote`}
          >
            <br />Desde hace 10 años me formo en el área de atención a personas con
            discapacidad. Realicé varias disertaciones en congresos
            latinoamericanos y clases abiertas a la comunidad, cómo también
            capacitaciones a centros educativos terapéuticos. <br /><br />Acompaño a los
            niños y sus familias a transitar estos desafíos en el desarrollo,
            con la mirada puesta en la calidad de vida de todo el sistema
            familiar. Asimismo realizo evaluaciones en niños con sospecha de
            autismo mediante test estandarizados cómo Ados-2, Adi-R y ASQ-3.
            Llevo adelante además tratamientos basados en ABA, TEACCH, PECS y
            Social Thinking.
          </Typography>

          <br />
          <Button
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
            onClick={() => setExpanded(!expanded)}
            className='hide'
          >
            {expanded ? "Leer menos" : "Leer más"}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
