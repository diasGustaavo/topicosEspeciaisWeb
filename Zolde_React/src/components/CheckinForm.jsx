import React from 'react'
import { Link } from 'react-router-dom'

function CheckinForm() {
  return (
    <form className="w-96 h-482 flex flex-col p-8 gap-4 justify-center items-center rounded-lg bg-white">
      <div className='flex flex-col'>
        <label for="plate">Placa do veículo</label>
        <input className='bg-slate-200 rounded-md p-2' type="text" name="plate" id="plate"/>
      </div>

      <div className=''>
        <p>Categoria de veículo: </p>
        <div>
          <input type="radio" id="pequeno" name="category" value="pequeno" />
          <label for="pequeno">Pequeno</label>
        </div>
        <div>
          <input type="radio" id="grande" name="category" value="grande" />
          <label for="grande">Grande</label>
        </div>
        <div>
          <input type="radio" id="moto" name="category" value="moto" />
          <label for="moto">Moto</label>
        </div>
      </div>

      <label for="aditional-services">Serviços adicionais: </label>
      <input className='bg-slate-200 rounded-md border border-zinc-200 p-2' type="text" name="aditional-services" id="aditional-services"/>

      <div className='flex gap-2'>
        <Link to='/home'>
          <button className='w-32 h-12 bg-blue-500 rounded-lg text-white font-bold hover:bg-green-400' type="submit" id="btn-entrance">Registrar entrada</button>
        </Link>
        <Link to='/home'>
          <button className='w-32 h-12 bg-red-500 rounded-lg text-white font-bold hover:bg-green-400' type="button" id="btn-entrance">Cancelar</button>
        </Link>
      </div>
      
    </form>
  )
}

export default CheckinForm