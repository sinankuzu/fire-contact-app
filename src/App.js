import './App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import {addUser} from "./utils/Function"



function App() {

  
  return (
    <div className="App">
      {/* <Login/> */}
      <Main addUser = {addUser} />
    </div>
  );
}

export default App;
