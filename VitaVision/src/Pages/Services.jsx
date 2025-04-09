import { useState } from "react";

function Servicios() {
  const [mostrarPlanes, setMostrarPlanes] = useState(false);

  const planes = [
    {
      nombre: "Plan Básico",
      descripcion: "Incluye 20 diagnósticos al mes. Ideal para consultorios pequeños.",
      precio: "$96.000/mes",
    },
    {
      nombre: "Plan Profesional",
      descripcion: "Incluye 50 diagnósticos al mes. Perfecto para clínicas medianas.",
      precio: "$240.000/mes",
    },
    {
      nombre: "Plan Empresarial",
      descripcion: "Diagnósticos ilimitados. Dirigido a hospitales y centros de salud grandes.",
      precio: "$320.000/mes",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center text-4xl font-bold mb-4">Servicios VitaVision</h1>
      <p className="text-center text-lg mb-5">
        En VitaVision ofrecemos soluciones tecnológicas para el diagnóstico temprano del glaucoma.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-lg rounded-xl">
            <div className="card-body text-center">
              <h3 className="card-title text-2xl font-semibold mb-3">Diagnóstico Individual</h3>
              <p className="card-text mb-4">
                Obtén un diagnóstico preciso por solo <strong>$5.000</strong>. Ideal para usuarios individuales que desean saber si presentan signos de glaucoma.
              </p>
              <button className="btn btn-primary">Solicitar diagnóstico</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-lg rounded-xl">
            <div className="card-body text-center">
              <h3 className="card-title text-2xl font-semibold mb-3">Paquetes de diagnosticos</h3>
              <p className="card-text mb-4">
                Accede a planes por volumen para centros de salud. Tarifas preferenciales desde <strong>$4.800</strong> por diagnóstico.
              </p>
              <button className="btn btn-outline-primary" onClick={() => setMostrarPlanes(!mostrarPlanes)}>
                {mostrarPlanes ? "Ocultar planes" : "Ver planes disponibles"}
              </button>
            </div>
          </div>
        </div>
      </div>


      {mostrarPlanes && (
        <div className="row justify-content-center mt-4">
          {planes.map((plan, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="card shadow-sm rounded-xl h-100">
                <div className="card-body text-center">
                  <h5 className="card-title text-xl font-bold mb-2">{plan.nombre}</h5>
                  <p className="card-text mb-2">{plan.descripcion}</p>
                  <span className="badge bg-primary text-white py-2 px-3">{plan.precio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-5">
        <img src="./Images/Logo.png" alt="Servicios VitaVision" className="img-fluid rounded shadow" />
      </div>
    </div>
  );
}

export default Servicios;