import { useState } from "react";
import Card from "./Card";


const Form = () => {
    const [nombreCantante, setNonmbreCantante] = useState("");
    const [tituloCancion, setTituloCancion] = useState("");
    const [validacionCantante, setValidacionCantante] = useState(false);
    const [validacionCancion, setValidacionCancion] = useState(false);
    const [validacionForm, setValidacionForm] = useState(false);
 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validacionCantante && validacionCancion) {
            setValidacionForm(true);
        } else {
            setValidacionForm(false);
        }
    }

    const handleChangeCantante = (e) => {
        setNonmbreCantante(e.target.value);
        if (e.target.value.length >= 3 && e.target.value.trim() === e.target.value) {          
            setValidacionCantante(true);
        } else {
            setValidacionCantante(false);
        }
    }


    const handleChangeCancion = (e) => {
        setTituloCancion(e.target.value);
        if (e.target.value.length >= 6) {
            setValidacionCancion(true);
        } else {
            setValidacionCancion(false);
        }
    }


    
    
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="cantante">Cantante:</label>
                <input
                    type="text"
                    id="cantante"
                    name="cantante"
                    value={nombreCantante}
                    onChange={handleChangeCantante}
                    />
                <label htmlFor="cancion">Canción:</label>
                <input
                    type="text"
                    id="cancion"
                    name="cancion"
                    value={tituloCancion}
                    onChange={handleChangeCancion}
                    />
                <button type="submit">Enviar</button>

            </form>
            {validacionForm ? <Card cantante={nombreCantante} cancion={tituloCancion} /> : <p>Por favor, rellena todos los campos</p>}

        </div>
    )
}

export default Form
