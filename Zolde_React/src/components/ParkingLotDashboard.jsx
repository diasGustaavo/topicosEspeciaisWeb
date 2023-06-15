import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ParkingLotDashboard() {
  const [parkingtLots, setParkingtLots] = useState([]);
  const [isNewParkingLotFormActive, setIsNewParkingLotFormActive] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [numberOfVacancies, setNumberOfVacancies] = useState(0);

  function toggleNewParkingLotForm() {
    setIsNewParkingLotFormActive(!isNewParkingLotFormActive);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleZipCodeChange(event) {
    setZipCode(event.target.value);
  }

  function handleNumberOfVacanciesChange(event) {
    setNumberOfVacancies(event.target.value);
  }

  function clear(){
    setName('');
    setAddress('');
    setZipCode('');
    setNumberOfVacancies(0);
  }

  function handleRemoveParkingLot(id) {
    const updatedParkingLots = parkingtLots.filter((parkingLot) => parkingLot.id !== id);
    setParkingtLots(updatedParkingLots);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData ={
      id: parkingtLots.length + 1,
      name,
      address,
      zipCode,
      numberOfVacancies
    }
    
    parkingtLots.push(formData);
    console.log(formData);

    clear();
    toggleNewParkingLotForm();
  }


  useEffect(() =>  {
  }, []);

  return (
    <div className="w-[26rem] h-[30rem] flex flex-col items-center gap-4 rounded-lg bg-white overflow-scroll hide-scroll-bar z-10">
    {
      isNewParkingLotFormActive ? (
        <form onSubmit={handleSubmit} className='w-full h-full flex flex-col items-center p-4 justify-between' action="">
          <h1 className='text-xl text-blue-500 font-bold mt-2'>
            Formulário de novo estacionamento
          </h1>

          <div className='h-full flex flex-col gap-6 p-1 items-start'>
            <label className='flex flex-col gap-2' htmlFor="">
              Nome do estacionamento
              <input className='px-2 py-1 rounded-lg' type="text" value={name} onChange={handleNameChange} placeholder='nome do estacionamento' />
            </label>

            <label className='flex flex-col gap-2' htmlFor="">
              Endereço
              <input className='px-2 py-1 rounded-lg' type="text" value={address} onChange={handleAddressChange} placeholder='endereço' />
            </label>

            <label className='flex flex-col gap-2' htmlFor="">
              CEP
              <input className='px-2 py-1 rounded-lg' type="text" value={zipCode} onChange={handleZipCodeChange} placeholder='CEP' />
            </label>

            <label className='flex flex-col gap-2' htmlFor="">
              Número de vagas
              <input className='px-2 py-1 rounded-lg' type="number" value={numberOfVacancies} onChange={handleNumberOfVacanciesChange} placeholder='número de vagas' />
            </label>
          </div>

          <div className='flex gap-2 text-white'>
            <button className='rounded-lg px-2 py-1 bg-green-500' type='submit'>Criar</button>
            <button className='rounded-lg px-2 py-1 bg-red-500' type='button' onClick={toggleNewParkingLotForm}>Cancelar</button>
          </div>
        </form>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-blue-400">Estacionamentos</h1>
          <div className='w-full flex justify-between items-center mt-4 px-4'>
          <button className='bg-green-500 rounded-lg px-2 py-1 text-white hover:bg-green-700 self-start' onClick={toggleNewParkingLotForm}>Novo estacionamento</button>
          <Link to='/home'>
            <button className='rounded-lg px-2 py-1 text-white bg-blue-500 hover:bg-blue-700'>Voltar</button>
          </Link>
          </div>
          <div className=''>
            <ul className='flex flex-col gap-2 p-4 mt-3'>
              {
                parkingtLots.length > 0 ? (
                  parkingtLots.map((parkingLot) => (
                    <li key={parkingLot.id} className='flex gap-5 justify-between'>
                      <span className='text-xl'>
                        {parkingLot.name}
                      </span>
                      <div className='flex gap-2'>
                        <button className='text-white rounded-lg px-1 bg-green-500 hover:bg-blue-500'>Editar</button>
                        <button className='text-white rounded-lg px-1 bg-red-500 hover:bg-blue-500' onClick={() => handleRemoveParkingLot(parkingLot.id)}>Excluir</button>
                      </div>
                    </li>
                  ))
                ) : (
                  <h1 className='text-xl text-slate-400'>Não há estacionamentos ainda.</h1>
                )
              }
              {/* <li className='flex gap-5'>
                <span className='text-xl'>
                  Estacionamento 1
                </span>
                <div className='flex gap-2'>
                  <button className='text-white rounded-lg px-1 bg-green-500 hover:bg-blue-500'>Editar</button>
                  <button className='text-white rounded-lg px-1 bg-red-500 hover:bg-blue-500'>Excluir</button>
                </div>
              </li> */}
              {/* <li className='flex gap-5'>
                <span className='text-xl'>
                  Estacionamento 1
                </span>
                <div className='flex gap-2'>
                  <button className='text-white rounded-lg px-1 bg-green-500 hover:bg-blue-500'>Editar</button>
                  <button className='text-white rounded-lg px-1 bg-red-500 hover:bg-blue-500'>Excluir</button>
                </div>
              </li>
              <li className='flex gap-5'>
                <span className='text-xl'>
                  Estacionamento 1
                </span>
                <div className='flex gap-2'>
                  <button className='text-white rounded-lg px-1 bg-green-500 hover:bg-blue-500'>Editar</button>
                  <button className='text-white rounded-lg px-1 bg-red-500 hover:bg-blue-500'>Excluir</button>
                </div>
              </li> */}
            </ul>
          </div>
        </>
      )
    }
    </div>
  )
}

export default ParkingLotDashboard