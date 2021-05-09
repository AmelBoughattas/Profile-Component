import React from 'react';

const MyAddress = () => {
    return (
    <div className="address">

        <h2>My Address</h2>
        <br/>
        <p>Rue Habib Thameur 5012 Sahline- Monastir</p>

        <div className="map-tile">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25904.119786134765!2d10.692844746906546!3d35.75043673138085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020b7c4731bc19%3A0xc19a90db533c0df!2sSahline!5e0!3m2!1sfr!2stn!4v1620331022267!5m2!1sfr!2stn" 
             style={{border: 0}} allowFullScreen loading="lazy" />
           <span>Map</span>
        </div>

        <h3>Contact us in <a href="https://www.gmail.com" target="_blank">am.bgh@gmail.com</a></h3>

        <div className="line"></div>

        <div  className="link">
          <ul>
            <li> 
               <a className="tw" href="https://www.linkedin.com" target="_blank">
               <i className="fab fa-linkedin"></i></a>
            </li>
            <li> 
               <a href="https://www.facebook.com" target="_blank">
               <i className="fa fa-facebook-official"></i></a>
            </li>
            <li> 
               <a className="twitter" href="https://www.twitter.com" target="_blank">
               <i className="fa fa-twitter-square"></i></a>
            </li>
          </ul>
        </div>

        <p className="copyright">Copyright © 2021 - By Amel Boughattas </p>
    </div>
    
    )
};
export default MyAddress;