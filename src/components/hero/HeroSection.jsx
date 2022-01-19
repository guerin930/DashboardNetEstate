import React from 'react';
import "./herosection.css";
import BackgroundImg from "../../assets/charts-6246450.png"; // importation de l'image depuis assets

export default function HeroSection() {
    return (
        <div className='herosection'>
            <img src={BackgroundImg} alt="preview" className="backgroundImg" />
        </div>
    )
}


















