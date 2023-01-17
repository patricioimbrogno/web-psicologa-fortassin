import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Autism from './puzzle autism.svg'
import Language from './speak-talk-voice-icon.svg'
import Learning from "./read-icon1.svg"
import Habilities from "./habilidades.svg"
import Heart from './heart.svg'
import Mindfullness from './free_icon_1.svg'
// import Doctoralia from './doctoralia.svg'
import Doctoralia from "./Doctoralia";
import './utils.css'
import Icon from './Icon'

export default {
  name: "Fiorella Fortassin",
  title: "Lic. en Psicología",
  email: "fiorella.fortassin@gmail.com",
  address: "Buenos Aires, Argentina",
  socials: {
    Instagram: {
      link: "https://www.instagram.com/fiore.psicologa/",
      icon: <InstagramIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com/fiore.psicologa/",
      icon: <FacebookIcon />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/fiorellafortassin/",
      icon: <LinkedInIcon />
    }
    // // Doctoralia: {
    //   link: "https://www.doctoraliar.com/fiorella-fortassin/psicologo/capital-federal",
    //   icon: <Doctoralia />,
    // },
  },
  consultsOne: [
    {
      title: "Trastorno del espectro autista",
      icon: <div className="hover01 column"><figure><img className="icon" src={Autism} /></figure></div>,
      
    },
    {
      title: "Trastorno por déficit de atención e hiperactividad",
      icon: <Icon />,
      
    },
    {
      title: "Trastorno del lenguaje",
      icon: <div className="hover01 column"><figure><img className="icon" src={Language} /></figure></div>,
      
    },
    {
      title: "Trastornos del aprendizaje",
      icon: <div className="hover01 column"><figure><img className="icon" src={Learning} /></figure></div>,
      
    },
  ],
  consultsTwo: [
    {
      title:  "Habilidades sociales",
      icon: <div className="hover01 column"><figure><img className="icon" src={Habilities} /></figure></div>,
      
    },
    {
      title: "Autoestima",
      icon: <div className="hover01 column"><figure><img className="icon" src={Heart} /></figure></div>,
      
    },
    {
      title: "Mindfullness para niños",
      icon: <div className="hover01 column"><figure><img className="icon" src={Mindfullness} /></figure></div>,
      
    },
  ],
};
