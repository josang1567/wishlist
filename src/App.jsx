import React, { useState } from 'react';
import './App.css';
import { v4 as Uuidv4 } from 'uuid';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import Whislist from './components/Wishlist';
import WishiInput from './components/WishInput';

const initialWishes = [
  { id: Uuidv4(), text: 'Aprender React', done: false },
  { id: Uuidv4(), text: 'Dar de alta a los alumnos en moodle', done: true },
  { id: Uuidv4(), text: 'Preparar apuntes', done: false },
  { id: Uuidv4(), text: 'Desayunar', done: true },
];

function App() {
 

  console.log(initialWishes);
  const [wishes, setWishes] = useState(initialWishes);
  return (
    <>
      <h1>My whishlist  </h1>
      <WishiInput onNewWish={(newWish) => {
        console.log('Se ha lanzado evento');
        setWishes([...wishes, newWish]);
      }}
      />
      <Whislist 
        whishes={wishes}
         onUpdateWish={(updatedWish)=>{
          //opcion 1
          /*const updatedWishes=wishes.map((wish)=>{
            if(wish.id===updatedWish.id){
              return updatedWish;
            }
            return wish;
          });
          setWishes(updatedWishes);*/
          //opcion 2 
        const updatedWishes =[...wishes];
        const modifyWish=updatedWishes.find(wish=> wish.id===updatedWish.id);
        modifyWish.done=updatedWish.done;
        setWishes(updatedWishes);
        
        console.log("PRUEBA"+wishes);
      }} />
    </>
  );
}

export default App;
