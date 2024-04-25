import React, { useEffect, useState } from "react";
import "./album.css"
import Image from './components/image'
import Title from "./title";
import { Link } from "react-router-dom";
import Logout from "./components/logout";

export function Album() {

  const [data, setData] = useState([]);

  useEffect(() => {
 

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((albums) => setData(albums))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/expense" >Expense</Link>
      <Logout />
      {data.map((item) => {
        return (
          <>
          
            <Title title={item.title} casing="lower" number={123}/>
            <Title title={item.title} casing="upper"/>
            <Title title={item.title}/>
           <Image path={item.url}/>
          </>
        );
      })}
    </div>
  );
}