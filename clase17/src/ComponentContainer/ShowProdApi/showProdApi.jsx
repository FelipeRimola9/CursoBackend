let products = [
    {
        id: "1",
        name: "transistores",
        categoria: "componentes1",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/transistores.webp',
    },
    {
        id: "2",
        name: "resistencias",
        categoria: "componentes1",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/resistencias.webp',
    },
    {
        id: "3",
        name: "capacitores",
        categoria: "componentes1",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/capacitores.webp',
    },
    {
        id: "4",
        name: "circuitos-integrados2",
        categoria: "componentes2",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/circuitos-integrados.webp',
    },
    {
        id: "5",
        name: "plaqueta-virgen",
        categoria: "componentes2",
        stock: "100",
        price: "1500",
        img: '/src/assets/images/plaqueta-virgen.webp',
    },
];

export const getProductsByCategory = (category) => {
    return new Promise(res => {
        const productos = products.filter(product => product.categoria === category);
        setTimeout(() => {
            res(productos);
        },1500);
    });
}

export const getProducts = () => {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(products);
        },2000);
    });
}


export const getProductId = (itemId) => {
    return new Promise(res => {
        const findProductId = products.find(product => product.id === itemId);
        setTimeout(() => {
            res(findProductId)
        },1500);
    })
}
