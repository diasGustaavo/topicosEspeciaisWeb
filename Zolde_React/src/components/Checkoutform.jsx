import { Link, useNavigate } from "react-router-dom"


function Checkoutform() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <form className="w-[44rem] h-fit flex flex-col p-8 gap-4 justify-center items-center rounded-lg bg-white">
      <h1 className="font-bold text-xl">Pagamento para realizar check-out</h1>
      <div className="flex gap-2"> 

        <div className="flex flex-col">
          <label htmlFor="number" >N°</label>
          <input className="bg-zinc-200 rounded-md p-2" type="number" />        
        </div>

        <div className="flex flex-col">
          <label htmlFor="plate">Placa</label>
          <input className="bg-zinc-200 rounded-md p-2" type="text" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category">Categoria</label>
          <input className="bg-zinc-200 rounded-md p-2" type="text" />
        </div>

      </div>

      <div className="w-full flex justify-evenly">

        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="entrance">Data/hora de entrada</label>
            <div className="flex gap-2">
              <input className="bg-zinc-200 rounded-md p-2" type="date" />    _
              <input className="bg-zinc-200 rounded-md p-2" type="time" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="exit">Data/hora de saída</label>
            <div className="flex gap-2">
              <input className="bg-zinc-200 rounded-md p-2" type="date" /> _   
              <input className="bg-zinc-200 rounded-md p-2" type="time" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-around">

          <div className="flex flex-col">
            <label htmlFor="duration">Permancência</label>
            <input className="bg-zinc-200 rounded-md p-2" type="text"  />
          </div>

          <div className="flex flex-col">
            <label htmlFor="total">Total</label>
            <input className="bg-zinc-200 rounded-md p-2" type="text"  />  
          </div>

        </div>
      </div>

      <div className="w-full flex items-center justify-center gap-8">

        <div className="flex items-center gap-2">
          <label htmlFor="paid">Valor: </label>
          <input className="bg-zinc-200 rounded-md p-2" type="text" />  
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="change">Troco: </label>
          <input className="bg-zinc-200 rounded-md p-2" type="text" />    
        </div>

      </div>

      <div className="w-10/12 flex flex-col gap-2">
        <label className="self-start" htmlFor="aditionalServices">Serviços  adicionais</label>
        <input className="w-full bg-zinc-200 rounded-md p-2" />
      </div>

      <div className="flex gap-2">
        <Link to='/home'>
          <button type="submit" className='w-32 h-12 bg-blue-500 rounded-lg text-white font-bold hover:bg-green-400'>Pagar</button>
        </Link>
        <button className='w-32 h-12 bg-red-500 rounded-lg text-white font-bold hover:bg-green-400' type="button"  onClick={handleGoBack}>Cancelar</button>
      </div>
    </form>
  )
}

export default Checkoutform