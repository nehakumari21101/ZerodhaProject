import React from "react";

const Stats = () =>{
    return(
        <div className="container mt-5 mb-5 ">
            <div className="row">
                <div className="col-6 mt-5 mb-5">
                    <h2 className="mb-5 ">Trust with confident</h2>

                    <h5>Customer-first always</h5>
                    <p className="mb-5">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h5>No apam or gimmicks</h5>
                    <p className="mb-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h5>The Zerodha universe</h5>
                    <p className="mb-5">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h5>Do better with money</h5>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 mt-5 mb-5" >
                    <img src="media/images/ecosystem.png" alt="" style={{width:"100%"}}/>

                    <div className="text-center">

                    <a href="#"  className="me-5" style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>

                    <a href="#" style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>

                    </div>
                    
                </div>
                <div className="text-center mt-3 mb-5">
                <img src="media/images/pressLogos.png" alt="" style={{width:"65%"}} className="text-center"/>
                </div>
            </div>
        </div>
    )
}

export default Stats;