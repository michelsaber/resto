import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
