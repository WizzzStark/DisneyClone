import { useState } from "react";
import FAQ from "./FAQ";

const FAQs = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "¿Qué es Disney+?",
            answer: (
                <div>
                    Disney+ es el servicio de streaming donde podrás ver películas, series, documentales y cortos de todas nuestras marcas: Disney, Pixar, Marvel, Star Wars, National Geographic y Star. Desde contenido de animación como Encanto o Luca hasta películas o series para los más grandes de la casa como Anatomía de Grey, Dopesick o Solo asesinatos en el edificio.
                    <br/><br/>
                    <ul className="ml-7">
                        <li>● Contenidos originales exclusivos que no podrás ver en otras plataformas.</li>
                        <li className="mt-3">● Descargas ilimitadas en hasta 10 dispositivos y hasta 7 perfiles</li>
                        <li className="mt-3">● Hasta 4 reproducciones simultáneas</li>
                        <li className="mt-3">● Con control parental</li>
                        <li className="mt-3">● Imagen de alta calidad 4K UHD, Dolby Vision y Dolby Atmos disponible en dispositivos compatibles</li>
                        <li className="mt-3">● Watch Party con nuestra funcionalidad Groupwatch en hasta 5 cuentas diferentes</li>
                    </ul>
                </div>
            ),
            open: false
        },
        {
            question: "¿Qué puedo ver en Disney+?",
            answer: (
                <div>
                    Con cientos de series, películas, documentales... de los grandes creadores de contenidos de nuestra historia, en Disney+ siempre encontrarás algo para ver.
                    <br/><br/>
                    <ul className="ml-7">
                        <li>● Las últimas películas de acción real y de animación como Encanto o Red.</li>
                        <li className="mt-3">● Descubre todas las películas y series de Marvel para poder verlas en orden cronológico (o no) ¡lo que tú prefieras! Loki, Bruja Escarlata y Visión o Caballero Luna.</li>
                        <li className="mt-3">● Vuelve a vivir la aventura de las películas de Star Wars, la cronología entera está disponible en Disney+, así como la serie que ha dado la vuelta al mundo, The Mandalorian, y el último lanzamiento Obi-Wan Kenobi.</li>
                        <li className="mt-3">● Descubre la naturaleza de la mano de los mejores exploradores en National Geographic.</li>
                        <li className="mt-3">● Adéntrate en Star, nuestra marca de contenidos +18, donde podrás encontrar la última temporada de Anatomía de Grey en exclusiva o series como Solo asesinatos en el edificio.</li>
                    </ul>
                </div>
            ),
            open: false
        },
        {
            question: "¿Cuánto cuesta Disney+?",
            answer: (
                <div>
                    8,99 € al mes<br/>
                    89,90 € al año<br/>
                    ¡Ahorra más de un 15% con la suscripción anual, 12 meses por el precio de 10!*<br/><br/>
                    *Precio en la mayoría de puntos de venta. Ahorro estimado comparado con 12 meses de suscripción mensual.
                </div>
            ),
            open: false
        },
        {
            question: "¿Qué dispositivos son compatibles?",
            answer: (
                <div>
                    Puedes ver Disney+ en tu smartphone, tablet, web, consola o Smart TV.
                </div>
            ),
            open: false
        },
        {
            question: "¿Hay compromiso de permanencia al suscribirse a Disney+?",
            answer: (
                <div>
                    No hay compromisos de permanencia y puedes cancelar tu suscripción cuando quieras. La cancelación surtirá efecto cuando termine tu periodo de facturación mensual o anual en curso.
                    <br/><br/>
                    Solo tienes que seguir estos pasos:
                    <ol className="ml-7">
                        <li className="mt-3">1.Inicia sesión en www.disneyplus.com</li>
                        <li className="mt-3">2.Selecciona tu perfil</li>
                        <li className="mt-3">3.Selecciona tu cuenta</li>
                        <li className="mt-3">4.Haz clic en Cancelar suscripción</li>
                        <li className="mt-3">5.Haz clic en Completar cancelación para confirmar</li>
                    </ol>
                </div>
            ),
            open: false
        },
    ]);

    const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            }
            return faq;
          })
        );
      };

    return (
      <section id="FAQs">
          <main>
                <h1 className="text-[40px] font-semibold  text-center">
                    Preguntas frecuentes
                </h1>
              <div className="faqs mx-auto">
                    {faqs.map((faq, index) => (
                    <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
          </main>
      </section>
    )
  }
  
  export default FAQs