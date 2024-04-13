/* eslint-disable react/prop-types */
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
const MainLayout = (props) => {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      {props.children}
      <Footer/>
    </div>
  )
}

export default MainLayout
