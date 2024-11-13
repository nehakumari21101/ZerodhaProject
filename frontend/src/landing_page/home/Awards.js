import React from "react";

const Awards = () =>{
    return(
        <div className="container  mb-5 ">
            <div className="row ">
            <div className="col-6 p-5">
                <img src="media/images/largestBroker.svg" alt=""  className="mt-5 mb-5" style={{width:"90%"}}/>
            </div>
            <div className="col-6 p-5 mt-3 mb-5">
                <h1>Largest stock broker in India</h1>
                <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all volume daily by trading an dinvesting in:</p>
                <div className="row">
                <div className="col-6">
                    <ul>
                        <li><p>Futures and options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li><p>Futures and options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                    </ul>
                </div>
                <img style={{width:"90%"}} src="media/images/pressLogos.png" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Awards;