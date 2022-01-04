import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <section id="contact">

<div class="container">
   
    <div class="section-header">
        <h2>CONTACT <span style={{color:"orange"}}>US</span></h2>
        <div class="fancy"><span></span></div>
    </div>
</div>

<div class="container">
  
    <div class="row">
       
        <div class="col-md-10 col-md-offset-1">
           
            <div class="row">
                <div class="col-md-4">
                    <div class="contact-detail">
                        <i class="fa fa-map-marker"></i>
                        <h4>Gaptoli,Dhaka</h4>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-detail">
                        <i class="fa fa-envelope-o"></i>
                        <h4>Highwayhangouts@gmail.com</h4>
                    </div>
                </div>

               
                <div class="col-md-4">
                    <div class="contact-detail">
                        <i class="fa fa-phone"></i>
                        <h4>+8801812345617</h4> 
                    </div>
                </div>

            </div> 
        </div> 
    </div>

    <div class="row text-center">
      
        <div class="col-md-10 col-md-offset-1">
           
            <form action="https://formsubmit.co/Highwayhangouts8@gmail.com" method="POST">
              

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <input type="text" name="name" autocomplete="off" class="form-control"
                                placeholder="Your Name *" id="name" required
                                data-validation-required-message="Please enter your name."/>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                   
                    <div class="col-md-4">
                        <div class="form-group">
                          
                            <input type="email" name="email" autocomplete="off" class="form-control"
                                placeholder="Your Email *" id="email" required
                                data-validation-required-message="Please enter your email address."/>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                </div>

               
                <div class="form-group">
                    
                    <textarea class="form-control" rows="7" placeholder="Tell Us Something..." id="message" name="massage"
                        required data-validation-required-message="Please enter a message."></textarea>
                    <div id="success"></div>
                </div>
                        <button type="submit" id="submit-btn">Send Us</button>
               

            </form>
        </div>
    </div>

</div>

</section>
        </div>
    );
};

export default ContactUs;