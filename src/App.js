import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body';
import Dashboard from './component/Dashboard';
import {BrowserRouter , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" component={Body} exact/>
        <Route path="/dashboard" component={Dashboard} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
