import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email:data.email,
            password:data.password,
        }
        await axios
        //.post("http://localhost:4001/user/login", userInfo)
        .post("/user/login", userInfo)
        .then((res)=>{
            if(res.data){
                toast.success("Login Successful")
                document.getElementById("my_modal_3").close()
                setTimeout(() => {
                    window.location.reload()
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                }, 2300)
            }
        })
        .catch((err) => {
            if(err.response){
                toast.error("Login unsuccessful");    
                setTimeout(() => {}, 2300);
            }
        });
    };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
        
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={()=> document.getElementById("my_modal_3").close()}>✕</Link>
                
                <h3 className="font-bold mx-4 text-lg">Login</h3>
                <label className="input input-bordered flex items-center gap-2 my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="email" className="grow" placeholder="Email" {...register("email", { required: true})}/><br />
                    {errors.email && <span className='text-sm text-red-500'>Field required.</span>}
                    </label>
                    <label className="input input-bordered flex items-center gap-2 my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow" placeholder='Password' {...register("password", { required:true })}/>
                    {errors.password && <span className='text-sm text-red-500'>Field required.</span>}
                    </label>
                    <div className='flex justify-between'>
                        <button className='bg-secondary text-white rounded-md px-3 py-1 left-0'>Login</button>
                        <p className='content-end'>Not registered? <Link to="/signup" className='cursor-pointer underline text-blue-500'>Signup</Link></p>
                    </div>
                </form>    
            </div>
        </dialog>
    </div>
  )
}

export default Login
