import React from "react";
import { useState } from "react";
import "./Main.css";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { BsFillPersonFill } from "react-icons/bs";


const Main = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [select, setSelect] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [ gender, setGender] = useState("");



    function writeUserData( username, phoneNumber, gender) {
      const db = getDatabase();
        const userRef = ref(db,"user")
        const userRef1 = push(userRef)
      set(userRef1, {
        username: name,
        phoneNumber: number,
        gender: select,
      });
      
    }

    // function writeUserData(userId, username, phoneNumber, gender) {
    //   const db = getDatabase();
    //   set(ref(db, "users" + userId), {
       
    //     username: name,
    //     phoneNumber: number,
    //     gender: select,
    //   });
    // }


    const ekle = () => {
        // setUsername(name)
        // setPhoneNumber(number)
        // setGender(select)
        
        
    }
  return (
    <div>
      <div className="container">
        <div className="container-add">
          <div className="header">
            <h1>{`<sinan/>`} design</h1>
          </div>
          <div className="header">
            <h1>Add Contact</h1>
          </div>
          <div className="box">
            <div>
              <i className="person">
                <BsFillPersonFill />
              </i>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <select onChange={(e) => setSelect(e.target.value)}>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <button onClick={() => writeUserData(name, phoneNumber, gender)}>
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="container-contacts">
          <div className="header">
            <h1>Contact</h1>
          </div>
          <div className="table">
            <div>Username</div>
            <div>Phone Number</div>
            <div>Gender</div>
            <div>Delete</div>
            <div>Edit</div>
          </div>
          {username ? (
            <div className="table">
              <div>{username}</div>
              <div>{phoneNumber}</div>
              <div>{gender}</div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="table empty">nothing found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
