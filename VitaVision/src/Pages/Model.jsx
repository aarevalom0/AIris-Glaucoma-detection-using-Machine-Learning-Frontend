import { useState } from "react";
import { useTransition } from 'react';
import "../App.css";
import axios from 'axios';

function Model() {
    const [imagePreview, setImagePreview] = useState(null);
    const [nameImage, setNameImage] = useState('');
    const [prediccion, setPrediccion] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setNameImage(file.name);
            const formData = new FormData();
            formData.append('file', file);

            const reader = new FileReader();
            reader.onloadend = async () => {
                setImagePreview(reader.result);
                try {
                    await axios.post('http://127.0.0.1:8000/upload', formData);
                    console.log("Imagen subida con éxito:", file.name);
                } catch (error) {
                    console.error("Error subiendo la imagen:", error);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePredict = async () => {
        if (!nameImage) {
            alert("Sube una imagen primero.");
            return;
        }

        console.log("Solicitando predicción para:", nameImage);

        try {
            const response = await axios.get(`http://127.0.0.1:8000/predecir/${nameImage}`);
            console.log("Respuesta de la API:", response.data);

            let data = response.data;
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }

            setPrediccion(data);
        } catch (error) {
            console.error("Error en la predicción:", error);
        }
    };

    return (
        <>
            <div className="container">
                <h1 className="text-center">AI-Ris Detección automática mediante Machine Learning</h1>
                <hr id="line" />
            </div>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h2>Bienvenido a AI-ris</h2>
                        <p>AI-ris es un sistema de detección automatic de enfermedades oculares mediante Machine Learning.</p>
                    </div>
                    <div className="col">
                        <h2>Analizar con AI-ris</h2>
                        <input 
                            type="file" 
                            id="image-upload" 
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <br></br>
                        <div className="preview-container"> 
                            <br></br>
                            {imagePreview ? (
                                <img src={imagePreview} alt="Vista previa de la imagen" className="image-preview" id='image' />
                            ) : (
                                <img src='./Images/Upload.png' alt="Vista previa de la imagen" className="image-preview" id='image' />
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <h2>Resultados</h2>
                        <p>Sube la imagen del fondo del ojo y presiona "Analizar Imagen" para obtener un diagnóstico.</p>
                        <button className="btn btn-primary" onClick={handlePredict}>Analizar Imagen</button>
                        <br></br>
                        <br></br>
                        <h3>Diagnostico mediante AI-ris:</h3>
                        {prediccion && (
    <div 
        className='container' id={prediccion.Clase === "1" ? "alert" : "goodResult"}
    >
        {prediccion.Clase === "1" ? (
            <p id={prediccion.Clase ===1 ? "alertText" : "goodResultText"}>
                ⚠️ <b>Los resultados sugieren la posibilidad de glaucoma</b>. Te recomendamos consultar a un especialista para una evaluación más detallada.
            </p>
        ) : (
            <p id={prediccion.Clase ===1 ? "alertText" : "goodResultText"}>
                ✅ <b>No se han detectado signos de glaucoma</b>. Recuerda que los exámenes periódicos son clave para la prevención.
            </p>
        )}
       
    </div>
)}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Model;
