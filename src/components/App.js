import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";



function App() {
  //Checks conditions if true keep app light if false make app dark
  function click(){
  mode ? setMode(false) : setMode(true);
  }
  const [mode, setMode] = useState(false);  // Initially false keep app light
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light" // See initial conditions

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> click()}>{mode ? 'Light' : 'Dark'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

