import { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Login = () => {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = async (e)=> {
        e.preventDefault();
        try {
            let res = await axios.post("/api/auth/login", {email, password})
            if(res.data.success){
                toast.success("Logged in succesfull")
                navigate("/")
                await setAuth({
                    ...auth, 
                    user: res.data?.user, 
                    token: res.data?.token
                })
                await localStorage.setItem("auth", JSON.stringify(res.data))
            }
            else{
                toast.error(res?.data?.message)
            }
        } catch (error) {
            toast.error("Something went wrong" + error)
        }
    }
  return (
      <MainLayout>

    <div className='container'>
    <h1 className='text-center text-white mt-3 text'>Login with an existing account</h1>
        <div className="col-md-6 p-sm-5 mx-auto bg-white formbox mt-4 rounded border">
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
            <button type="submit" className="btn btn-danger w-100 done-btn">LOGIN</button>
            </form>
        </div>
    </div>
    </MainLayout>
  )
}

export default Login
