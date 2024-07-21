import React from 'react'
import Login from '../components/Login'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Signup() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
      <div id="my_modal_3" className='border-2 p-5 rounded-md border-slate-700'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 font-bold">✕</Link>
                
                <h3 className="font-bold mx-4 text-lg">Sign up</h3>
                <label className="input input-bordered flex items-center gap-2 my-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email" className="grow" placeholder="Email" {...register("email", { required: true})}/>
                {errors.email && <span className='text-sm text-red-500'>Field required.</span>}
                </label>
                <label className="input input-bordered flex items-center gap-2 my-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" {...register("name", { required: true})}/>
                    {errors.name && <span className='text-sm text-red-500'>Field required.</span>}
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
                    <input type="password" className="grow" placeholder="Password" {...register("password", { required:true })}/>
                    {errors.password && <span className='text-sm text-red-500'>Field required.</span>}
                    </label>
                    <div className='flex justify-between'>
                        <button className='bg-secondary text-white rounded-md px-3 py-1 left-0'>Sign in</button>
                        <p className='content-end text-lg'>Have an account?{" "} <button className='cursor-pointer underline text-blue-500'
                        onClick={() =>
                            document.getElementById("my_modal_3").showModal()
                        }>
                        Login</button>{" "}
                        <Login /></p>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
