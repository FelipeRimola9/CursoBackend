import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../../ComponentContainer/ItemList/ItemList";
import {
    getProducts,
    getProductsByCategory,
} from "../../ComponentContainer/ShowProdApi/showProdApi";
import "./ItemListConteiner.scss";

const ItemListContainer = ({ greeting, myName }) => {
    const [products, setProducts] = useState([]);

    const { idCategory } = useParams();

    // console.log(idCategory);

    useEffect(() => {
        if (idCategory) {
            setTimeout(() => {
                getProductsByCategory(idCategory)
                .then((products) => {
                    setProducts(products);
                });
            }, 2000);
        } else {
            getProducts()
            .then((products) => {
                setProducts(products);
            });
        }
    }, [idCategory]);

    return (
        <div className="item-list-container">
            <p>
                {greeting}
                {myName}
            </p>
            <section>
                <ItemList products={products} />
            </section>
        </div>
    );
};

export default ItemListContainer;

// showProdApi()
//     .then((data) =>
//         setProducts(data.filter((prod) => prod.category === id))
//     )
//     .catch((err) => console.error(err));
