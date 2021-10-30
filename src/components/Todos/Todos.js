import React from "react";
import "./Todos.css";

const Todos = ({todos, chackDone}) =>{


  const allTodos = todos.map((todo) => {

    console.log(todo);


    let dizajnerText = "Dizajner";
    if (todo.drugiDizajnerNaZadatku) {
      dizajnerText="Dizajneri";      
    }

    //Datum pregleda akcije, pretvaranje iz UNIX u Normalan Datum (unos iz Firebase)/ Nećemo koristiti ovaj
    /* const datumPregleda = new Date((todo.datumPregleda)*1000);
    const prikazDatumPregleda = datumPregleda.toLocaleDateString('hr-HR'); */

    //Datum pregleda akcije, pretvaranje iz input formata u normalno (Samo prikazivanje ko tekst)
    const kadJePregledan = (new Date(todo.datumPregledaAkcije)).toLocaleDateString('hr-HR');

    //Datum slanja, unos iz Inputa formata u normalno (Samo prikazivanje ko tekst)
    const kadSeSalje = (new Date(todo.datumSlanja)).toLocaleDateString('hr-HR');


    //Datum za slanje kataloga Pretvaranje iz datuma u UNIX radi računanja broja dana do slanja
    const datumslanja = (new Date((todo.datumSlanja)).getTime()/1);
    
    //Trenutno vrijeme
    const trenutnoVrijeme = Date.now();

    //Koliko dana do slanja kataloga
    const diffTime = Math.abs(trenutnoVrijeme - datumslanja )
    const diffDays = (Math.ceil(diffTime/(1000*60*60*24)));
    

    //Do slanja ostalo text
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    let doSlanjaText='';
    let danaText = 'dana';
    if (diffDays == 1){
      danaText = ' dan'
    }
    
    let taskDone;
    if (todo.zavrseno) {
      doSlanjaText= "Završeno, svaka čast"; 
       taskDone = true;
    } else if (doSlanjaText=0){
      doSlanjaText="Treba poslati katalog u štampu danas";
    } else{
      doSlanjaText= diffDays + " " + danaText + " " + "do slanja kataloga";
    }
   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

   const updateDone = (id,done) =>{
    chackDone(id,done);
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
              <h4>Slanje u štampu:<br/> {kadSeSalje}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="text-muted mb-2">Akcija pregledana:<br/> {kadJePregledan}</h6>
            </div>
            <div className="col">
              <h4 className="text-muted mb-2">
              {taskDone && 
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 17 17">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
                }  
                {doSlanjaText}
              </h4>
            </div>
          </div>
          <h4 className="card-title">
            {dizajnerText} na ovom zadatku</h4>

          <ul className="list-group">
            <li className="list-group-item" key={todo.dizajnerNaZadatku.id}>
            <span>{todo.dizajnerNaZadatku}</span>
            </li>

            {todo.drugiDizajnerNaZadatku && 
            <li className="list-group-item" key={todo.drugiDizajnerNaZadatku.id}>
            <span >{todo.drugiDizajnerNaZadatku}</span>
            </li>}
                   
          </ul>

          <div className="row">
            <div className="col">
              <div
                role="group"
                className="btn-group d-flex align-items-center flex-wrap"
              >
                <button className="btn btn-success" type="button" onClick={()=> {updateDone(todo.id, todo.zavrseno)}}>
                {taskDone ?
                <label>Ipak nije završeno, vrati</label> : <label>Označi kao završeno</label>
                }  
                </button>
                <button className="btn btn-warning" type="button">
                  Izmjeni podatke - <small><i>Ova opcija je još isključena</i></small>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      );
      });


  return (
      <div className="container-xl p-3">
        <div className="text-center"><h4>Zadaci</h4></div>
      {allTodos}<br/><br/>
    </div>
  );
};

export default Todos;
