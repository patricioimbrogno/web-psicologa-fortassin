import { Grid, Typography } from "@mui/material";
import ProfileImage from "../../Utils/foto profesional.png";
import "./About.css";
import React from "react";
import "../../Components/Divider/Divider.css";
import '../../Utils/utils.css'


const About = () => {
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
          sx={{ mt: "2%"}}
          container
          justifyContent="center"
        >
          <img
            src={ProfileImage}
            className='profileImage'
          ></img>
        </Grid>
       
        <Grid item xs={12} sm={6} sx={{ mt: "5%", }} className="bio">
        
          <Grid container >
            
            <Typography
              sx={{ color: "#545454" }}
              align="justify"
              variant="subtitle2"
            >
              Soy licenciada en psicología, egresada de la Universidad Católica
              Argentina. Mi orientación de trabajo es TCC (terapia cognitiva
              conductual), orientandome especialmente en los trastornos del
              neurodesarrollo como el autismo, TDAH y trastornos del lenguaje.
            </Typography>
             
            <Typography
              sx={{ color: "#545454" }}
              align="justify"
              variant="subtitle2"
            >
              Desde hace 10 años me formo en el área de atención a personas con
              discapacidad. Realicé varias disertaciones en congresos
              latinoamericanos y clases abiertas a la comunidad, cómo también
              capacitaciones a centros educativos terapéuticos. Acompaño a los
              niños y sus familias a transitar estos desafíos en el desarrollo,
              con la mirada puesta en la calidad de vida de todo el sistema
              familiar.
            </Typography>
            <br />
            <Typography
              sx={{ color: "#545454" }}
              align="justify"
              variant="subtitle2"
            >
              Asimismo realizo evaluaciones en niños con sospecha de autismo
              mediante test estandarizados cómo Ados-2, Adi-R y ASQ-3. Llevo
              adelante además tratamientos basados en ABA, TEACCH, PECS y Social
              Thinking.
            </Typography>
          </Grid>
        </Grid>
       
    </Grid>
  );
};

export default About;
