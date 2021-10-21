import React, {useState} from "react";
import {withRouter} from "react-router-dom";

function Newtodo ({ dizajneri,history,addNewTodoToState }) {

  const [newTodo, setNewTodo] = useState({
    id: "",
    naslovAkcije: "",
    datumSlanja: "",
    datumPregledaAkcije: "",
    dizajneriNaZadatku: [""],
    završeno: false,
  });

  const [oznaceniDizajner,setOznaceniDizajner] = useState({
      oznacenidizajner : [{
          
      }],
  })

  let selektovaniDizajneri = dizajneri.map(slDizajner=>{
      return slDizajner.name +" "+ slDizajner.lastName;
  })

  let optionDizajner = selektovaniDizajneri.map(slDizajner =>(
    <option key={slDizajner.id} value={slDizajner.id}>
        {slDizajner}
        </option>
  ))

  /* const sviDizajneri = dizajneri.map((dizajner) => {
    return (
        <option key={dizajner.id} value={dizajner.id}>{dizajner.name} {dizajner.lastName}</option>
    );
  }); */


  const addNewTodo =() => {

    addNewTodoToState(newTodo);
    //history.push("/todos")
    console.log(oznaceniDizajner);
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <h2 className="display-4 m-4">Dodaj novi zadatak</h2>
                <div className="row">
                    <div className="col-10 offset-1">
                        <input type="text" onChange={e=>{setNewTodo({...newTodo,naslovAkcije:e.target.value})}} placeholder="Naziv akcije" className="form-control"/><br/>
                        <label>Kada je akcija pregledana</label>
                        <input type="date" onChange={e=>{setNewTodo({...newTodo,datumPregledaAkcije:e.target.value})}} placeholder="Datum pregleda akcije" className="form-control"/><br/>
                        
                        <label>Datum slanja u štampu</label>
                        <input type="date" onChange={e=>{setNewTodo({...newTodo,datumSlanja:e.target.value})}} placeholder="Datum slanja u štampu" className="form-control"/><br/>
                        <label>Odaberite jednog ili više dizajnera</label>
                        <select className="form-select" size="7" multiple={true} aria-label="multiple select example" onChange={e=>{setOznaceniDizajner({...oznaceniDizajner,oznacenidizajner:e.target.value})}}>
                        <option defaultChecked>Odaberite jednog ili više dizajnera</option>
                        {optionDizajner}
                        </select><br />
                        <button onClick={addNewTodo}>Dodaj zadatak</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default withRouter(Newtodo);
