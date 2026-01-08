import './formulario.css'

function FormularioPC() {
  return (
    <>
      {/* PC */}
      <form className="margenesForm formulario oculto--formularioPC">
        <fieldset>
          <legend className="legendTitulo">Voluntariado</legend>

          <fieldset className="fieldsetForm">
            <input className="placeholderColor" type="text" name="user_nombre" placeholder="Nombre" />
            <input className="placeholderColor" type="text" name="user_apellido" placeholder="Apellido" />
            <input className="placeholderColor edad" type="text" name="user_edad" placeholder="Edad" />
          </fieldset>

          <fieldset className="fieldsetForm">
            <input className="placeholderColor" type="email" name="user_mail" placeholder="E-mail" />
            <input className="placeholderColor" type="text" name="user_tlf" placeholder="Teléfono" />
          </fieldset>

          <fieldset className="fieldsetForm">
            <textarea className="placeholderColor" name="motivo" placeholder="Motivo" />
          </fieldset>

          <fieldset className="fieldsetForm buttonAyudanos">
            <button type="submit">Ayúdanos</button>
          </fieldset>
        </fieldset>
      </form>

      {/* Mobile */}
      <form className="formulario oculto--formulario">
        <legend className="oculto--formulario-legend">Voluntariado</legend>

        <input className="placeholderColor" type="text" name="user_nombre" placeholder="Nombre" />
        <input className="placeholderColor" type="text" name="user_apellido" placeholder="Apellido" />
        <input className="placeholderColor edad" type="text" name="user_edad" placeholder="Edad" />
        <input className="placeholderColor" type="email" name="user_mail" placeholder="E-mail" />
        <input className="placeholderColor" type="text" name="user_tlf" placeholder="Teléfono" />
        <textarea className="placeholderColor" name="motivo" placeholder="Motivo" />
        <button className="oculto--formulario-button">Ayúdanos</button>
      </form>
    </>
  )
}

export default FormularioPC