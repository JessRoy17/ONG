import React from "react";
import "./alimentosinfo.css";

export default function AlimentosInfo() {
  return (
    <section className="alimentos-section">
      {/* Header */}
      <header className="alimentos-header">
        <h2>Distribución de Alimentos</h2>
        <p className="lead">
          Distribuir alimentos no es solo dar lo físico, es dar amor y dedicación profunda. El compromiso que supone
          el esfuerzo de ir muy de madrugada refleja el gran esfuerzo y dedicación de nuestros voluntarios,
          y no solamente una vez, sino varias veces al día. Es un trabajo que solamente se puede hacer con mucho amor. 
          Cada voluntario que realiza estas actividades invierte su tiempo y su energía.
        </p>
      </header>

      {/* ¿Qué hacemos? → Texto izquierda, imagen derecha */}
      <div className="alimentos-block alimentos-quehacemos">
        <div className="alimentos-text">
          <h3>¿Qué hacemos?</h3>
          <p>
            Recolectamos los alimentos proporcionados por el Banco de Alimentos de Madrid 
            y en algunos casos por Carrefour(Fundación solidaridad ) y con la ayuda del 
            Ayuntamiento de Torrejón de Ardoz. 
            Clasificamos los alimentos por tipo y fecha de caducidad, preparamos paquetes equilibrados 
            y los entregamos a familias  en la Comunidad de Madrid. 
          </p>
        </div>

        <div className="alimentos-imagen">
          <img
            src="/images/comida1.png"
            alt="Voluntarios clasificando y empaquetando alimentos donados"
            loading="lazy"
          />
        </div>
      </div>

      {/* ¿Quieres ayudar? → Imagen izquierda, texto derecha */}
      <div className="alimentos-block alimentos-quieresayudar">
        <div className="alimentos-imagen">
          <img
            src="/images/requisitos.jpg"
            alt="Voluntarios entregando alimentos a personas necesitadas"
            loading="lazy"
          />
        </div>

        <div className="alimentos-text">
          <h3>¿Quieres ayudar?</h3>
          <p>
            Somos una entidad adscrita al Banco de Alimentos de Madrid, como es lógico estamos sujetos a las normas de control y seguridad. 
            Cada Kg que se reparte deberá estar debidamente justificado. Para recibir alimentos, las personas deben ser 
            <b>evaluadas previamente por Servicios Sociales del municipio</b>. Al estar inscritos en la Comunidad de Madrid, 
            podemos atender a cualquier persona que resida en la región.
          </p>
        </div>
      </div>
      <div className="alimentos-carrusel-container">
        <h3 className="carrusel-title">Distribución y recogida de alimentos</h3>
        <div className="carrusel-auto">
          <div className="carrusel-auto-track">
            <img src="/images/recogida1.jpg" alt="Voluntarios clasificando alimentos" loading="lazy" />
            <img src="/images/recogida2.jpg" alt="Gran recogida de alimentos" loading="lazy" />
            <img src="/images/recogida3.jpg" alt="Voluntarios jóvenes" loading="lazy" />
            <img src="/images/recogida4.jpg" alt=" " loading="lazy" />
            <img src="/images/furgo.jpg" alt="" loading="lazy" />
            <img src="/images/quehacemos.jpg" alt="" loading="lazy" />

            <img src="/images/recogida1.jpg" alt="Voluntarios clasificando alimentos" loading="lazy" />
            <img src="/images/recogida2.jpg" alt="Gran recogida de alimentos" loading="lazy" />
            <img src="/images/recogida3.jpg" alt="Voluntarios jóvenes" loading="lazy" />

            <img src="/images/recogida4.jpg" alt=" " loading="lazy" />
            <img src="/images/furgo.jpg" alt="" loading="lazy" />
            <img src="/images/quehacemos.jpg" alt="Voluntarios clasificando alimentos" loading="lazy" />             

          </div>
              
          </div>
        <div className="alimentos-agradecimientos">
        
          <h3 className="agradecimiento-title">Agradecimientos a nuestros colaboradores</h3>
          <div className="alimentos-agradecimiento-img">
          <img
            src="/images/sponsor.png"
            alt="Entrega de donaciones de alimentos de proveedores al banco de alimentos"
            loading="lazy"
          />
          </div>
          
         
        </div>
      
        </div>
      
    </section>
  );
}


