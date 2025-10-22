import axios from "axios"
import { useState } from "react"

export default function Signup(){
	const [signup,setsignup] =useState({
		email:"",
		username:"",
		password:""

	})

	const handlechange = (e)=>{
		setsignup({...signup,[e.target.name]:e.target.value})
	}

	const handlesubmit = async(e)=>{
		e.preventDefault()
		axios.post("",signup)
	}
    return(
        <>
         <form onSubmit={handlesubmit}>
             <div className="mx-auto flex w-full max-w-sm flex-col gap-6 text-black mt-5">
	<div className="flex flex-col items-center">
		<h1 className="text-3xl font-semibold">Sign Up</h1>
		
	</div>
	<div className="form-group">
		<div className="form-field">
			<label className="form-label text-black">Email address</label>

			<input placeholder="Type here" type="email" className="input max-w-full" name="email" value={signup.email} onChange={handlechange} />
			<label className="form-label text-black">
				
			</label>
		</div>
        	<div className="form-field text-black">
			<label className="form-labeltext-black">Username</label>
			<div className="form-control">
				<input placeholder="Type here" type="text" className="input max-w-full" value={signup.username} name="username" onChange={handlechange} />
			</div>
		</div>
		<div className="form-field text-black">
			<label className="form-labeltext-black">Password</label>
			<div className="form-control">
				<input placeholder="Type here" type="password" className="input max-w-full" value={signup.password} name="password" onChange={handlechange}/>
			</div>
		</div>
	
		<div className="form-field text-black">
			<div className="form-control justify-between">
				<div className="flex gap-2">
					<input type="checkbox" className="checkbox" />
					<a href="#">Remember me</a>
				</div>
				
			</div>
		</div>
		<div className="form-field pt-5">
			<div className="form-control justify-between">
				<button type="button" className="btn btn-primary w-full">Sign Up</button>
			</div>
		</div>

		
	</div>
</div>
        </form>
        </>
    )
}