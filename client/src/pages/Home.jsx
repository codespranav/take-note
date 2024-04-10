import DisplayNotes from "../components/DisplayNotes.jsx"
import MainLayout from '../layout/MainLayout'
import { useAuth } from '../../context/authContext'

const Home = () => {
  const { isInitialized } = useAuth();

  return (
    <MainLayout>
      {isInitialized ? (
        <DisplayNotes />
      ) : (
        <div><h1>Loading...</h1></div>
      )}
    </MainLayout>
  );
};

export default Home;
