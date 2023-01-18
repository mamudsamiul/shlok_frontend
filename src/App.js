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

function App() {
  return (
    <div>
      <Container>
        <Router>
        <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Routes>
            
            <Route path='/main/home' element={<Home/>}/>
            <Route path='/main/calendar' element={<MyCalendar/>}/>
            <Route path='/main/notice' element={<NoticeBoard/>}/>
            </Routes>   
          </Col>
        </Row>
        </Router>
      </Container>


        </div>
  );
}

export default App;
