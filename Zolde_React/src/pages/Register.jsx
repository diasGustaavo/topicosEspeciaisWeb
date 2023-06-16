import RegisterForm from "../components/RegisterForm"

function Register() {
  return (
    <div className="w-screen h-screen bg-primary bg-cover bg-no-repeat flex items-center justify-center">
      <RegisterForm />
      <div className="w-screen h-screen absolute bg-overlay z-0" />
    </div>
  )
}

export default Register