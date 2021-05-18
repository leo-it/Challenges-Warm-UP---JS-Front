import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import {urlApi} from '../constant/url'
import Item from "./Item";
import { useFetch } from "../hooks/useFetch";


function Home() {
  
    let {data, isPending, error} = useFetch(urlApi)
  
    /*  const [data, setData] = useState();
    useEffect(  
        fetch(urlApi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setData(res.title)
          }
        }), []);
 */
console.log(data);
    return (
        <div className="container">
            <Navbar/>
           {!data ? (
<><h1>nodata</h1></>
             ):(
                <>
                  {data             
                .map((el, index) => (
                  <Item key={index} el={el} />
                  
                ))}
                
                </>

             )
            }
        </div>
    )
}

export default Home
