import logo from './logo.svg';
import './App.css';
import Welcome  from './components/Welcome'
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Welcome />
      <Greeting />
    </div>
  );
}



export default App;
