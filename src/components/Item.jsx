import React, { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

function Item({ el }) {
  const [edit, setEdit] = useState(false);
  const [updateTitle, setUpdateTitle] = useState();
  const [updateBody, setUpdateBody] = useState();
  const [detalle, setDetalle] = useState(false);

  const handleClickEditar = () => {
    setEdit(false);
  };
  const handleClickEliminar = () => {};
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
                    onInput={(e) => {
                      setUpdateTitle(e.target.value);
                    }}
                    className="form-control "
                    placeholder={el.title}
                  />
                </div>

                <div className="mb-3 mx-auto col-lg-8 formulario">
                  <input
                    type="text"
                    onInput={(e) => {
                      setUpdateBody(e.target.value);
                    }}
                    className="form-control "
                    placeholder={el.body}
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
              <h3 className="text-capitalize col-lg-12 col-sm-6"> {el.title}</h3>

             {detalle||

              <button onClick={(e)=>{setDetalle(true)}} className="btn bg-primary">
                Detalle
              </button>
              }
              {detalle&&
               <button onClick={(e)=>{setDetalle(false)}} className="btn bg-primary">
               esconder
             </button>
              }
              <button
                onClick={() => setEdit(true)}
                className="btn bg-secondary"
              >
                Editar
              </button>
              <button onClick={handleClickEliminar} className="btn bg-danger">
                Eliminar
              </button>
              
            {detalle&&
            <h5>{el.body}</h5>
            
            }
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Item;
