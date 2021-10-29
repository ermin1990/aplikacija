import React, {useState} from "react";
import {withRouter} from "react-router-dom";

function Newtodo ({ dizajneri,history,addNewTodoToState }) {

  const [newTodo, setNewTodo] = useState({
    id: Date.now(),
    naslovAkcije: "",
    datumSlanja: "",
    datumPregledaAkcije: "",
    dizajnerNaZadatku: "",
    drugiDizajnerNaZadatku: "",
    završeno: false,
  });


   const sviDizajneri = dizajneri.map((dizajner) => {
    let dizajnerFullName = dizajner.name + " " + dizajner.lastName;
    return (
        <option key={dizajner.id} value={dizajnerFullName}>{dizajner.name} {dizajner.lastName}</option>
    );
  }); 



  const addNewTodo =() => {
    const {naslovAkcije, datumSlanja, datumPregledaAkcije, dizajnerNaZadatku} = newTodo;
    if (!(naslovAkcije && datumSlanja && datumPregledaAkcije && dizajnerNaZadatku)){
     alert("Molimo Vas popunite sve!")
      console.log(newTodo);
    }else{
      addNewTodoToState(newTodo);
      history.push("/todos")
      console.log(newTodo);
    }

    
    
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-10 offset-1">
                <h2 className="display-4 m-4">Dodaj novi zadatak</h2>
                <div className="row">
                    <div className="col-10 offset-1">
                        ID: <input type="number" disabled value={Date.now()}></input>
                        <input required type="text" onChange={e=>{setNewTodo({...newTodo,naslovAkcije:e.target.value})}} placeholder="Naziv akcije" className="form-control"/><br/>
                        <label>Kada je akcija pregledana</label>
                        <input required="required" type="date" onChange={e=>{setNewTodo({...newTodo,datumPregledaAkcije:e.target.value})}} placeholder="Datum pregleda akcije" className="form-control"/><br/>
                        
                        <label>Datum slanja u štampu</label>
                        <input required="required" type="date" onChange={e=>{setNewTodo({...newTodo,datumSlanja:e.target.value})}} placeholder="Datum slanja u štampu" className="form-control"/><br/>
                        <label>Odaberite jednog dizajnera</label>
                        <select className="form-select" size="7" multiple={true} aria-label="multiple select example" onChange={e=>{setNewTodo({...newTodo,dizajnerNaZadatku:e.target.value})}}>
                        <option defaultChecked>Odaberite jednog ili više dizajnera</option>
                        {sviDizajneri}
                        </select><br />

                        <label>Odaberite drugog dizajnera na projektu</label>
                        <select className="form-select" size="7" multiple={true} aria-label="multiple select example" onChange={e=>{setNewTodo({...newTodo,drugiDizajnerNaZadatku:e.target.value})}}>
                        <option defaultChecked>Odaberite jednog ili više dizajnera</option>
                        {sviDizajneri}
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
