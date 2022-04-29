import React from "react";
import "../styles/Item.css"

class Item extends React.Component{
  constructor (props){
    super(props);

    this.state = {
      stars:[

      ]
    };
  }

  componentDidMount(){
    this.setState({
      stars:Array(parseInt(this.props.rating)).fill(0) //tome el valor del rating y lo relene con ceros, esta funcion fill no me ocnc¿vence
    });
  }

  render() {
    return (
      // <div>{props.title}</div> // se muestras los elemntos del array
      <div className="item">
        <div className="image">
          <img src={this.props.image} width="100%" alt="texto" />
        </div>
        <div className="title">{this.props.title}</div>
        <div className="rating">
          <p>
            {
              this.state.stars.map(x=>
                  <img src="https://www.pngplay.com/wp-content/uploads/8/Gold-Vector-Star-Download-Free-PNG.png" width="32"/>
                
          
                )
            }
          </p>
          Calificación:
          <select value={this.props.rating}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>

          </select>

        </div>
        <div className="actions">
              <button>Eliminar</button>
        </div>
      </div>
    );
  }


}


export default Item;
