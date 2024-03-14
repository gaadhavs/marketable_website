import './display.css'
import React, { useState, useEffect } from "react";



export default function Display() {

  return (
    <div className='main_display'>
        <section className='container'>
          <div className="slider_wrapper">
            <div className="slider">
              <img className="slide-1" id="slide-1" />
              <img className="slide-2"id="slide-2" />
            </div>
            <div className="slider_nav">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
            </div>
          </div>
        </section>
    </div>
  )
}
