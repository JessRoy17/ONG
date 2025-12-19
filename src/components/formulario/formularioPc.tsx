import './formulario.css'

function formularioPC() {
    return (
        <>
            <form className='margenesForm oculto--formularioPC'>
                <legend className='legendTitulo'>Voluntariado</legend>
                    
                    
                    <fieldset className='fieldsetForm '>
                        <input className='placeholderColor' type="text" id="nombre" name="user_nombre" placeholder=' Nombre' />
                        <input className='placeholderColor' type="text" id="apellido" name="user_apellido" placeholder=' Apellido' />
                        <input className='placeholderColor' type="text" id="edad" name="user_edad" placeholder=' Edad' />
                    
                    </fieldset>
                   
                    <fieldset className='fieldsetForm'>
                        <input className='placeholderColor' type="email" id="mail" name="user_mail" placeholder=' E-mail' />
                        <input className='placeholderColor' type="text" id="tlf" name="user_tlf" placeholder=' Teléfono' />
                    </fieldset>
                    
                    <fieldset className='fieldsetForm'>
                        <textarea className='placeholderColor' id="msg" name="motivo" placeholder=' Motivo'></textarea>
                    </fieldset>
                    
                    <fieldset className='fieldsetForm buttonAyudanos'>
                        <button>Ayúdanos</button>
                    </fieldset>
            </form>

            <form className='oculto--formulario'>
                <legend className='oculto--formulario-legend'>Voluntariado</legend>
                <input className='placeholderColor' type="text" id="nombre" name="user_nombre" placeholder=' Nombre' />
                <input className='placeholderColor' type="text" id="apellido" name="user_apellido" placeholder=' Apellido' />
                <input className='placeholderColor' type="text" id="edad" name="user_edad" placeholder=' Edad' />
                <input className='placeholderColor' type="email" id="mail" name="user_mail" placeholder=' E-mail' />
                <input className='placeholderColor' type="text" id="tlf" name="user_tlf" placeholder=' Teléfono' />
                <textarea className='placeholderColor' id="msg" name="motivo" placeholder=' Motivo'></textarea>
                <button className='oculto--formulario-button'>Ayúdanos</button>
            </form>

        </>
    )
}
export default formularioPC