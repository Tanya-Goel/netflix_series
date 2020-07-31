import React from 'react';
import './App.css';
import Cards from "../src/Component/Cards";
import SData from "./Component/SData";


function App() {
  console.log(SData);
  return (
    <div>
      <h1>Welcome to top 5 netflix series</h1>
      <faVs/>;
        {SData.map((val) => { 
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            links={val.links}
          />);

      })}; 
      

    </div>);
};
export default App;
