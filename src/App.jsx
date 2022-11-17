import React, { useState } from "react";
import "./App.css";
import { v4 as Uuidv4 } from "uuid";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";

import Whislist from "./components/Wishlist";
import WishiInput from "./components/WishInput";
import WishSave from "./components/WishSave";
import WishOrder from "./components/WishOrder";

/**
 * Manage a wish list.
 * @returns HTMl with a wish list.
 */
function App() {
  let initialWishes = JSON.parse(localStorage.getItem("wishes"));
  const backupWishes = JSON.parse(localStorage.getItem("wishes"));
  const searchTextBar = "";
 
  var idModify='';
  
  if (initialWishes === null) {
    initialWishes = [
      { id: Uuidv4(), text: "Aprender React", done: false },
      { id: Uuidv4(), text: "Dar de alta a los alumnos en moodle", done: true },
      { id: Uuidv4(), text: "Preparar apuntes", done: false },
      { id: Uuidv4(), text: "Desayunar", done: true },
    ];
  }

  const [wishes, setWishes] = useState(initialWishes);
  const [search, setSearch] = useState(searchTextBar);

  return (
    <div className="app">
      <h1>
        <img src="icon.png" alt="" width="50" height="60" />
        My wishlist
      </h1>

      <WishiInput
        onNewWish={(newWish) => {
          //console.log("Elemento de la lista añadido");
          setWishes([...wishes, newWish]);
        }}
        text={search}
      />

      <Whislist
        whishes={wishes}
        onUpdateWish={(updatedWish) => {
          // opcion 2
          const updatedWishes = [...wishes];
          const modifyWish = updatedWishes.find(
            (wish) => wish.id === updatedWish.id
          );
          modifyWish.text = updatedWish.text;
          modifyWish.done = updatedWish.done;
          setWishes(updatedWishes);
          //console.log(`cambio en lista: ${wishes}`);
        }}
        onRemoveWish={(idBorrado) => {
          //console.log(`Elemento de la lista borrado ${idBorrado}`);
          const filterWishes = wishes.filter((wish) => wish.id !== idBorrado);
          //console.log(filterWishes);
          setWishes(filterWishes);
        }}
  
        onSearchWish={(searchText) => {
          var existe=false;
          if (searchText !== "") {
            //console.log(searchText);
            setSearch(searchText);
            //console.log(searchTextBar);
            for (let i = 0; i < wishes.length; i += 1) {
              if (wishes[i].text.includes( searchText)) {
                //console.log(`Existe: ${wishes[i].text}`);
                existe=true;
              }
            }
            if(existe===true){
            
              const filterWishes = wishes.filter((wish) => wish.text.includes(searchText));
              setWishes(filterWishes);
            
            }else{}
            
           
          } else if (searchText === "") {
            setWishes(backupWishes);
            setSearch(searchText);
          }
        }}


        onModifiedWish={(idEdit,idText)=>{
         
          console.log(idEdit+"  "+idText);
          const updatedWishes = [...wishes];
          const modifyWish = updatedWishes.find(
            (wish) => wish.id === idEdit
          );
          modifyWish.text = idText;
      
          setWishes(updatedWishes);
          localStorage.setItem("wishes", JSON.stringify(wishes));
        }}
        text={search}
      />
 

  
      <WishSave
        onWishesSave={() => {
          //console.log("clikeado salvar");
          localStorage.setItem("wishes", JSON.stringify(wishes));
        }}
        text={search}
      />
    </div>
  );
}

export default App;
