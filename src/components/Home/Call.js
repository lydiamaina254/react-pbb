import React from 'react';

const Call = () => {
    // Return Statement Here
    return (
        <section>
        <div className="call-section">
            <div className="left-column">
                <h6>24/7 Prayer Call Center</h6>
                <h2>Call Us Now for your<br /> Miracle and<br />  Breakthrough.</h2>
                <div className="contact-numbers">
                    <div className="contact-numbers-left">
                    <span>0758 100 400</span>
                    <span>0758 100 111</span>
                    <span>0758 100 300</span>
                    </div>
                    <div className="contact-numbers-right">
                    <span>0758 100 500</span>
                    <span>0758 100 200</span>
                    </div>
                </div>
                    <div className="bible-verse">
                        <img 
                        src="/Images/Assets/verse.png"
                        alt="Bible verse"
                        />
                        <p>God is not unjust; he will not forget your work and the 
                    love you<br />  have shown him as you have helped his people and 
                    continue to<br />  help them.
                    </p>
                </div>
            </div>
            <div className="right-column">
                <img 
                src="/Images/Assets/man-praying.jpg"
                alt="Man praying"
                />
            </div>
        </div>
        <div className="dove-image">
                <img 
                src="/Images/Assets/dove.png"
                alt="Dove"/>
            </div>
        <div className="footer-section">
            <div className="footer-text">
                <h2>Become part of our family!</h2>
            </div>
            <div className="footer-button">
                <button>Join Today</button>
            </div>
        </div>
        </section>
    )
} 

export default Call;