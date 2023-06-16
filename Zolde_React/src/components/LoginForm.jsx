import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function clear(){
    setEmail('');
    setPassword('');
  }


  function handleSubmit(event) {
    event.preventDefault();

    const formData ={
      email,
      password
    }
    
    console.log(formData);

    clear();

    navigate('/home');
  }


  return (
    <form onSubmit={handleSubmit} className="w-64 h-72 flex flex-col gap-4 justify-center items-center rounded-lg bg-white z-10">
      <h1 className="text-2xl font-bold text-blue-400">Easy <span className="text-red-500">Park</span></h1>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" value={email} type="email" onChange={handleEmailChange} />
        <label htmlFor="">Password</label>
        <input className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" value={password} type="password" onChange={handlePasswordChange} />        
      </div>

      <div className="flex gap-4">
        <button className="w-20 h-10 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="submit">Entrar</button>
        <Link to='/register'>
          <button className="w-20 h-10 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="button">Cadastrar</button>        
        </Link>
      </div>
    </form>
  )
}

export default LoginForm