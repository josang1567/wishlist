import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import Whislist from './components/Wishlist';
import WishiInput from './components/WishInput';

const initialWishes = [
  { text: 'Aprender React', done: false },
  { text: 'Dar de alta a los alumnos en moodle', done: true },
  { text: 'Preparar apuntes', done: false },
  { text: 'Desayunar', done: true },
];

function App() {
  const [wishes,setWishes]= useState(initialWishes);
  return (
    <>
      <h1>My whishlist  </h1>
      <WishiInput  onNewWish={(newWish)=>{
        console.log("Se ha lanzado evento")
        setWishes([...wishes,newWish]);
      }
      }/>
      <Whislist whishes={wishes} />
    </>
  );
}

export default App;
