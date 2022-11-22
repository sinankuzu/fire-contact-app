import './App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import {addUser} from "./utils/Function"
import {useState} from "react"



function App() {
const baslangicDegeri = {
  username: "",
  phoneNumber: "",
  gender: "",
};

const [inputDoldur, setInputDoldur] = useState(baslangicDegeri);
  
  return (
    <div className="App">
      {/* <Login/> */}
      <Main
        addUser={addUser}
        inputDoldur={inputDoldur}
        setInputDoldur={setInputDoldur}
      />
    </div>
  );
}

export default App;
