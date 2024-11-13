import React from "react";

const Education = () =>{
    return(
        <div className="container mt-5 mb-5 ">
            <div className="row mt-5">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" style={{width:"80%"}} className="mb-5 mt-5"/>
                </div>
                <div className="col-6 mt-5">
                    <h2 className="mt-5">Free and open market Education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}}>Versity<i class="fa-solid fa-arrow-right"></i></a>

                    
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{textDecoration:"none"}}>Trading Q&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;