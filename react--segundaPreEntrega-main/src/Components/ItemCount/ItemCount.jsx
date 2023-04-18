import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock=10, initial=1, onAdd}) => {

    const [count, setCount] = useState(initial);

    const add = () => (count < stock) ? setCount(count + 1) : null;
    const subtract = () => (count > initial) ? setCount(count - 1) : null;

    const handleOnAdd = () => onAdd(count);

  return (
    <div className="card-count">
        <div className="header-card-count">
            <span>Cantidad: {count}</span>
        </div>
        <div className="body-card-count">
            <button className="button-card-count-add" onClick={add}> + </button>
            <button className="button-card-count-subtract" onClick={subtract}> - </button>
        </div>
        <div className="footer-card-count">
            <button className="button-card-count" onClick={ handleOnAdd }>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount