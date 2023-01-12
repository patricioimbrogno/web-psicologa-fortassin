import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#f9ac85",
            },
          }}
          sx={{
            "& button:active": { color: "#f9ac85" },
            "& button:hover": { color: "#f9ac85" },
            "& button:focus": { color: "#f9ac85" },
            "& button.Mui-selected": { color: "#f9ac85" },
            
          }}

        >
          <Tab label="Ados-2" {...a11yProps(0)} />
          <Tab label="Adi-R" {...a11yProps(1)} />
          <Tab className="MuiButtonBase-root" label="Pasos a seguir" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography sx={{ color: "#545454" }}>
          La evaluación Ados-2 es un test estandarizado y semiestructurado que
          evalúa la comunicación, la interacción social y el juego, pudiéndose
          aplicar a personas de distintas edades y niveles de lenguaje a partir
          de los 2 años y medio de edad, hasta la adultez.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography sx={{ color: "#545454" }}>
          La evaluación Adi-R es una entrevista semi estructurada, dirigida a
          los padres o cuidadores de la persona con sospecha de autismo, sobre
          el historial del desarrollo, por ejemplo lenguaje/comunicación,
          interacciones sociales recíprocas y conductas e intereses repetitivos
          y estereotipados, obteniendo así descripciones detalladas sobre su
          comportamiento.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography sx={{ color: "#545454" }}>
          La evaluación para el diagnóstico de autismo consiste en 4 encuentros:
        </Typography>
        <ol>
          <li style={{ color: "#545454" }}>
            Entrevista inicial con la familia
          </li>
          <li style={{ color: "#545454" }}>Evaluación Ados-2</li>
          <li style={{ color: "#545454" }}>
            Entrevista semiestructurada Adi-R
          </li>
          <li style={{ color: "#545454" }}>Devolución y entrega de informe.</li>
        </ol>
      </TabPanel>
    </Box>
  );
}
