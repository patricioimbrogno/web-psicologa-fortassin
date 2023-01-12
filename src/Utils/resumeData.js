import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Autism from './puzzle autism.svg'
import Language from './speak-talk-voice-icon.svg'
import Learning from "./read-icon1.svg"
import Habilities from "./habilidades.svg"
import Heart from './heart.svg'
import Mindfullness from './free_icon_1.svg'
import Doctoralia from './doctoralia.svg'
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
      icon: <LinkedInIcon />,
    },
    Doctoralia: {
      link: "https://www.doctoraliar.com/fiorella-fortassin/psicologo/capital-federal",
      icon: <img style={{ width:'19px', marginLeft:'1px' }} src={Doctoralia} alt='Doctoralia' />,
    },
  },
  about:
    "Mis 10 años de experiencia como comunicador me dieron la posibilidad de formar parte de equipos interdisciplinarios, prestar atención a los detalles y trabajar en pos de la resolución de problemáticas.\n\n Hoy decido dar un golpe de timón y tomar un camino que siempre corrió en paralelo a mi carrera, el de la tecnología y la programación. \n\n Realicé un programa de capacitación intensivo y full-time de Javascript de más de 800 horas prácticas, orientado no solo a la adquisición de habilidades técnicas en nuevas tecnologías y buenas prácticas, sino también de habilidades blandas a partir de emular entornos ágiles de trabajo propios de esta industria tan desafiante.",
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
  educations: [
    {
      title: "Coding Bootcamp",
      date: "2022",
      description: "Plataforma 5",
    },
    {
      title: "Diseño UX",
      date: "2021",
      description: "Digital House",
    },
    {
      title: "Maestría en Dirección de Comunicaciones",
      date: "2018-2019",
      description: "UADE Business School | Promedio 8.65",
    },
    {
      title: "Licenciatura en Periodismo",
      date: "2008-2015",
      description: "Universidad del Salvador | Promedio 8.39",
    },
    {
      title: "Diseño de Imagen y Sonido",
      date: "2004-2007",
      description: "Universidad de Buenos Aires | Hasta 3º año",
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "I have been a web developer...",
      icon: ""
    },
    {
      title: "Branding Identity",
      description: "I have been a web developer...",
      icon: ""
    },
    {
      title: "Illustrator",
      description: "I have been a web developer...",
      icon: ""
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: [
        "Javascript",
        "React.js",
        "Bootstrap",
        "Material UI",
        "Redux",
      ],
    },
    {
      title: "BACK-END",
      description: ["Node.js", "Express", "PostgreSQL", "Sequelize"],
    },
    {
      title: "CONTROL",
      description: ["Git", "GitHub"],
    },
    {
      title: "SOFT",
      description: [
        "Metodologías ágiles (SCRUM)",
        "Comunicación",
        "Trabajo en equipo",
        "Liderazgo",
        "Resolución de problemas",
      ],
    },
  ],
};
