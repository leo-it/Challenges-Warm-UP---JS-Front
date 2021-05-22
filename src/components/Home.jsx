import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { urlApi } from "../constant/url";
import Item from "./Item";
import Loader from "./Loader";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(urlApi, {
      method: "GET",
      headers: {
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setData(res);
        }
      });
  }, []);

  return (
    <div className="container">
      <Navbar />
      {data === null ? (
        <>
          <h1>no data</h1>
          <Loader/>
        </>
      ) : (
        <>
          {data.map((el, index) => (
            <Item key={index} el={el} />
          ))}
        </>
      )}
    </div>
  );
}

export default Home;
