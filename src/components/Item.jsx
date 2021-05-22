import React, { useState } from "react";
import { urlApi } from "../constant/url";
import Swal from 'sweetalert2'

function Item({ el }) {
  const [edit, setEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState();
  const [updateBody, setUpdateBody] = useState();
  const [detalle, setDetalle] = useState(false);


  const handleClickEditar = () => {
    let endpoint = `${urlApi}/${el.id}`;
    if (updateTitle && updateBody) {
    fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: updateTitle,
        body: updateBody,
      }),
    }).then((res) => res.json())
    .then(Swal.fire("Editado")
    .then(setEdit(false))
)
 
  }else{
    Swal.fire("complete the fields please");
  }
  };

  const handleClickEliminar = () => {
    fetch(`${urlApi}/${el.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: el.id }),
    })
      .then((res) => res.json())
      .then((res) => {
        Swal.fire("Eliminado")
      });
  };

  return (
    <>
      <div>
        {edit ? (
          <>
            <div className="form row  mx-auto  ">
              <div className=" bg-white p-5 col">
                <div className=" line"></div>
                <div className="mb-3 mx-auto col-lg-8 formulario">
                  <h1>Editar</h1>

                  <input
                    type="text"
                    placeholder={el.title}

                    onInput={(e) => {
                      setUpdateTitle(e.target.value);
                    }}
                    className="form-control "
                  />
                </div>

                <div className="mb-3 mx-auto col-lg-8 formulario">
                  <input
                    type="text"
                    onInput={(e) => {
                      setUpdateBody(e.target.value);
                    }}
                    placeholder={el.body}
                    className="form-control "
                  />
                </div>
                <div className="mb-3 mx-auto col-lg-8 formulario">
                  <button
                    onClick={handleClickEditar}
                    className="btn bg-primary"
                  >
                    guardar cambios
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container ">
              <h4 className="text-capitalize col-lg-12 col-sm-6">
                {" "}
                {el.title}
              </h4>

              {detalle || (
                <button
                  onClick={(e) => {
                    setDetalle(true);
                  }}
                  className="btn bg-primary"
                >
                  Detalle
                </button>
              )}
              {detalle && (
                <button
                  onClick={(e) => {
                    setDetalle(false);
                  }}
                  className="btn bg-primary"
                >
                  Esconder
                </button>
              )}
              <button
                onClick={() => setEdit(true)}
                className="btn bg-secondary"
              >
                Editar
              </button>
              <button onClick={handleClickEliminar} className="btn bg-danger">
                Eliminar
              </button>

              {detalle && <p>{el.body}</p>}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Item;
