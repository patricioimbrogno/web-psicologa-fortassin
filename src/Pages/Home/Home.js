import React from "react";
import { Grid } from "@mui/material";
import video from "../../Utils/videointro.mp4";
import "./Home.css";

const Home = () => {
  return (
    <Grid
      sx={{ backgroundColor: "#ffffff" }}
      container
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignContent="center"
      className="shapedividers_com-1568"
      item
      xs={12}
      sm={12}
      md={12}
      
    >
      <video
        src={video}
        width="50%"
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        className="video"
      >
        {" "}
      </video>
    </Grid>
  );
};

export default Home;
