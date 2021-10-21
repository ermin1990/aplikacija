import React from "react";
import "./Todos.css";

const Todos = ({todos}) =>{


  const allTodos = todos.map((todo) => {

    let dizajnerText = "Dizajner";
    if (todo.dizajneriNaZadatku.length > 1) {
      dizajnerText="Dizajneri";      
    }


    return (
      <div className="card d-flex flex-row kartica m-1">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h4>
                Naslov akcije:<br/> <strong>{todo.naslovAkcije}</strong>
              </h4>
            </div>
            <div className="col">
              <h4>Slanje u štampu:<br/> {todo.datumSlanja}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="text-muted mb-2">Akcija pregledana:<br/> {todo.datumPregledaAkcije}</h6>
            </div>
            <div className="col">
              <h6 className="text-muted mb-2">
                5 dana do slanja kataloga u štampu
              </h6>
            </div>
          </div>
          <h4 className="card-title">
            {dizajnerText} na ovom zadatku</h4>

          <ul className="list-group">
            {todo.dizajneriNaZadatku.map((dizajner) =>{
            return(
            <li className="list-group-item">
            <span>{dizajner}</span>
            </li>
            )})}        
          </ul>

          <div className="row">
            <div className="col">
              <div
                role="group"
                className="btn-group d-flex align-items-center flex-wrap"
              >
                <button className="btn btn-success" type="button">
                  Označi kao završeno
                </button>
                <button className="btn btn-warning" type="button">
                  Izmjeni podatke
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });


  return (
    <div className="container d-flex d-lg-flex flex-row flex-grow-1 justify-content-between align-items-start flex-sm-column flex-md-column flex-lg-row flex-xl-row justify-content-xl-center align-items-xl-start">
      {allTodos}
    </div>
  );
};

export default Todos;
