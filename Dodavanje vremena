import React from "react";
import "./Todos.css";

const Todos = ({todos}) =>{


  const allTodos = todos.map((todo) => {

    let dslanja = todo.datumSlanja;
    let trenutniDan = Date.now();

    const trenDan = new Date(trenutniDan).setHours(0,0,0,0);

    const datumSlanjaKataloga = new Date(dslanja).getTime()/1000;

    console.log("Krajnji dan "+ datumSlanjaKataloga);
    console.log("Trenutni dan "+ trenDan);


    let dizajnerText = "Dizajner";
    if (todo.drugiDizajnerNaZadatku) {
      dizajnerText="Dizajneri";      
    }


    return (
       <div key={todo.id} className="card flex-row kartica m-1">
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
            <li className="list-group-item" key={todo.dizajnerNaZadatku.id}>
            <span>{todo.dizajnerNaZadatku}</span>
            </li>

            {todo.drugiDizajnerNaZadatku && 
            <li className="list-group-item">
            <span key={todo.drugiDizajnerNaZadatku.id}>{todo.drugiDizajnerNaZadatku}</span>
            </li>}
                   
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
      <div className="container">
      {allTodos}
    </div>
  );
};

export default Todos;
