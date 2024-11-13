import React from 'react'

const Hero = () =>{
    return(
        <>
           <div className="container mt-5 mb-5">
            <div className="row text-center ">
                <div className=' mb-5'>
                    <h2 className='mt-5'>Pricing</h2>
                    <h5 className='text-muted mb-5'>Free equity investments and flat Rs.20 traday anf F&O trades</h5>
                </div>

                <div className="col-4 mt-5 ">
                    <img src="media/images/pricingMF.svg" alt=""  style={{width:"80%"}} className='mb-4'/>
                    <h3 className='mb-4'>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-5">
                    <img src="media/images/intradayTrades.svg" alt="" style={{width:"80%"}} className='mb-4'/>
                    <h3 className='mb-4'>Intraday and F&O trades</h3>
                    <p className='mb-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 mt-5">
                    <img src="media/images/pricingMF.svg" alt="" style={{width:"80%"}} className='mb-4'/>
                    <h3 className='mb-4'>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
           </div>
        </>
    )
}

export default Hero;