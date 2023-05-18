import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div>
            <div className="product">
                <div>{`${product.name} - ${product.categoria}`}</div>
                <div>
                    <img src={product.img} alt="" />
                    {product.price}
                </div>
                <div>
                    <Link to={`/detail/${product.id}`}>
                        <button>Detalle del producto</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
