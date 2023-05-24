import { Link } from "react-router-dom"

function LoginForm() {
  return (
    <form className="w-64 h-72 flex flex-col gap-4 justify-center items-center rounded-lg bg-white z-10">
      <h1 className="text-2xl font-bold text-blue-400">Easy <span className="text-red-500">Park</span></h1>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" type="email" />
        <label htmlFor="">Password</label>
        <input className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" type="password" />        
      </div>

      <div className="flex gap-4">
        <Link to='/home'>
          <button className="w-20 h-10 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="submit">Entrar</button>
        </Link>
        <Link to='/register'>
          <button className="w-20 h-10 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="button">Cadastrar</button>        
        </Link>
      </div>
    </form>
  )
}

export default LoginForm