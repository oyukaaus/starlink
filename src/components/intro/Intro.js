// ProductPage.js
import React from 'react';
import './Intro.css';
import p1 from '../../assets/p1.webp';
import p2 from '../../assets/p2.webp'
import p3 from '../../assets/p3.jpeg'

const Intro = () => {
    return (
        <div className="product-page" style={{ marginTop: 40 }}>
            <div className="intro-container">
                <div className="card">
                    <img style={{ width: "50%" }} src={p2} alt="Product 2" />
                    <p>MBUX er et komplett infotainment-system. To brede digitale skjermer utfyller hverandre, hvor den ene gir relevant informasjon til fører, mens man kontrollerer underholdning, værmelding, temperatur og generell komfort i den andre.
                        – Jeg er ganske begeistra for skjermen, men også lysene, skyter Gudrun inn.
                        – Enig. Det er litt kult med dashbordet og alle mulighetene man har. Jeg opplever det som veldig lett å navigere i, sier Erlend.</p>
                </div>
            </div>
        </div>
    );
}

export default Intro;
