import {  useEffect,useState } from 'react';
import Producto from "./Producto"
import corte from "./assets/corte.jpg"
import peinado from "./assets/peinado.jpg"
import tinte from "./assets/tinte.jpg"
function App(){
  const estadoInicial = parseInt(localStorage.getItem("carrito" || 0))
  const [totalCompradas, setTotalCompradas] = useState(estadoInicial);

  useEffect(()=>{
    localStorage.setItem("carrito",totalCompradas)
  },[totalCompradas])

  const catalogo = [
    {id:1, nombre:"Peinado", precio:200, categoria:"Básicos", imagen:peinado},
    {id:2, nombre:"Corte", precio:150, categoria:"Básicos", imagen:corte},
    
  ]

 const manejarCompra = () => {
    setTotalCompradas(totalCompradas + 1);
  };

  return (
    
    <div className="mainContainer">
      <h1>Estetica Especializada le ofrece</h1>
        <h1>Servicios Adquiridos: {totalCompradas}</h1>
      <div className="catalogo">
      {catalogo.map((p)=>(
        <Producto 
        key={p.id} 
        foto={p.imagen} 
        nombre={p.nombre} 
        precio={p.precio} 
        categoria={p.categoria} 
        agregarCarrito={manejarCompra} />
      ))}
      </div>
      </div>

   

  )
}

export default App