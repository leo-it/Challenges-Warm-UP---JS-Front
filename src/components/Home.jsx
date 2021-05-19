import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { urlApi } from "../constant/url";
import Item from "./Item";
import { helpHttp } from "../helpers/helpHttp";
import { Message } from "./Message";
import Loader from "./Loader";

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    helpHttp().get(urlApi).then((res) => {
      if (!res.err) {
        setData(res);
        setError(null);
      } else {
        setData(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <Navbar />
      {data === null ? (
        <>
          <h1>no data</h1>
          {error && (
            <>
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor="#dc3545"
            />
            </>
          )}
          {loading && <Loader />}
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
