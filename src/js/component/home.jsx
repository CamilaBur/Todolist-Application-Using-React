import React, { useState } from "react";
//create your first component
const Home = () => {
  //declaracion de estados
  // espacio de memoria, la funcion que actualiza elvalor inicial
  const todos = [""]

  //1. creamos un estado del input tareas, es lo que el usuario va a escribir porque es un string vacio, y luego se actualiza y se guarda en el array
  const [tareas, setTareas] = useState(""); 
  const [lista, setLista] = useState([]);

  //3.vinculamos la funcion
  //function handletareas(e) {setTareas(e.target.value); setLista(e.target.value);}

  //4. procesamos todos los datos del formulario
  function enviarDatos(e) {
    e.preventDefault(); // detenemos el comportamiento predeterminado para procesar nuestro codigo
    console.log(lista, tareas);
  }
  return (
    <>
      <form className="container" onSubmit={enviarDatos}>
        {/* aca nuestra card */}
        <div className="card">
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              aria-describedby="este es el input del boton"
              onChange={(e) => {
                setTareas(e.target.value);
              }}
              placeholder="enter your list item here ..."
            />
          </div>
        </div>
        {/* aca nuestro boton */}
        <button type="submit" className="btn btn-primary" onChange={(e) => {
                setLista(e.target.value);
              }} onClick={enviarDatos}>
          Agregar tarea
        </button>
      </form>
    </>
  );
};
export default Home;
