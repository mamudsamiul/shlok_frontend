import './App.css';
import Home from './component/Home';
import { ToastContainer,toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./component/Header"
import Menus from './component/Menus';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LandPage from './component/LandPage';
import MyCalendar from './component/MyCalendar';
import NoticeBoard from './component/NoticeBoard';
import MainPage from './component/MainPage';
import LoginPage from './component/LoginPage';
import Login from './component/Login'
import AdminPage from './component/AdminPage';
import LoginSecurityPage from './component/LoginSecurityPage';
import SetNotice from './component/SetNotice';

function App() {
  return (
    <div>
      <ToastContainer/>
      <Router>
          <Routes>
          <Route path='/' element={<LandPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='admin' element={<AdminPage/>}>
            <Route path='admindetails' element={<Home/>}/>
            <Route path='search' element={<MyCalendar/>}/>
            <Route path='setnotice' element={<SetNotice/>}/>
          </Route>
          <Route path='/securitylogin' element={<LoginSecurityPage/>}/>
          <Route path='main' element={<MainPage/>}>
            <Route path='home' element={<Home/>}/>
            <Route path='calendar' element={<MyCalendar/>}/>
            <Route path='notice' element={<NoticeBoard/>}/>
          </Route>

          </Routes>
      </Router>

        </div>
  );
}

export default App;
