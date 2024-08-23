import React from "react";
import './footer.css';
import footerlogo from '../../assents/log2.png';
import istgrem from '../../assents/istgrem.png';
import likn from '../../assents/likn.png';
import fac from '../../assents/fac.png';
import twitte from '../../assents/twitte.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPhone, faSquare } from '@fortawesome/free-solid-svg-icons'
const Footer=() =>{
    return(
        <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-sm-6'>
                    <img src={footerlogo} title='logo' alt='' />
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                             dolore smod tempor incididunt ut labore et. </p>
                          <div className='Footer-contact'>
                              <FontAwesomeIcon icon={faPhone}/>
                                  <div className='footer-icon'>
                              </div>
                              <div className='footer-text'>
                              <h6> Contact Us </h6>
                              <h5> +01 123 456 7890 </h5>       
                              </div>
                          </div>
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Quick Links</h2>
                        <ul>
                        <li><a href="#"> service</a></li>  
                        <li><a href="#"> About us</a></li>
                        <li><a href="#"> Booking</a></li>
                        <li><a href="#"> FQq's</a></li>
                        <li><a href="#"> Blog</a></li>
                        <li><a href="#"> Qut tem</a></li>
                        </ul> 
                    </div>
                    <div className='col-md-3 col-sm-6'>
                       <h2>Our Service</h2>
                        <ul>
                        <li><a href="#"> Dentel car</a></li>  
                        <li><a href="#"> Caradiac Clinic</a></li>
                        <li><a href="#"> Massae Therepy</a></li>
                        <li><a href="#"> Cardiology</a></li>
                        <li><a href="#"> Blog</a></li>
                        <li><a href="#"> Qut tem</a></li>
                        </ul> 
                    </div>
                    <div className='col-md-3 col-sm-6'>
                        <h2>Subcribe</h2>
                        <form>
                            <input type="email"></input>
                            <button type="submit">Subcribe Now</button>
                        </form>
                        <ul className="social">
                        <li><a href="#"><img src={fac} title="fac"  alt=""/></a></li>  
                        <li><a href="#"><img src={likn}  title="" alt=""/></a></li>  
                        <li><a href="#"><img src={istgrem} title="" alt="" /></a></li> 
                        <li><a href="#"><img src={twitte} title="fac"  alt=""/></a></li>   
                        </ul>
                    </div>
            </div>   
        </div>
         
    );
}
export default Footer;
