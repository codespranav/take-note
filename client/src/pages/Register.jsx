import { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../helper/helper';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = async (e)=> {
        e.preventDefault();
        try {
            let res = await axios.post(`${baseURL}/api/auth/register`, {name, email, password})
            if(res?.data?.success){
                toast.success("Registered")
                setTimeout(() => {
                    navigate("/login")
                }, 3000);
            }
            else{
                toast.error(res?.data?.error)
            }
            console.log(e);
        } catch (error) {
            toast.error("Something went wrong" + error)
        }
    }
  return (
    <MainLayout>
    <div className='container'>
    <h1 className='text-center text-white mt-3 text'>Register</h1>
        <div className="col-md-6 p-sm-5 mx-auto bg-white formbox mt-4 rounded border">
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" autoComplete='off' required onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e)=>{setEmail(e.target.value)}}/>
                    <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            <button type="submit" className="btn btn-danger w-100 done-btn" onClick={handleFormSubmit}>REGISTER</button>
            </form>
        </div>
    </div>
    </MainLayout>
  )
}

export default Register
