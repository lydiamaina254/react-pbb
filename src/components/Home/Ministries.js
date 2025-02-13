import React from 'react';

const Ministries = () => {
    // Return Statement Here
    return (
        <section className="ministries-section">
            <div className="top-row">
                <h2>Our Ministries</h2>
                <h6>View All Ministries --></h6>
            </div>
            <div className="bottom-row">
                <div>
                    <img
                    src="/Images/Assets/waheshimiwa.jpg"
                    alt="Waheshimiwa Men Ministry" />
                    <h6>Waheshimiwa Men Ministry</h6>
                </div>
                <div>
                    <img
                    src="/Images/Assets/vigorous.jpg"
                    alt="Vigorous Ladies Ministry" />
                    <h6>Vigorous Ladies Ministry</h6>
                </div>
                <div>
                    <img
                    src="/Images/Assets/i-purpose.jpg"
                    alt="I Purpose Forum Youth Ministry" />
                    <h6>I Purpose Forum Youth Ministry</h6>
                </div>
            </div>
        </section>
    )
}

export default Ministries;