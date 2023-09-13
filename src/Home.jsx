import Layout from "./Layout";
import "./style.css";
// import Header from "./Header-user";
import HeaderNormal from "./Header-normal";
import { useState } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState("");
  const [employee, setEmployee] = useState();
  const handleClick = (value) => {
    setSector(value);
  };

  return (
    <Layout>
      <div className="header">
        <h1>Generation Thailand</h1>
        <h1>React - Assessment</h1>
      </div>
      <div>
        <button onClick={() => handleClick("user")} className="home-button">
          User Home Sector
        </button>
        <button onClick={() => handleClick("admin")} className="home-button">Admin Home Sector</button>
      </div>
    </Layout>
  );
};

export default Home;
