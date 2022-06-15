import phone from '../images/phone.png'
import home from '../images/home.png'
import mail from '../images/mail.png'
import emailjs from "emailjs-com"
function Contactus() {
    function submitHandler(e){
        e.preventDefault();
        
        emailjs.sendForm('service_i43boen', 'template_zcv1u5z', e.target, 'a9ELRGeZGmMLNMnOa')
          .then((result) => {
              window.alert("Message Sent Sucessfully ! We Will Get Back To You Soon");
              e.target.reset();
          }, (error) => {
              console.log(error);
          });
          
        
        
        

    }
  return (
      <div className="contactus">
          <div className="contact-1">
              
              <div className="extra-padding-contactus">
               <p>Get In Touch</p>
                <form  onSubmit={submitHandler} className="form-2">
                    <input type="text" placeholder='Name' name="name" required></input>
                    <input type="text" placeholder='Email' name="email" required></input><br/>
                    <input type="text" placeholder='Mobile' name="mobile" required></input>
                    <input type="text" placeholder='Message' name="query" required></input><br/>
                    
                    <button type='submit' className="btn-enq" >SUBMIT</button>
                </form>
                </div>
              <div className="contact-2">
                  
                  <div className="Quicklinks extra-width-contactus">
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


              </div>
          </div>
          
      </div>
   
  );
}

export default Contactus;
