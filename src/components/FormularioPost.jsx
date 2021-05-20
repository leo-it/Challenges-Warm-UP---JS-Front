import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { urlApi } from "../constant/url";
import Swal from 'sweetalert2'

const FormularioPost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  function handleClick() {
    if (title && body) {
      fetch(urlApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      }).then((res) => res.json())
    .then((res) => Swal.fire("post ok"));

    } else {
        Swal.fire("complete the fields please");
      
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container col-lg-6">
        <div className=" form mx-auto row bg-white p-5 col">
          <div className="mb-3 col-sm-12 formulario">
            <label className="form-label tre " id="">
              Titulo
            </label>
            <input
              type="text"
              onInput={(e) => setBody(e.target.value)}
              className="form-control "
              required
            />
          </div>
          <div className="mb-3 col-sm-12">
            <label className="form-label tre ">Descripcion</label>
            <input
              type="text"
              onInput={(e) => setTitle(e.target.value)}
              className="form-control "
              required
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary publicar-btn"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioPost;
