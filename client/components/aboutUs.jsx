import React, { Component } from 'react';  
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <h1>Contact us</h1>

      <h3>Welcome to PoliCure's Contact us page.</h3>
      <p>Please select your reason for contacting us from the list below. 
      If you have a question about the comment community, select "Comments." 
      Or if you have a secret or scoop, choose "News Tips." Once you select your topic, 
      you will be able to contact the best person at PoliCure to answer your question or 
      resolve your issue.</p>

      <h3>Give Us The Scoop</h3>
      <p>Do you have a news tip, firsthand account, information or photos about a 
      news story to pass along to our editors? Send a news tip via email at&nbsp;
      <a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a> with SCOOP in the 
      subject line. </p>
      <hr />

      <h3>Send us a blog-pitch or another Political Solution</h3>
      <p>
        Contact us at&nbsp;<a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a>
        to pitch an idea for a blog post to the PoliCure blog team.
      </p>
      <hr />

      <h3>Advertise on PoliCure.com</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a>
      to discuss advertising and custom solutions.</p>
      <hr />

      <h3>Advertising Problem on PoliCure.com</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a>
      to report advertising interfereing with your viewing experience.</p>
      <hr />

      <h3>Write with Us</h3>
      <p>Please send us a writing sample at&nbsp;
      <a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a> to help us solve real world
      political problems.</p>
      <hr />

      <h3>Rights and Permissions</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a>
      to obtain republishing rights for original PoliCure.com commentary or videos.</p>
      <hr />

      <h3>Report a Correction or Typo</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a>
      with the word TYPO in the subject line and a description of the correction in the body.</p>
      <hr />

      <h3>Press Inquiries</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure@gmail.com">PoliCure@gmail.com</a>
      if you are a member of the press seeking imformation about PoliCure</p>
      <hr />
    </div>
  )
}

export default AboutUs;