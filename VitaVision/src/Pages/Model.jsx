import { useState } from "react";
import "../App.css";

function Model() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); 
            };
            reader.readAsDataURL(file);
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
                        <p></p>
                        <p>AI-ris es un sistema de detección automática de enfermedades oculares mediante Machine Learning. Nuestro modelo ha sido entrenado con una amplia variedad de imágenes de retina para garantizar una alta precisión en la detección.</p>
                        <p>El sistema utiliza técnicas avanzadas de procesamiento de imágenes y algoritmos de aprendizaje profundo para identificar patrones y anomalías en las imágenes de retina. Esto permite a los profesionales de la salud realizar diagnósticos más rápidos y precisos.</p>
                    </div>
                    <div className="col">
                        <h2>Analizar con AI-ris</h2>
                        <p></p>
                        <input 
                            type="file" 
                            id="image-upload" 
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <p></p>
                        <div className="preview-container">
                            {imagePreview ? (
                                <img src={imagePreview} alt="Vista previa de la imagen" className="image-preview" id='image'/>
                            ) : (
                                <img src="../Images/Upload.png" alt="Vista previa de la imagen" className="image-preview" id='image'/>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <h2>Resultados</h2>
                        <p></p>
                        <p>Una vez que hayas subido una imagen, AI-ris procesará la imagen y te proporcionará un diagnóstico preliminar. Recuerda que este diagnóstico no sustituye a una consulta médica profesional.</p>
                        <p></p>
                        <button className="btn btn-primary">Analizar Imagen</button>
                    </div>
                </div>
            </div>

            <p></p>
            <h1 className="text-center">Funcionamiento de AI-ris</h1>

        </>
    );
}

export default Model;
