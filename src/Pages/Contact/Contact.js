import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Alert } from "@mui/material";
import resumeData from "../../Utils/resumeData";
import { send } from "emailjs-com";
import Map from "../../Components/Map/Map";
import "../../Components/Divider/Divider.css";
import Fade from "react-reveal/Fade";
import Doctoralia from "../../Utils/Doctoralia";
import "./Contact.css";

const Contact = () => {
  const location = {
    address: "Guido 1953, Recoleta, Buenos Aires",
    lat: -34.5887685,
    lng: -58.393549,
  };

  const [toSend, setToSend] = useState({ name: "", message: "", reply_to: "" });
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send("service_108lpfb", "template_n7cmmfq", toSend, "ysAGGh-e1g1Jbmikf")
      .then((response) => {
        console.log("success", response.status, response.text);
        setAlert(true);
      })
      .catch((err) => {
        console.log("Failed..", err);
      });
  };

  return (
    <>
      <Fade bottom>
        <Grid
          container
          sx={{ backgroundColor: "#cfe7d6", pt: "50px", pb: "50px" }}
          spacing={6}
          id="contacto"
          alignItems="center"
          justifyContent="center"
          className="shapedividers_com-7721"
        >
          <Grid item xs={12} lg={6}>
            <Grid
              container
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Grid item xs={12} spacing={4} sx={{ mb: 2 }}>
                <Typography
                  sx={{ color: "#545454" }}
                  variant="h5"
                  className="centro"
                >
                  ¿Tenés alguna consulta?
                </Typography>
              </Grid>
              <Grid item xs={12} spacing={4} sx={{ mb: 5 }}>
                <Typography
                  sx={{ color: "#545454" }}
                  variant="subtitle2"
                  align="center"
                  className="textContact"
                >
                  Completá el formulario y te responderé a la brevedad
                </Typography>
              </Grid>
              <Grid item xs={12} className="form">
                <Grid
                  container
                  spacing={3}
                  display="flex"
                  flexDirection="row"
                  alignContent="center"
                  sx={{ ml: "10px" }}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 5,
                          border: "3px solid #f9ac85",
                          "& label.Mui-focused": {
                            color: "red",
                          },
                        },
                      }}
                      onChange={handleChange}
                      value={toSend.name}
                      fullWidth
                      name="name"
                      label="Nombre"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 5,
                          border: "3px solid #f9ac85",
                          "& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                              borderColor: "orange",
                            },
                          },
                        },
                      }}
                      onChange={handleChange}
                      value={toSend.reply_to}
                      fullWidth
                      name="reply_to"
                      label="Email"
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{
                        [`& fieldset`]: {
                          borderRadius: 5,
                          border: "3px solid #f9ac85",
                          "& .MuiOutlinedInput-root:hover": {
                            "& > fieldset": {
                              borderColor: "orange",
                            },
                          },
                        },
                      }}
                      disableUnderline
                      onChange={handleChange}
                      value={toSend.message}
                      fullWidth
                      name="message"
                      label="Mensaje"
                      multiline
                      rows={4}
                    ></TextField>
                  </Grid>
                  <Grid
                    container
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                  >
                     <Grid item xs={6} display='flex' justifyContent='start' sx={{pl:'30px',pt:'5px'}}>
                      {alert && (
                        <Alert severity="success">
                          ¡Enviado!
                        </Alert>
                      )}
                    </Grid>
                    <Grid item xs={6} display='flex' justifyContent='end'>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#f9ac85",
                          height:'35px',
                          mt: '10px',
                          color: "white",
                          boxShadow: "1px 1px 2px 2px rgba(0,0,0,0.2)",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#e09a77",
                          },
                        }}
                        onClick={handleSubmit}
                      >
                        Enviar
                      </Button>
                    </Grid>
                   
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="center">
            <Grid
              container
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                sx={{ color: "#545454", mb: 2 }}
                variant="h5"
                className="centro"
              >
                Consultorio
              </Typography>
              <Typography
                sx={{ color: "#545454", mb: 5 }}
                variant="subtitle2"
                align="center"
                className="textContact"
              >
                Atención presencial en el barrio de Recoleta, Buenos Aires
              </Typography>
            </Grid>

            <Map location={location} zoomLevel={17} />
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            container
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: { xs: "row" },
              justifyContent: { xs: "center" },
            }}
          >
            <Grid>
              <Typography
                sx={{ color: "#545454", mb: "10px" }}
                variant="h5"
                className="centro"
                align="center"
              >
                Seguime en redes
              </Typography>
            </Grid>
            <Grid className="socials">
              {Object.keys(resumeData.socials).map((key) => (
                <a
                  href={resumeData.socials[key].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {resumeData.socials[key].icon}
                </a>
              ))}
            </Grid>
            <Grid sx={{ width: "10%", pt: "5px", pr: "115px" }}>
              <a
                href="https://www.doctoraliar.com/fiorella-fortassin/psicologo/capital-federal"
                target="_blank"
              >
                <Doctoralia
                  width={"120"}
                  height={"30"}
                  color={"#f9ac85"}
                  colorBack={"#cfe7d6"}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};

export default Contact;
