import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [itemsArray, setItemsArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res  => res.json())
    .then(setItemsArray)
  }, []);

  const filterdItems = itemsArray.filter(item => item.description.toLowerCase().includes(searchTerm.toLowerCase()))


  function deleteFromItemsArray(itemId) {
    const newStateArray = itemsArray.filter(item => item.id !== itemId)
    setItemsArray(newStateArray)
  }

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ListingsContainer deleteFromItemsArray={deleteFromItemsArray} itemsArray={filterdItems}/>
    </div>
  );
}

export default App;
