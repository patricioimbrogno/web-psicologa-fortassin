import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import resumeData from "../../Utils/resumeData";
import Logo from "../../Utils/logofiorella.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f9ac85", color: "black" }}
    >
      <Container>
        <Toolbar>
          <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: 'row', justifyContent:'space-between' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <AnchorLink href="#sobremi" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                  Sobre mí
                </Typography>
              </MenuItem>
              </AnchorLink>
              <AnchorLink href="#consultas" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                  Consultas psicológicas
                </Typography>
              </MenuItem>
              </AnchorLink>
              <AnchorLink href="#evaluaciones" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                  Evaluaciones
                </Typography>
              </MenuItem>
              </AnchorLink>
              <AnchorLink href="#contacto" style={{ textDecoration: "none" }}>
              <MenuItem>
                <Typography sx={{ color: "black" }} textAlign="center">
                  Contacto
                </Typography>
              </MenuItem>
              </AnchorLink>
            </Menu>
            <img
              className="logoMobile"
              src={Logo}
              style={{
                width: "20%",
                margin: "5px",
              }}
              alt="logo fiorella fortassin"
            ></img>
          </Box>

          <Grid
            container
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="space-between"
            alignContent="center"
            alignItems="center"
          >
            <Grid item md={2}>
              <Link to="/">
                <img
                  className="logoDesktop"
                  src={Logo}
                  style={{
                    width: "50%",
                    margin: "5px",
                  }}
                  alt="logo fiorella fortassin"
                ></img>
              </Link>
            </Grid>
            <Grid
              item
              md={8}
              container
              justifyContent="center"
              alignItems="center"
            >
              <AnchorLink href="#sobremi" style={{ textDecoration: "none" }}>
                <Button
                  className="button"
                  sx={{ color: "black", textShadow: "1px 1px 1px gray" }}
                >
                  Sobre mí
                </Button>
              </AnchorLink>
              <AnchorLink href="#consultas" style={{ textDecoration: "none" }}>
                <Button
                  className="button"
                  sx={{ color: "black", textShadow: "1px 1px 1px gray" }}
                >
                  Consultas psicológicas
                </Button>
              </AnchorLink>
              <AnchorLink
                href="#evaluaciones"
                style={{ textDecoration: "none" }}
              >
                <Button
                  className="button"
                  sx={{ color: "black", textShadow: "1px 1px 1px gray" }}
                >
                  Evaluaciones
                </Button>
              </AnchorLink>
              <AnchorLink href="#contacto" style={{ textDecoration: "none" }}>
                <Button
                  className="button"
                  sx={{ color: "black", textShadow: "1px 1px 1px gray" }}
                >
                  Contacto
                </Button>
              </AnchorLink>
            </Grid>

            <Grid
              item
              md={2}
              container
              justifyContent="flex-end"
              className="header_right"
            >
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
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
