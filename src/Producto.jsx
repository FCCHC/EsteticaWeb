function Producto({nombre, precio, categoria,foto,agregarCarrito}){

    return(
        <div className="Producto">
          
            <div className="cardProducto">
            <div className="cardImagen">
            <img src={foto}/>
            </div>
            <div className="cardInfo">
            <h3>Producto: {nombre} </h3>
            <p>Precio ${precio}</p>
            <p>Categoria {categoria}</p>
            <button className="cardButton" onClick={agregarCarrito}> Agregar al Carrito</button>
            </div>
        </div>
        </div>
    )
}

export default Producto