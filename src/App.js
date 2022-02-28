import 'font-awesome/css/font-awesome.min.css';
import './Pages/Logo/Logo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Navbar/Navbar';
import './App.css'
import Tabs from './Pages/Tabs/Tabs';
import {  Route, Routes} from 'react-router-dom';
import Logo from './Pages/Logo/Logo';
import Home from './Pages/HOME/Home';
import About from './Pages/About/About';
import Profile from './Pages/Profile/Profile';
import PostNav from './Pages/PostNav/PostNav';
import PostCard from './Pages/PostCard/PostCard';




function App() {
  
  return (
    <div >
     
         {/* <Navbar/>
                
          <Routes>
            <Route path="/"   element={<Tabs />} >
               
               <Route path="logo" element={<Logo />}/>
                <Route path="about" element={<About />} />
                <Route path="home" element={<Home />} />
                <Route path="Tabs" element={<Tabs />} />
                <Route path="home" element={<Home />} />
              
            </Route>
          </Routes> */}
          {/* <Profile/> */}
          <PostNav/>
          <PostCard/>
     
    </div>
  );
}

export default App;
