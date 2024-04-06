/* eslint-disable react/prop-types */
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (props) => {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      {props.children}
    </div>
  )
}

export default MainLayout
