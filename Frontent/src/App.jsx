
import { Routes, Route, Navigate } from 'react-router';
import Home from './components/home/Home';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/course/Course';
import Signup from './components/SignUp';
import { useAuth } from './authProvider/authProvider';


function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser? <Course /> : <Navigate to ="/signup"/>} />
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </>
      

  );
}

export default App;