import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
    const onAdd = (cant) => {
        console.log(cant);
    };

    return (
        <div className="item-detail">
            <div className="item">
                <div className="product">
                    <img src={product.img} alt={product.name} />
                    <h3>nombre: {product.name}</h3>
                    <h3>categoria: {product.categoria}</h3>
                    <h4>precio: {product.price}</h4>
                </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
