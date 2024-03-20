import { useState } from 'react';
import {data} from './data';
import './App.css';

function App() {
const [wish, setWish] = useState(0);
const {id, name, image} = data[wish];
const [eWish, setEWish] = useState(data)
const [isActive, setActive] = useState("false");

const previusWish = () =>{
  setWish((wish) => {
   wish--;
   if (wish <0) {
    return data.length-1;
   }
   return wish;
  });
}
const nextWish = () => {
 setWish((wish) => {
  wish++;
  if (wish > data.length - 1) {
   wish = 0;
  }
  return wish;
 });
};

const toggleClass = () =>{
  setActive(!isActive);
}

const removeWish = (id) =>{
  let newWishList = eWish.filter(wish =>wish.id!==id);
  setEWish(newWishList);
}

  return (
   <div>
    <div className={isActive ? "active" : "inactive"}>
     <div className="header">
      <h1>My wish list</h1>
      <button className="btnEdit" onClick={toggleClass}>
       Edit Wish list
      </button>
     </div>
     <div className="container">
      <h2>
       {id} - {name}
      </h2>
     </div>
     <div className="container">
      <img src={image} alt="my wish" />
     </div>
     <div className="container btns">
      <button onClick={previusWish} className="btnMove">
       Previus
      </button>
      <button onClick={nextWish} className="btnMove">
       Next
      </button>
     </div>
    </div>

    <div className={isActive ? "inactive" : "active"}>
     <div className="header">
      <h1>My wish list</h1>
      <button className="btnEdit" onClick={toggleClass}>
       View Wish list
      </button>
     </div>
     {eWish.map((wish) => {
      const { id, name, image } = wish;
      return (
       <div key={id}>
        <div className="container">
         <h2>
          {id} - {name}
         </h2>
        </div>
        <div className="container">
         <img src={image} alt="my wish" />
        </div>
        <div className="container">
         <button className="btnMove" onClick={() => removeWish(id)}>
          Done!
         </button>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  );
}

export default App;