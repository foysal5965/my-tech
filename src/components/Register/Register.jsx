import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { BsPass } from "react-icons/bs";
import { CgPassword } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const {createUser, loading} = useContext((AuthContext))
  const [error, setError]= useState('')
    const navigate= useNavigate();
    const location= useLocation();
    
    const from= location.state?.from?.pathname || '/'
  const handleSubmit = (event)=>{
    event.preventDefault()
    const form= event.target;
    const name= form.name.value;
    const email= form.email.value;
    const password= form.password.value;
    if(loading){
      return <span className="loading loading-spinner loading-lg"></span>
    }
    createUser(email, password).then(res=>{
      if(res){
        navigate(from, {replace: true})
      }
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
         
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
};

export default Register;
