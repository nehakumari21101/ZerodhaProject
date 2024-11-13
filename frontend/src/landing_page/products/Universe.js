import React from 'react'

const Universe  = () =>{
    return(
        <>
        <div className="container mt-5 mb-5 ">
            <div className="row text-center ">
                <h2 className='mt-5 mb-4'>The Zerodha Universe</h2>
                <p className=''>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-5">
                    <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"60%"}} className='mb-4'/>
                    <p className='text-muted' style={{fontSize: "0.81rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/sensibullLogo.svg" alt="" style={{width:"63%"}} className='mb-4'/>
                    <p className='text-muted' style={{fontSize: "0.81rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4  p-5">
                    <img src="media/images/tijori.svg" alt="" style={{width:"45%"}} className='mb-4'/>
                    <p className='text-muted' style={{fontSize: "0.81rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                
                <div className="col-4 p-4">
                    <img src="media/images/streakLogo.png" alt="" style={{width:"45%"}} className='mb-4'/>
                    <p className='text-muted' style={{fontSize: "0.81rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/images/smallcaseLogo.png" alt="" style={{width:"60%"}} className='mb-4'/>
                    <p className='text-muted' style={{fontSize: "0.81rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className="col-4  p-4">
                    <img src="media/images/dittoLogo.png" alt="" style={{width:"40%"}} className='mb-4'/>
                    <p className='text-muted' style={{fontSize: "0.81rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <button style={{width:"23%", margin:"0 auto"}} className="btn btn-primary fs-5 mb-5 mt-5">Signup Now</button>
            </div>
        </div>
        </>
    )
}

export default Universe;