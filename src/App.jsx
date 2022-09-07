import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Dataemployee } from "./components/EmployeeData/Dataemployee";
import { DetailForm } from "./components/EmployeeForm/Details";
function App() {
  const [newdata, setNewdata] = useState([]);

  async function getdata() {
    axios
      .get("http://localhost:8080/details")
      .then((res) => {
        setNewdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="App">
      <DetailForm pros={getdata} />
      <Dataemployee pros={{ newdata, getdata }} />
    </div>
  );
}

export default App;
