import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-800">
      <div className="w-72 h-fit flex flex-col p-8 gap-2 justify-center items-center rounded-lg bg-white">
        <Link to='/login'>
          <button className="absolute top-[22%] left-[55%] text-white rounded-md p-2 bg-red-500">Log out</button>
        </Link>
        <h1 className="w-full text-xl font-bold self-center text-zinc-700">O que você quer fazer?</h1>
        <Link className="w-full" to='/checkin'>
          <button className="w-full h-16 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="submit">Check-in de veículo</button>
        </Link>
        <Link className="w-full" to='/checkout'>
          <button className="w-full h-16 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="button">Check-out de veículo</button>        
        </Link>
        <Link className="w-full" to='/dashboard'>
          <button className="w-full h-16 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="button">Gerenciar Estacionamentos</button>        
        </Link>
      </div>
    </div>
  )
}

export default Home