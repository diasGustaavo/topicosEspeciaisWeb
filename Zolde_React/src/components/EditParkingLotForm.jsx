import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function EditParkingLotForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [numberOfVacancies, setNumberOfVacancies] = useState(0);
  const [vehicles, setVehicles] = useState([]);
  const [parkingLot, setParkingLot] = useState({});

  const { id } = useParams();


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

  function handleSubmit(event) {
    event.preventDefault();

    const updatedParkingLot = {
      name,
      address,
      zipCode,
      numberOfVacancies
    }
    
    console.log(updatedParkingLot);

    setParkingLot(updatedParkingLot);

    clear();
  }

  // useEffect(() => {
  //   fetch(`http://localhost:3001/parkinglot/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setName(data.name);
  //       setAddress(data.address);
  //       setZipCode(data.zipCode);
  //       setVehicles(data.vehicles);
  //       setNumberOfVacancies(data.numberOfVacancies);
  //     })
  // }, [])

  return (
    <div className="w-[26rem] h-[30rem] flex flex-col items-center gap-4 rounded-lg bg-white overflow-scroll hide-scroll-bar z-10">
      <form onSubmit={handleSubmit} className='w-full h-full flex flex-col items-center p-4 justify-between' action="">
        <h1 className='text-xl text-blue-500 font-bold'>
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
          <Link to='/home'>
            <button className='rounded-lg px-2 py-1 bg-red-500' type='button'>Cancelar</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EditParkingLotForm