import React from "react";
import "../styles/Item.css"

class PanelAdd extends React.Component{
    constructor (props){
        super(props); //It is used to call the constructor of its parent class.
        this.state ={

            title:'',
            image:'',
            rating:1
        };
        //en formulrio es recoemndable usar los estados, por si algun campo cambia de valor, esete se actuliza automaticamente en el state
    }
    onSubmit(e) {
        e.preventDefault();
        
    }

    render(){
        return(
         
        <div className="new-item-panel-container">
            <div className="new-item-panel">
            {/* <form className="formulario" onSubmit="/"> esta es otra forma  */}
                <form className="formulario" onSubmit={this.onSubmit}>
                    <p>
                        <label>Título del Libro</label><br/>
                        <input type="text" name="title" className="input"/>
                    </p>
                    <p>
                        <label>Nombre de imagen</label><br/>
                        <input type="text" name="image" className="input"/>
                    </p>
                    <p>
                        <label>Calificación</label><br/>
                        <select>
                            <option value="1"> 1 </option>
                            <option value="2"> 2 </option>
                            <option value="3"> 3 </option>
                            <option value="4"> 4 </option>
                            <option value="5"> 5 </option>
                        </select>
                    </p>
                    <input type="submit" className="button btn-blue" value="Registrar Libro"/>
                    <button onClick={this.props.onCancel} className="button btn-normal" >Cancelar</button>
                    {/* //añadir boton de cerrar apartado */}

                </form>
            
            </div>
        </div>

     );
    }
     
}

export default PanelAdd;