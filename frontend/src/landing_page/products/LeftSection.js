import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) => {
  return (
    <>
      <div className="container  ">
       
        <div className="row mt-5 ">

          <div className="col-6 p-5">
            <img src={imageURL} alt="" />
          </div>

         <div className="col-1"></div>
          <div className="col-5 p-5 ">
            <h2 className="mt-5 mb-3">{productName}</h2>
            <p>{productDescription}</p>
            <div className="mb-4">
              <a href="#" style={{textDecoration:"none"}} className="me-5">{tryDemo}</a>
              <a href="#" style={{textDecoration:"none"}}>{learnMore}</a>
            </div>
            <div>
              <img src="media/images/googlePlayBadge.svg" alt="" className="me-3"/>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LeftSection;
