import React from "react";
import  '../styles/Menu.css';
import Search from './Search'
import PanelAdd from './PanelAdd'

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state ={newItemPanel:false};
        this.add= this.add.bind(this); //bind() is an inbuilt method in React that is used to pass the data as an argument to the function of a class based component.        this.onCancel =this.onCancel.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }
    add(){
        this.setState({newItemPanel:true});
        console.log("haz dado clic sobre le boton");
    }

    onCancel(){
        this.setState({newItemPanel:false})
    }
    render(){
        return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {
                        this.props.title
                    }

                </div>
                <div className="search">
                    <Search/>
                </div>
                <div className="actions"> 
                    <button onClick={this.add} className="button btn-blue"> +Añadir nuevo libro </button>
                </div>
            </div>
            {
               (this.state.newItemPanel)?
                <PanelAdd  onCancel={this.onCancel}/>:' '
            }
            
        </div>
        );
    }
}
export default Menu;