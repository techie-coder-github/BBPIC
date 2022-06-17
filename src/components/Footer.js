import React from "react";
import phone from '../images/phone.png'
import home from '../images/home.png'
import mail from '../images/mail.png'
import emailjs from "emailjs-com"
function Footer(){
    const iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.632830086942!2d83.79400192915128!3d26.503031299125933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993c5105f19eddf%3A0xebef24504855a149!2sRD%20Public%20Junior%20High%20School!5e0!3m2!1sen!2sin!4v1655186732369!5m2!1sen!2sin" width="400" height="300" style="border-radius:10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    const [reload,setreload]=React.useState(0);
    function submitHandler(e){
        e.preventDefault();
        
        emailjs.sendForm('service_i43boen', 'template_d7wwgdv', e.target, 'a9ELRGeZGmMLNMnOa')
          .then((result) => {
              window.alert("Query Sent Sucessfully");
              e.target.reset();
          }, (error) => {
              console.log(error);
          });
          
        
        
        

    }
    
  
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}}  />);
      }
    return (
        <div className="whole-footer">
        <div className="Footer">
            <div className="newsletter">
                <p>Enquire Us</p>
                <form  onSubmit={submitHandler} id="form">
                    <input type="text" placeholder='Name' name="name" required></input><br/>
                    <input type="text" placeholder='Email' name="email" required></input><br/>
                    <input type="text" placeholder='Mobile' name="mobile" required></input><br/>
                    <textarea placeholder='Query' name="query" required></textarea><br/>
                    
                    <button type='submit' className="btn-enq" form='form'>Enquire</button>
                </form>
            </div>
            <div className="Quicklinks">
            <p>Our Address</p>
            <div className="address">
            <img src={home} alt="address"/>
            <span>BABA BACHCHAN PRASAD INTERMEDIATE COLLEGE,Badhara Bhikhampur Road Deoria (U.P.) , India</span>

            </div>
            <div className="address">
            <img src={phone} alt="phone"/>
            <span className="extra-margin">+91 9125557857 ,+91 7897839212</span>

            </div>
            <div className="address">
            <img src={mail} alt="mail"/>
            <span className="extra-margin"><a href="mailto:enquire.bbpic@gmail.com">enquire.bbpic@gmail.com</a></span>

            </div>
            
            
            
                
            </div>
            <div className="map"> 
            <p>Reach Us</p>
            <Iframe iframe={iframe}/>
            </div>
        
        </div>
        <footer className="footer_text">© Copyright 2022 BBPIC, Deoria. All Rights Reserved |Developed by @VishalSingh </footer>
        </div>
      
    )
}
export default Footer;