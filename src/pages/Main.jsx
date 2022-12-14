import React from "react";
import { useState } from "react";
import "./Main.css";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { BsFillPersonFill } from "react-icons/bs";
import {duzenleme, useFetch} from "../utils/Function"
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { myDelete } from "../utils/Function";

const Main = ({ addUser}) => {
  const initialValues = {
    username: "",
    phoneNumber: "",
    gender: "",
  };

   

  const { isLoading, contactList } = useFetch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [select, setSelect] = useState("");

  const yakala = (element) => {
    console.log("basildi");
    setName(element.username)
    setNumber(element.phoneNumber)
    setSelect(element.gender)
    duzenleme(element)
    
  };
  const total = {
    username: name,
    phoneNumber: number,
    gender: select,
  };

  // function writeUserData( username, phoneNumber, gender) {
  //   const db = getDatabase();
  //     const userRef = ref(db,"user")
  //     const userRef1 = push(userRef)
  //   set(userRef1, {
  //     username: name,
  //     phoneNumber: number,
  //     gender: select,
  //   });

  // }

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
  };
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
                value={name}
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                value={number}
                type="tel"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <select
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <button onClick={(e) => addUser(total)}>Add</button>
              
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
          {isLoading ? (
            <div>loading</div>
          ) : (
            contactList.map((element) => (
              <div className="table">
                <div>{element.username}</div>
                <div>{element.phoneNumber}</div>
                <div>{element.gender}</div>
                <div onClick={(e) => myDelete(element.id)}>DELETE</div>
                <div onClick={(e) => yakala(element)}>EDIT</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
