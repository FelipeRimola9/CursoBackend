const contenedor = new Contenedor()
contenedor.agregar(new Producto({nombre: 'lapiz', precio: '150', code: '01', stock: '14'}))
contenedor.agregar(new Producto({nombre: 'lapicera', precio: '300', code: '02', stock: '28'}))
contenedor.agregar(new Producto({nombre: 'tijera', precio: '500', code: '03', stock: '32'}))
contenedor.agregar(new Producto({nombre: 'goma', precio: '200', code: '04', stock: '20'}))
console.log(contenedor.obtenerTodo());
console.log(contenedor.obtenerLapiz())
