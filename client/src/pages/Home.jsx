import Navbar from '../layout/Navbar'
import FloatingButton from '../components/FloatingButton'
import DisplayNotes from "../components/DisplayNotes.jsx"
import MainLayout from '../layout/MainLayout'
import { useAuth } from '../../context/authContext'

const Home = () => {
  const {auth, isInitialized} = useAuth();
  console.log(auth)
  // fetch notes
  if(!isInitialized){
    return <div><h1>Loading...</h1></div>
  }
  else{
    return (
      <MainLayout>
        <DisplayNotes/>
      </MainLayout>
    )
  }
}

export default Home
