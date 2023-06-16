import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmedPasswordChange(event) {
    setConfirmedPassword(event.target.value);
  }

  function clear(){
    setName('');
    setEmail('');
    setPassword('');
    setConfirmedPassword('');
  }


  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert('As senhas não conferem');
      return;
    }

    const formData = {
      name,
      email,
      password
    }
    
    console.log(formData);

    clear();

    navigate('/login');
  }

  return (
    <form onSubmit={handleSubmit} className="w-64 h-fit py-4 flex flex-col gap-4 justify-center items-center rounded-lg bg-white z-10">
      <h1 className="text-2xl font-bold text-blue-400">Easy <span className="text-red-500">Park</span></h1>
      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input id='name' name='name' className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" value={name} type="text" onChange={handleNameChange} />
        <label htmlFor="email">Email</label>
        <input id='email' name='email' className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" value={email} type="email" onChange={handleEmailChange} />
        <label htmlFor="password">Senha</label>
        <input id='password' name='password' className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" value={password} type="password" onChange={handlePasswordChange} />        
        <label htmlFor="confirmedPassword">Confirme a senha</label>
        <input id='confirmedPassword' name='confimedPassword' className="rounded-lg p-2 bg-zinc-100 border border-zinc-300" value={confirmedPassword} type="password" onChange={handleConfirmedPasswordChange} />        
      </div>

      <div className="flex gap-4">
        <button className="w-20 h-10 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="submit">Cadastrar</button>
        <Link to='/login'>
          <button className="w-20 h-10 bg-blue-400 rounded-lg text-white hover:bg-green-300" type="button">Voltar</button>        
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm