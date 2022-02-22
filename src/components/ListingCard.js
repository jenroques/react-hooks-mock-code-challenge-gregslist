import React, { useState } from "react";

function ListingCard({id, deleteFromItemsArray, location, image, description}) {

  const [toggleLike, setToggleLike] = useState(false)

  function handleToggle() {
    setToggleLike(toggleLike => !toggleLike)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={ image } alt={description} />
      </div>
      <div className="details">
        {toggleLike ? (
          <button onClick={handleToggle} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleToggle} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => {deleteFromItemsArray(id)}} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
