import { FaLinkedin } from 'react-icons/fa';
const integrantes = [
  {
      nombre: "Ing. Valentina Salamanca",
      descripcion: "Creativa y proactiva, con un fuerte compromiso hacia el trabajo en equipo y la innovación. A lo largo del desarrollo del proyecto de grado, he contribuido con ideas clave para el diseño y funcionamiento del dispositivo, demostrando iniciativa y pensamiento estratégico. También he gestionado exitosamente el contacto con médicos especialistas, facilitando su participación y asesoramiento en el proyecto. Poseo habilidades de liderazgo, así como una sólida capacidad para la organización del tiempo y la planificación de actividades, lo que ha permitido mantener una buena coordinación del equipo y el cumplimiento de los objetivos en los plazos establecidos.",
      imagen: "./Images/VS.png",
      linkedin: "http://linkedin.com/in/valentina-salamanca-bautista-072214320"
  },
  {
      nombre: "Ing. Anderson Arevalo",
      descripcion: "Anderson es el arquitecto detrás del modelo de inteligencia artificial de VitaVision AI-ris, diseñando e implementando la infraestructura de machine learning para la identificación del glaucoma. Ha desarrollado tanto el backend como el frontend de la aplicación web, asegurando una experiencia fluida e intuitiva para los usuarios. Además, se encargó del despliegue en la nube, optimizando la accesibilidad y el rendimiento del sistema. Su experiencia en visión por computadora, inteligencia artificial y desarrollo de software ha sido clave para hacer de VitaVision una plataforma innovadora y eficiente.",
      imagen: "./Images/AAM.jpeg",
      linkedin: "https://www.linkedin.com/in/aarevalom/"
  },
  {
    nombre: "Ing. Sara Sanchez",
    descripcion: "Soy estudiante de ingeniería biomédica con interés en el desarrollo y optimización de procesos en la industria de la salud. Me caracterizo por ser receptiva, responsable y empática. Durante el proyecto he aportado en la parte de diseño y desarrollo de modelos 3D para la creación del dispositivo así como también en la investigación e ideación de mejoras sobre el mismo.",
    imagen: "./Images/Sara.png",
    linkedin: "www.linkedin.com/in/sj-sanchezf"
},
{
  nombre: "Ing. Maria del Mar Urrea",
  descripcion: "Estudiante de Ingeniería Biomédica en la Universidad de los Andes. A lo largo de mi carrera, he descubierto una pasión por utilizar las herramientas de la ingeniería para ayudar a los demás y contribuir a mejorar la experiencia de las personas en el ámbito de la salud. Me considero una persona responsable, creativa y comprometida, siempre dispuesta a aportar ideas útiles e innovadoras, especialmente en el proyecto aportando ideas de diseño de prototipos que generen un impacto positivo. En este proyecto encontré una oportunidad para aplicar mis conocimientos y valores con el objetivo de crear soluciones reales y significativas.",
  imagen: "./Images/Maria.png",
    linkedin: ""
},
{
  nombre: "Ing. Sebastian Melo",
  descripcion: "Analítico, lógico y orientado al logro, con un fuerte interés en el diseño de dispositivos médicos y el análisis biomecánico. Durante el desarrollo del proyecto de grado, he tenido un rol clave en la ideación de la solución y en la definición de su enfoque técnico, aportando pensamiento estructurado y capacidad de análisis lógico frente a la problemática planteada. Me he enfocado especialmente en el diseño del dispositivo y en la construcción del prototipo físico, integrando criterios de funcionalidad, ergonomía y viabilidad técnica. Me destaco por mi capacidad para trabajar en equipo, liderar procesos técnicos y traducir ideas innovadoras en soluciones tangibles y eficientes.",
  imagen: "./Images/Sebastian.png",
    linkedin: ""
}
];
const Asesores=[
    {nombre: "Oftalmólogo Gerardo Salamanca",
        descripcion: "El Dr. Gerardo Salamanca Palacios es médico egresado de la Universidad Autónoma de Guadalajara (México), con especialización en Oftalmología de la Universidad del Rosario (Colombia). Cuenta con más de 25 años de experiencia en el diagnóstico, tratamiento y cirugía de enfermedades oculares, con énfasis en el segmento anterior del ojo. Especialista en cirugía de catarata y cirugía refractiva, el Dr. Salamanca ha liderado numerosos procedimientos exitosos, consolidando su reputación como referente en su campo. Actualmente se desempeña como Director Científico del Instituto Oftalmológico Salamanca, donde combina la práctica clínica con la dirección estratégica e innovación médica. Es miembro activo de la Sociedad Colombiana de Oftalmología y de la American Society of Cataract and Refractive Surgery (ASCRS), lo cual respalda su compromiso con la actualización continua y la excelencia profesional.",
        imagen: "./Images/gerardo.png",
        linkedin: ""
    }
];



const NuestroEquipo = () => {
    return (
      <div className="equipo-container">

        <div className="portada">
          <img src="./Images/Team.png" alt="Nuestro Equipo" className="portada-img" id="portada" />
          <div className="portada-texto">
            <h1 className="text-4xl font-bold">Nuestro Equipo</h1>
            <p className="text-lg mt-2">
              Un equipo apasionado por transformar la salud visual y reducir la ceguera causada por el glaucoma mediante innovación tecnológica.
            </p>
          </div>
        </div>
  

        <div className="container text-center mt-5">
          <h2 className="text-3xl font-semibold mb-4">Integrantes</h2>
  
          <div className="row">
            {integrantes.slice(0, 3).map((miembro, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card integrante-card h-100 shadow-sm">
                  <img src={miembro.imagen} className="card-img-top" alt={miembro.nombre} />
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title font-bold">{miembro.nombre}</h4>
                    <p className="card-text flex-grow-1">{miembro.descripcion}</p>
                    {miembro.linkedin && (
                      <a
                      href={miembro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] text-2xl mt-2 inline-block"
                    >
                      <FaLinkedin />
                    </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="row">
            {integrantes.slice(3).map((miembro, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card integrante-card h-100 shadow-sm">
                  <img src={miembro.imagen} className="card-img-top" alt={miembro.nombre} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-bold">{miembro.nombre}</h5>
                    <p className="card-text flex-grow-1">{miembro.descripcion}</p>
                    {miembro.linkedin && (
                      <a
                      href={miembro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0A66C2] text-2xl mt-2 inline-block"
                    >
                      <FaLinkedin />
                    </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container text-center mt-5">
          <h2 className="text-3xl font-semibold mb-4">Asesor Científico</h2>
          <div className="row justify-content-center">
            {Asesores.map((asesor, index) => (
              <div className="col-md-6" key={index}>
                <div className="card integrante-card h-100 shadow-sm">
                  <img src={asesor.imagen} className="card-img-top" alt={asesor.nombre} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-bold">{asesor.nombre}</h5>
                    <p className="card-text flex-grow-1">{asesor.descripcion}</p>
                    {asesor.linkedin && (
                      <a href={asesor.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-2">
                        Ver perfil en LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default NuestroEquipo;
  