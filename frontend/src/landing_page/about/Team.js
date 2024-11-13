import React from 'react'

const Team = () =>{
    return(
        <>
        <div className="container mt-3 mb-5 ">
            <h2 className='text-center mb-5'>People</h2>
            <div className="row ps-5 mb-5">
                <div className="col-6  ms-5 me-3 ps-5" style={{width:"30%"}}>
                    <img src="media/images/nithinKamath.jpg" alt="" style={{width:"100%", borderRadius:"100%"}} className='ms-5 mb-5'/>
                    <h4 className='text-center ms-5 text-muted'>Nithin Kamath</h4>
                    <p className='text-center ms-5'>Founder, CEO</p>
                </div>
                <div className="col-6  ms-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Team;
