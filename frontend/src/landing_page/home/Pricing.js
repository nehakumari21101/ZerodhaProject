import React from "react";

const Pricing = () =>{
    return(
        <div className="container mt-5 mb-5 ">
            <div className="row mt-5 mb-5">
                <div className="col-5">
                    <h2>Unbeatable pricing</h2>
                    <p >We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-7 mt-3">
                    <div className="row">

                    <div className="col-4">
                        <img src="media/images/pricingMF.svg" alt="" style={{width:"65%"}}/>
                        <p className="fs-6">Free account opening</p>
                    </div>

                    <div className="col-4">
                        <img src="media/images/pricingMF.svg" alt="" style={{width:"65%"}}/>
                        <p style={{fontSize:"10px"}}> Free equity delivery
                        and direct mutual funds</p>
                    </div>

                    <div className="col-4">
                        <img src="media/images/intradayTrades.svg" alt="" style={{width:"65%"}}/>
                        <p> Intraday and
                        F&O</p>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;