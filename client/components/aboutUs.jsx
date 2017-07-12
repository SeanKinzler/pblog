import React, { Component } from 'react';  
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <h1>Contact us</h1>

      <h3>Welcome to PoliCure's Contact us page.</h3>
      <p>PoliCure is founded by Former congressional staffers.  
      PoliCure articles are written by politicos on the most important political stories 
      today and actions you and I can take to stop Trump.  PoliCure is founded by Former 
      congressional staffers.  PoliCure articles are written by politicos on the most 
      important political stories today and actions you and I can take to stop Trump. 
      Please select your reason for contacting us from the list below. 
      If you have a question about the comment community, select "Comments." 
      Or if you have a secret or scoop, choose "News Tips." Once you select your topic, 
      you will be able to contact the best person at PoliCure to answer your question or 
      resolve your issue.</p>

      <h3>Contributors</h3>
      <img className="contributor-image center-block" src="https://s3-us-west-1.amazonaws.com/poliblogbucket/aboutUs/NicoleN.jpg"/>
      <p>Nicole Nabulsi served as Special Assistant during Affordable Care Act's Covered 
      California's state-wide media tour; served as an Organizer for a Democratic Congressional Candidate, 
      and served as a Senior Staffer for Congressman Mike Honda (CA-17), fundraising over $2 million for his campaign.</p>

      <img className="contributor-image center-block" src="https://s3-us-west-1.amazonaws.com/poliblogbucket/aboutUs/JamesC.png"/>
      <p>James Chang served as a Senior Staffer for Congressman Mike Honda (CA-17) fundraising over $2 million for his campaign.  
      He sits on the board of multiple Democratic Clubs and serves as a local elected official for the city of Berkeley.</p>
      <hr />

      <a name="writer"/>
      <h3>Write with Us</h3>
      <p>1. Send us your first and last name</p>
      <p>2. Why do you want to write for us? (1-2 paragraphs)</p>
      <p>3. Send us a writing sample (article, essay, blog post).  If you have never written an article before, its ok.  We just want to make sure you can write.</p>
      <p>4. What are you doing now politically? </p>
      <p>Please send us a writing sample at&nbsp;
      <a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;to help us solve real world
      political problems.</p>
      <hr />

      <h3>Give Us The Scoop</h3>
      <p>Do you have a news tip, firsthand account, information or photos about a 
      news story to pass along to our editors? Send a news tip via email at&nbsp;
      <a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;with SCOOP in the 
      subject line. </p>
      <hr />

      <h3>Send us a blog-pitch or another Political Solution</h3>
      <p>
        Contact us at&nbsp;<a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;
        to pitch an idea for a blog post to the PoliCure blog team.
      </p>
      <hr />

      <h3>Advertise on PoliCure.com</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;
      to discuss advertising and custom solutions.</p>
      <hr />

      <h3>Advertising Problem on PoliCure.com</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;
      to report advertising interfereing with your viewing experience.</p>
      <hr />

      <h3>Rights and Permissions</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;
      to obtain republishing rights for original PoliCure.com commentary or videos.</p>
      <hr />

      <h3>Report a Correction or Typo</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;
      with the word TYPO in the subject line and a description of the correction in the body.</p>
      <hr />

      <h3>Press Inquiries</h3>
      <p>Contact us at&nbsp;<a href="mailto:PoliCure2017@gmail.com">PoliCure2017@gmail.com</a>&nbsp;
      if you are a member of the press seeking imformation about PoliCure</p>
      <hr />
    </div>
  )
}

export default AboutUs;