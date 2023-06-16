import LoginForm from "../components/LoginForm"

function Login() {
  return (
    <div className="w-screen h-screen bg-primary bg-cover bg-no-repeat flex items-center justify-center">
      <LoginForm />
      <div className="w-screen h-screen absolute bg-overlay z-0" />
    </div>
  )
}

export default Login