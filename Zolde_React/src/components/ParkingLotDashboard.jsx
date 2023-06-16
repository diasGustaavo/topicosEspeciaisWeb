import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ParkingLotDashboard() {
  const [parkinglot, setParkinglot] = useState('');
  const [vehicles, setVehicles] = useState([]);

  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:3001/parkinglot/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setParkinglot(data);
  //       setVehicles(data.vehicles);
  //     })
  // }, [])

  return ( 
    <div className="w-[40rem] h-[32rem] flex flex-col items-center py-4 gap-4 rounded-lg bg-white z-10">
      <h1 className="text-2xl font-bold text-blue-400">Veiculos estacionados</h1>
      <div className='w-full flex gap-8 justify-center items-center mt-4 px-4'>
        <Link to='/checkin'>
          <button className="w-full h-10 px-2 bg-green-500 rounded-lg text-white hover:bg-green-600" type="submit">Check-in de veículo</button>
        </Link>
        <Link to='/checkout'>
          <button className="w-full h-10 px-2 bg-blue-400 rounded-lg text-white hover:bg-blue-600" type="button">Check-out de veículo</button>        
        </Link>
        <Link to='/home'>
          <button className='rounded-lg px-2 py-1 text-white bg-red-400 hover:bg-red-600 self-start'>Voltar</button>
        </Link>
      </div>
      <div className='w-full h-full overflow-scroll hide-scroll-bar'>
        <h1 className='ml-10 self-start text-xl text-blue-600'>Total de vagas restantes: 10</h1>
        <h1 className='ml-10 self-start text-xl text-blue-600'>Total de vagas ocupadas: 0</h1>

        <ul className='flex flex-col gap-2 p-4 mt-3'>
          { vehicles.map((vehicle, index) => (
            <li key={index} className='flex flex-row gap-4 items-center justify-between bg-gray-200 rounded-lg p-2'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold text-blue-400'>Placa: {vehicle.plate}</h1>
                <h1 className='text-lg font-bold text-blue-400'>Modelo: {vehicle.model}</h1>
              </div>
            </li>
          ))}
          <li className='flex flex-row gap-4 items-center justify-between bg-gray-200 rounded-lg p-2 hover:bg-gray-300'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold text-blue-400'>Placa: KGF-4021</h1>
                <h1 className='text-lg font-bold text-blue-400'>Entrada: 09:00 16/06/2023</h1>
              </div>
              <div>
              <Link to='/checkout'>
                <button className='rounded-lg px-2 py-1 text-white bg-red-400 hover:bg-red-600'>Check-out</button>
              </Link>
              </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default ParkingLotDashboard