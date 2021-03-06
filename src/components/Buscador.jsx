import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { buscarPlatos, } from '../redux/action/action';
import { useDispatch } from 'react-redux';
import "../index.css";

const Buscador = () => {

   //State para cargar el titulo del menu en el input
   const [menu, setMenu] = useState({
      titulo: "",
   })
   const { titulo } = menu

   let navigate = useNavigate();

   const handleChange = e => {
      setMenu({
         ...menu,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      dispatch(buscarPlatos(titulo))
      navigate("/home");
   }

   const dispatch = useDispatch() //useDispatch conecta las action con los components para poder ser usados

   return (
      <div className="col px-3">
         <form
            onSubmit={handleSubmit}
         >
            <div className="buscador">
               <input
                  className="formi"
                  type="text"
                  name="titulo"
                  placeholder="Buscar tu plato en Nappi..."
                  value={titulo}
                  onChange={handleChange}
               />
               <input
                  className="boton btn btn-primary"
                  type="submit"
                  value="Buscar"
               />
            </div>
         </form>
      </div>
   )
}

export default Buscador