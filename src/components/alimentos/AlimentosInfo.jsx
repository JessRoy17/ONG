import React from "react";
import "../components/alimentosinfo.css";

export default function AlimentosInfo() {
  return (
    <section className="alimentos-section">
      <header className="alimentos-header">
        <h2>Programa de Alimentos</h2>
        <p className="lead">
          Distribuir alimentos, no es dar lo físico, es dar amor, ua que es el esfuerzo que supone ir muy de madrugada no solamente una si no varias veces al día, es u esfuerzo que solamente se puede hacer con mucho amor. 
          Cada voluntario que realiza estas actividades, invierte su tiempo y su energía.
        </p>
      </header>

      <div className="alimentos-content">
        <div className="alimentos-text">
          <h3>¿Qué hacemos?</h3>
          <p>
            Recolectamos donaciones de comida, las clasificamos por tipo y caducidad,
            preparamos paquetes equilibrados y los entregamos a familias y comedores
            sociales en la Comunidad de Madrid. Contamos con voluntarios y colaboraciones
            con comercios locales.
          </p>

        

          <h3>¿Quieres ayudar?</h3>
          <p>
            Somos una entidad adscrita al Banco de Alimentos de Madrdi, como es logico 
            estamos sujetos a las normas de control y seguridad. Cada Kg. que se reparte deberá estar debidamente 
            justificado, queriendo decir que con esto cada persona o familia que necesite percibir estos alimentos,
            deberá cumplir un único requerimiento, ser <b>evaluado primero por Asuntos Sociales del municipio donde resida</b>.
            En nuestro caso al ser una Asociación inscrita en la Comunidad de Madrid,
            podemos atender a cualquier persona que necesite y resida en la Comunidad Autonoma
          </p>
        </div>

        <div className="alimentos-image">
          <img
            src="/images/732Confiaza-solidaria1.webp"
            alt="Voluntarios repartiendo alimentos"
            loading="lazy"
          />
    
        </div>
      </div>
    </section>
  );
}