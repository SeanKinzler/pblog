import React, { Component } from 'react';

const TakeAction = (props) => {
  return (
    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
      <li><a href="https://www.resistbot.io">Send a message to your representatives</a></li>
      <li><a href="https://www.indivisibleguide.com/act-locally/">Join local events</a></li>
      <li><a href="https://secure.actblue.com/contribute/page/noahca">Donate to campaigns</a></li>
      <li role="separator" className="divider"></li>
      <li><a href="https://energy.gov/contact-us">Send a letter in support of the Paris Agreement</a></li>
      <li><a href="https://www.nrdc.org/media/2017/170531">Donate to legal action</a></li>
      <li><a href="https://www.change.org/p/tell-trump-to-actonclimate">Sign petition oppose withdrawl</a></li>
    </ul>
  )
}


export default TakeAction;