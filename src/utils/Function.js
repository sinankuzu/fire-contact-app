import firebase from "../firebase-config";
import {useEffect, useState} from "react"
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { Container } from "react-bootstrap";


export const addUser = (element) => {
    const db = getDatabase(firebase);
    const kullaniciRef = ref(db, "users/");
    const yeniKullaniciRef = push(kullaniciRef);

    set(yeniKullaniciRef, {
        username: element.username,
        phoneNumber: element.phoneNumber,
        gender: element.gender,

    })
}

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "users/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
      
    });
  }, []);

  return {isLoading,contactList};
};

export const myDelete = (id)=>{
    const db = getDatabase(firebase)
    remove(ref(db, "users/" + id))

}

export const duzenleme = (element) =>{
    const db = getDatabase(firebase)

    const updates = {};
    updates["users/" + element.id] = element;
    
    return update(ref(db), updates)
}