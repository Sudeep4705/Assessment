import { useState } from "react"
import axios from "axios"
export default function SignIn(){
	const [signIn,setsignIn]=useState({
		email:"",
		password:"",
	})
	const handlechange = (e)=>{
		setsignIn({...SignIn,[e.target.name]:e.target.value})
	}

	const handlsubmit = async(e)=>{
		e.preventDefault()
		 await axios.post("",signIn)
	}
    return(
        <>
        <form onSubmit={handlsubmit}>
             <div className="mx-auto flex w-full max-w-sm flex-col gap-6 text-black mt-5">
	<div className="flex flex-col items-center">
		<h1 className="text-3xl font-semibold">Sign In</h1>
		<p className="text-sm">Sign in to access your account</p>
	</div>
	<div className="form-group">
		<div className="form-field">
			<label className="form-label text-black">Email address</label>

			<input placeholder="Type here" type="email" className="input max-w-full" value={signIn.email} onChange={handlechange}/>
			<label className="form-label text-black">
				
			</label>
		</div>
		<div className="form-field text-black">
			<label className="form-labeltext-black">Password</label>
			<div className="form-control">
				<input placeholder="Type here" type="password" className="input max-w-full" value={signIn.email}  onChange={handlechange} />
			</div>
		</div>
		<div className="form-field text-black">
			<div className="form-control justify-between">
				<div className="flex gap-2">
					<input type="checkbox" className="checkbox" />
					<a href="#">Remember me</a>
				</div>
				<label className="form-label text-black">
					<a className="link link-underline-hover link-primary text-sm">Forgot your password?</a>
				</label>
			</div>
		</div>
		<div className="form-field pt-5">
			<div className="form-control justify-between">
				<button type="button" className="btn btn-primary w-full">Sign in</button>
			</div>
		</div>

		<div className="form-field">
			<div className="form-control justify-center">
				<a className="link link-underline-hover link-primary text-sm" href="/signup">Don't have an account yet? Sign up.</a>
			</div>
		</div>
	</div>
</div>
        </form>
       
        </>
    )
}