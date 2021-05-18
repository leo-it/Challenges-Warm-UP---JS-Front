import React from 'react'

function Item({el}) {
    return (
        <div>
             <h5 className="text-capitalize col-lg-2 col-sm-6">
                    {" "}
                    {el.title}:{" "}
                  </h5>
                  {/* <h4 className="text-success col-lg-2 col-sm-6">
                    ${el}
                  </h4>
                  <p className="card-text text-success col-lg-2 col-sm-6">
                    {el}
                  </p>
                  <p className="card-text text-secondary col-lg-2 col-sm-6">
                    {" "}
                    {el}
                  </p> */}
        </div>
    )
}

export default Item
