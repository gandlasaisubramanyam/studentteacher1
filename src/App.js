import React, { useState } from "react";
import Table from "./Components/Table/Table";
import "./App.css";
import Form from "./Components/Form/Form";
import { Routes, Route } from "react-router-dom";
import EditUser from "./Components/Edit/EditUser";
import Login from "./Components/Login/Login";
import MentorTable from "./Components/MentorTable";
import CreateMentor from "./Components/CreateMentor";
import EditMentor from "./Components/EditMentor";
import Home from "./Components/Home";

function App() {
  const [formList, setFormList] = useState([
    {
      id: 1,
      name: "Boobalan",
      email: "boobalan@gmail.com",
      contact: 9876543210,
    },
    {
      id: 2,
      name: "Arun",
      email: "arun@gmail.com",
      contact: 9988776655,
      },
  ]);

const [mentor,setMentor] = useState([
  {
    id:1,
    name:"Sathish",
    email:"sathish@gmail.com",
    subject:"Html",
    contact:9789123456,
  },
  {
    id:2,
    name:"Ranjith",
    email:"ranjith@gmail.com",
    subject:"Css",
    contact:9789293437,
  }
])

  
  return (
    <div>
      <Routes>
      <Route
          path="/"
          element={<Login/>}
        />
        <Route
          path="/home"
          element={<Table formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/main"
          element={<Home/>}
        />
        <Route
          path="/form"
          element={<Form formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/edit/:id"
          element={<EditUser formList={formList} />}
        />
        <Route
          path="/editmentor/:id"
          element={<EditMentor mentor={mentor} />}
        />
        <Route path="/form1" element={<CreateMentor mentor={mentor} setMentor={setMentor} />} />
        <Route path="/home1" element={<MentorTable mentor={mentor} setMentor={setMentor} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function NotFound() {
  return (
    <div className="error">
      <img
        src="https://d1ivubrj2a21dq.cloudfront.net/wp-contact/uploads/2021//ezgif.com-crop.gif"
        alt="404-Not-Found"
      />
    </div>
  );
}

export default App;