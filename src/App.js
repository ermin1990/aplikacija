import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Newtodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";

import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

import "./css/App.css";

function App() {


  const dizajneri= [
    {
      id: 1,
      name: "Ermin",
      lastName: "Selimović",
    },
    {
      id: 2,
      name: "Emir",
      lastName: "Demirović",
    },
    {
      id: 3,
      name: "Mirsad",
      lastName: "Ramić",
    },
    {
      id: 4,
      name: "Emir",
      lastName: "Hasanbašić",
    },
    {
      id: 5,
      name: "Alen",
      lastName: "Bajrektarević",
    },
    {
      id: 6,
      name: "Ismar",
      lastName: "Sadiković",
    },
  ];

  /* const [todos,setTodos] = useState([
    {
      id: 1,
      naslovAkcije: "Redovni Katalog Oktobar I",
      datumSlanja: "2021-11-5",
      datumPregledaAkcije: "2021-10-22",
      dizajnerNaZadatku: "Ermin Selimović",
      drugiDizajnerNaZadatku: "",
      zavrseno: false,
    }
  ]) */

  const [todos, setTodos] = useState([]);

  const todosCollectionRef = collection(db, "todos");

  useEffect(() =>{

    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getTodos();
  },[]);


  const addNewTodoToState = async(todo) => {
    setTodos([...todos,todo])
    await addDoc(todosCollectionRef, todo)
  }
  
  // UPDATE ZAVRSENO
  let check;
  const chackDone = async (id,done)=>{
    const todoDoc = doc(db, "todos", id)
    if(!done){
      check = {zavrseno: true}
      await updateDoc(todoDoc, check)
    } else {check = {zavrseno: false}
    await updateDoc(todoDoc, check)
  }
    window.location.reload('/todos')
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home}></Route>
      <Route path="/todos">
        <Todos todos={todos} chackDone={chackDone} />
      </Route>
      <Route path="/newtodo">
        <Newtodo dizajneri={dizajneri} addNewTodoToState={addNewTodoToState} />
      </Route>
      <Route path="/about" component={About}></Route>
    </BrowserRouter>
  );
}

export default App;
