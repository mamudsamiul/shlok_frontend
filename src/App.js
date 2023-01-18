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

function App() {
  return (
    <div>
      <Router>
      <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
          </Col>
          <Col md={8}>
            <Routes>
            <Route path='/home' element={<Home/>}/>
            </Routes>   
          </Col>
        </Row>
      </Container>
      </Router>
      
      
    </div>
  );
}

export default App;
