import React from 'react';

import principal from '../images/principal.jpeg'
import bullet from '../images/bullet.png'
function Main(){
    
    return (
        <div className="Main">
            
            <div className='ourvision'>
           
                <h2>Our Vision</h2>
                <div className='line'></div><br/>

               
                
                <p><span className='quotation'>&#8220;</span>College is driven to provide excellent educational opportunities that are responsive to the needs of our students, and empower them to meet and exceed challenges as active participants in shaping the future of our world.<span className='quotation'>&#8221;</span></p>

            </div>
            <div className='school'>
                <h2>Principal's Desk</h2>
                <div className='line2'></div><br/>
                <img src={principal} alt="pricipal"/>
                <p><span className='quotation'>&#8220;</span>Today, the role of a school is not only to pursue academic excellence but also to motivate and empower its students to be lifelong learners, critical thinkers, and productive members of an ever-changing global society. More than a decade back BBPIC pledged to transform education. It should be our collective endeavour to promote an inspirational, motivational, value-abased academic, and administrative environment.<span className='quotation'>&#8221;</span><br/><br/><span className='quote'>“We want that education by which character is formed, strength of mind is increased, the intellect is expanded, and by which one can stand on one’s own feet”<br/> – Swami Vivekananda</span></p>



            </div>
            <div className='linkandnotice'>
                <div className='speciality'>
                    <h2>Our Speciality</h2>
                    <div className='line2'></div><br/>
                    <div className='speciality-text'>
                    <img src={bullet} alt="point" className='bullet'/>
                    <p>Best in class teaching methodologies ( U.P. BOARD CURRICULA)</p>
                    

                    </div>
                    <div className='speciality-text'>
                    <img src={bullet} alt="point" className='bullet'/>
                    <p>CCTV Surveillance  in each school premises and Class Room</p>
                    

                    </div>
                    <div className='speciality-text'>
                    <img src={bullet} alt="point" className='bullet'/>
                    <p>Well Equipped Science  & Computer Labs With smart class</p>
                    

                    </div>
                    <div className='speciality-text'>
                    <img src={bullet} alt="point" className='bullet'/>
                    <p>Safe, Hygienic, Disciplined environment</p>
                    

                    </div>
                   
                    
                   



                </div>
                <div className='links'>
                <div className='parentnoticeboard'>
                    <div className='childnoticeboard'>
                        <p>Notice Board</p>

                    </div>
                    <marquee direction="up" height="100px" >notice1</marquee>

                </div>
                    

                </div>

            </div>
            
    
        </div>
        
    )
}
export default Main;