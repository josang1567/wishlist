import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as Uuidv4 } from "uuid";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";

import Whislist from "./components/Wishlist";
import WishiInput from "./components/WishInput";
import WishSave from "./components/WishSave";
import WishOrder from "./components/WishOrder";
import WishSearch from "./components/WishSearch";
import { Toast } from "bootstrap";

/*const initialWishes = [
  { id: Uuidv4(), text: 'Aprender React', done: false },
  { id: Uuidv4(), text: 'Dar de alta a los alumnos en moodle', done: true },
  { id: Uuidv4(), text: 'Preparar apuntes', done: false },
  { id: Uuidv4(), text: 'Desayunar', done: true },
];*/
/**
 * Manage a wish list.
 * @returns HTMl with a wish list.
 */
function App() {
  let initialWishes = JSON.parse(localStorage.getItem("wishes"));
  let backupWishes=JSON.parse(localStorage.getItem("wishes"));
  let searchTextBar="";
  if (initialWishes === null) {
    initialWishes = [
      { id: Uuidv4(), text: "Aprender React", done: false },
      { id: Uuidv4(), text: "Dar de alta a los alumnos en moodle", done: true },
      { id: Uuidv4(), text: "Preparar apuntes", done: false },
      { id: Uuidv4(), text: "Desayunar", done: true },
    ];
  }
  console.log(initialWishes);
  const [wishes, setWishes] = useState(initialWishes);
  const [search, setSearch]=useState(searchTextBar);
  const searhObject = "";
  useEffect(() => {
    console.log("Render app x " + wishes.length);
  });
  return (
    <div className="app">
      <h1>
        <img src="icon.png" width="50" height="60" />
        My wishlist
      </h1>

      <WishiInput
        onNewWish={(newWish) => {
          console.log("Elemento de la lista añadido");
          setWishes([...wishes, newWish]);
        }}
        text={search}
      />


      <Whislist
        whishes={wishes}
        onUpdateWish={(updatedWish) => {
          //opcion 2
          const updatedWishes = [...wishes];
          const modifyWish = updatedWishes.find(
            (wish) => wish.id === updatedWish.id
          );
          modifyWish.text = updatedWish.text;
          modifyWish.done = updatedWish.done;
          setWishes(updatedWishes);

          console.log("cambio en lista: " + wishes);
        }}
        onRemoveWish={(id) => {
          console.log("Elemento de la lista borrado " + id);
          const filterWishes = wishes.filter(wish => wish.id != id);

          console.log(filterWishes);
          setWishes(filterWishes);



        }}
        onSearchWish={(searchText) => {
          if(searchText!==""){
            console.log(searchText);
          setSearch(searchText);
            console.log(searchTextBar);
            for (let i = 0; i < wishes.length; i++) {
              if (wishes[i].text === searchText) {
                console.log("Existe: "+wishes[i].text);
                
              } 
  
            }
            const found = wishes.find(element => {
              return element.text === searchText;
            });
           
            const filterWishes = wishes.filter(wish => wish.id == found.id);
            
            setWishes(filterWishes);
          }else if((searchText==="")) {
            setWishes(backupWishes);
            setSearch(searchText);
          }
        

        }}
      />

      <WishOrder
        onWishesOrder={() => {
          console.log("Ordenando elementos");
          setWishes(wishes.sort());
        }}
      />
      <WishSave
        onWishesSave={() => {
          console.log("clikeado salvar");
         
          localStorage.setItem("wishes", JSON.stringify(wishes));
        }}
        text={search  }
      />
    </div>
  );
}
const remove = () => {
  setWishes((current) => {
    current.filter((wish) => wish.text !== "Desayunar");
  });
};
export default App;
