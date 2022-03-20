import SignUp from './Components/SignUp/SignUp';
import './App.css';
import Login from './Components/SignUp/Login';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navigation bar/Navbar';
import PrivateRoute from './Components/PrivateRoute';
import Joinus from './Components/SignUp/Joinus';
import Home from './Components/Pages/Home';
import Feed from './Components/Pages/Feed';
import AddEdit from './Components/Pages/AddEdit';
import Profile from './Components/Pages/Profile';
import DashboardAdmin from './Components/Pages/adminDashboard';
import DetailsPage from './Components/Pages/DetailsPage';

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/More-Details/:id' element={<DetailsPage></DetailsPage>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        {/* <Route path='/profile' element={<Profile></Profile>}></Route> */}
        <Route path='/AddOrEdit' element={<AddEdit></AddEdit>} />
        <Route path='/feed' element={<Feed></Feed>} />
        <Route path='/joinus' element={<Joinus></Joinus>} />
        <Route path='/Dashboard' element={<PrivateRoute><DashboardAdmin></DashboardAdmin></PrivateRoute>}></Route>
        <Route path='/profile'  element= {<PrivateRoute><Profile></Profile></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;