import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo
}) => {
  return (
    <>
      <div className="container ">
        <div className="row">
            <div className="col-4 mt-5  pt-5 ">
                <h2 className=" ms-5 pt-5 mb-4">{productName}</h2>
                <p className="mb-4 ms-5">{productDescription}</p>
                <a href=""  style={{textDecoration:"none"}} className="ms-5">{tryDemo}</a>
            </div>
            <div className="col-1 "></div>
            <div className="col-7 ">
                <img src={imageURL} alt="" className="me-5" style={{width:"90%"}}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default RightSection;
