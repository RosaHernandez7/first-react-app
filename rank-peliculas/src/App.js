import React from "react";
import "./styles/App.css";
import Menu from "./componentes/Menu"; //archivo JS
import List from "./componentes/List"; //archivo JS

// function App() {  //se declaran un  componenete como funcion
//   return (
//     <div className='app'>
//       <Menu title="Rommi's movies"/>
//       <List/>

//     </div>
//   );
// }

class App extends React.Component {
  //all inside of the class
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 0,
          rating: 4,
          title: "Harry Potter y el caliz de fuego",
          image: "https://www.adobe.com/es/express/create/cover/media_18d86248e8c6c00f18e7461e58ee5291a8485f45f.png?width=400&format=png&optimize=medium"
        },
        {
          id: 1,
          rating: 3,
          title: "The shining",
          image: "https://i.pinimg.com/236x/22/fd/25/22fd25dddb9acdf6a828ee27f184f250.jpg"
        },
        {
          id: 2,
          rating: 5,
          title: "Código Da Vinci",
          image: "http://1.bp.blogspot.com/--cIsGAtMI1k/VZFyYKszkYI/AAAAAAAAEug/W7EwQyGucHk/s1600/portada-descubrimiento-brujas_grande1_opt.jpg"
        },
        {
          id: 3,
          rating: 5,
          title: "El principito",
          image: "http://3.bp.blogspot.com/-fkN6HkQYIAk/VZF2nuWfZEI/AAAAAAAAEus/qQdemPwj0nU/s1600/todas-las-hadas-del-reino_opt.jpg"
        },
        {
          id: 4,
          rating: 5,
          title: "Sobrenatural",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1rdAIaGfvrCcTt5x-ArXMpj_L7k7IbclIrU4p9xenrRaxK0wlTMWaNJhKHYE79N5dSY&usqp=CAU"
        },
      ],
    };
  }

  render() {
    //se declaran un  componenete como funcion
    return (
      <div className="app">
        <Menu title="Rommi's movies" />
        <List items={this.state.books} />{" "}
        {/* adding the array as a property  */}
      </div>
    );
  }
}

export default App;
