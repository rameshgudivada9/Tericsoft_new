import { useState } from "react";
import axios from "axios";
import "./details.css";

export const DetailForm = ({ pros }) => {
  // console.log(pros)
  const [adddata, setAdddata] = useState(
    {
      Name: "",
      Email: "",
      Phone: "",
      Dob: "",
      Gender: "",
      Hobbies: ""
  }
  );

  const handlechange = (e) => {
    const { name, value } = e.target;
    setAdddata({ ...adddata, [name]: value });
  };
  console.log(adddata);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/details", { ...adddata })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        pros();
      });
  };

  return (
    <form
      className="details"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        Name:{" "}
        <input
          name="Name"
          value={adddata.Name}
          placeholder="Enter Name"
          onChange={(e) => {
            handlechange(e);
          }}
          className="Name"
          required="true"
        />
      </div>
      <div>
        Email:{" "}
        <input
          name="Email"
          value={adddata.Email}

          placeholder="Enter Email"
          onChange={(e) => {
            handlechange(e);
          }}
          className="Email"
          required="true"
        />
      </div>
      <div>
        Phone:{" "}
        <input
          name="Phone"
          value={adddata.Phone}

          placeholder="Enter PhoneNumber"
          onChange={(e) => {
            handlechange(e);
          }}
          className="Phone"
          required="true"
        />
      </div>
      <div>
        DOB:{" "}
        <input
          type="date"
          name="Dob"
          value={adddata.Dob}

          placeholder="Enter Date of Birth"
          onChange={(e) => {
            handlechange(e);
          }}
          className="Dob"
          required="true"
        />
      </div>
      <div >
        Gender:
        <div>
          Male{" "}
          <input
            name="Gender"
            value={adddata.Gender}

            type="radio"
            onChange={(e) => {
              handlechange(e);
            }}
            className="Gender"
            value="male"
            required="true"
          />
          Female{" "}
          <input
            name="Gender"
            value={adddata.Gender}

            type="radio"
            onChange={(e) => {
              handlechange(e);
            }}
            className="Gender"
            value="female"
            required="true"
          />
        </div>
      </div>
      <div>
        Hobbies:
        <select
          name="Hobbies"
          value={adddata.Hobbies}

          onChange={(e) => {
            handlechange(e);
          }}
          className="Hobbies"
          required="true"
        >
          <option>---------------</option>
          <option value="sports">sports</option>
          <option value="reading">Reading</option>
          <option value="browsingnet">browsing net</option>
        </select>
        <div>
          <input className="submit" type="submit" value="Submit" />
        </div>
      </div>
    </form>
  );
};
