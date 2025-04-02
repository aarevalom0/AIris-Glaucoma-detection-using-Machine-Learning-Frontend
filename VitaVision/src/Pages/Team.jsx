
const integrantes = [
  {
      nombre: "Pendiente",
      descripcion: "Pendiente",
      imagen: ""
  },
  {
      nombre: "Ing. Anderson Arevalo",
      descripcion: "Anderson es el arquitecto detrás del modelo de inteligencia artificial de VitaVision AI-ris, diseñando e implementando la infraestructura de machine learning para la identificación del glaucoma. Ha desarrollado tanto el backend como el frontend de la aplicación web, asegurando una experiencia fluida e intuitiva para los usuarios. Además, se encargó del despliegue en la nube, optimizando la accesibilidad y el rendimiento del sistema. Su experiencia en visión por computadora, inteligencia artificial y desarrollo de software ha sido clave para hacer de VitaVision una plataforma innovadora y eficiente.",
      imagen: "./Images/AAM.jpeg"
  },
  {
    nombre: "Pendiente",
    descripcion: "Pendiente",
    imagen: ""
},
{
  nombre: "Pendiente",
  descripcion: "Pendiente",
  imagen: ""
},
{
  nombre: "Pendiente",
  descripcion: "Pendiente",
  imagen: ""
}
];


const NuestroEquipo = () => {
  return (
    <div className="equipo-container">
        {}
        <div className="portada">
            <img src="./Images/Team.jpg" alt="Nuestro Equipo" className="portada-img" id="carousel" />
            <div className="portada-texto">
                <h1>Nuestro Equipo</h1>
                <p>Un equipo apasionado por aportar a la sociedad disminutendo la incidencia de seguera causada por glaucoma</p>
            </div>
        </div>


        <div className="container text-center mt-5">
            <div className="row">
                {integrantes.slice(0, 3).map((miembro, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card integrante-card">
                            <img src={miembro.imagen} className="card-img-top" alt={miembro.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{miembro.nombre}</h5>
                                <p className="card-text">{miembro.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row mt-4">
                {integrantes.slice(3, 5).map((miembro, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card integrante-card">
                            <img src={miembro.imagen} className="card-img-top" alt={miembro.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{miembro.nombre}</h5>
                                <p className="card-text">{miembro.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}
  
  export default NuestroEquipo;