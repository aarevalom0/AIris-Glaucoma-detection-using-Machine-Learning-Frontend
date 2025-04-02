import { useEffect } from "react";
import Swup from "swup";
import SwupBodyClassPlugin from "@swup/body-class-plugin";

const SwupWrapper = ({ children }) => {
    useEffect(() => {
        const swup = new Swup({
            containers: ["#root"],  // 🔥 Aseguramos que detecta el contenedor correcto
            animationSelector: ".transition-fade", // Buscamos correctamente la clase CSS
            plugins: [new SwupBodyClassPlugin()],
        });

        return () => swup.destroy();
    }, []);

    return <div id="swup-container">{children}</div>;  
};

export default SwupWrapper;

