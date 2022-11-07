<?php include 'header.php';?>



    

    <section class="mn-bann ovr-hidden">
        <div class="slide">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-5 left-bg"
                         style="background-image: url('assets/images/mn-bann-sideimg.jpg');">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-10 flx-box">
                                <div>
                                    <h1 class="mn-hd">Contact Us Today!</h1>
                                    <p>No matter what time of the day it is, fill in the form below or give us a call
                                        and we’ll get right back to you! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 padd-zero right-bg"
                         style="background-image: url('assets/images/banners/contact-us.jpg');">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="contact-info pad-zero">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ul class="contactDetail">
                        <li>
                            <h6>Address</h6>
                            <p>1390 Market Street Suite 200, San Francisco, CA, 94102</p>
                        </li>
                        <li>
                            <h6>Email</h6>
                            <a href="mailto: support@360digitalbar.com">support@360digitalbar.com</a>
                        </li>
                        <li>
                            <h6>Phone</h6>
                            <a class="line-height28"
                               href="tel:(225) 434-3518">(225) 434-3518</a><br>
                        </li>
                        <li>
                            <h6>Social Media</h6>
                            <a class="socialIcons" target="_blank"
                               href="#"><i
                                    class="fa fa-facebook-square"></i></a>
                            <a class="socialIcons" target="_blank" href="#"><i
                                    class="fa fa-twitter"></i></a>
                            <a class="socialIcons" target="_blank" href="#"><i
                                    class="fa fa-instagram"></i></a>
                            <a class="socialIcons" target="_blank"
                               href="#"><i
                                    class="fa fa-youtube"></i></a>
                            <a class="socialIcons" target="_blank"
                               href="#"><i
                                    class="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                    <h5 class="mn-hd2">Fill In the Required Form Below:</h5>
                    <div class="formDetail">
                        <form method="POST" id="footerForm" action="http://localhost/360digitalbar/lead">
                            <input type="hidden" name="_token" value="JVXrll8BqLKTzzNDmKFrdGsvMI0kI9O0Qwtm54J2">                            <div class="row">
                                <div class="col-md-4">
                                    <div class="field-box">
                                        <input type="text" required="" placeholder="Name" name="name">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="field-box">
                                        <input type="email" required="" placeholder="Email Address" name="email">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="field-box">
                                        <input type="text" required="" name="phone" placeholder="Phone Number"
                                               maxlength="13" min="6">
                                    </div>
                                </div>
                            </div>
                            <textarea name="message" required="" placeholder="Message"></textarea>


                            <div class="field-box text-center">
                                <input class="mn-btn2" type="Submit" value="Submit">

                                <input type="hidden" name="offer" value="Request A Quote">
                                <input type="hidden" name="source" value="Popup Lead Form"/>
                                <input type="hidden" name="leadAmount" value="0">
                                <input type="hidden" name="url" value="http://localhost/360digitalbar/contact"/>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <?php include 'footer.php';?>    