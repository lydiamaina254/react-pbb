import React from 'react';

const Bio = () => {
    // Return Statement Here
    return (
        <section className="bio-section">
            <div className="bio-left">
            <div className="bio-heading">
                <h2>Founded In 2025.</h2>
            </div>
            <div className="bio-description">
                <p>
                Prayers Beyond Boundaries Ministries (PBB Ministries) is a 
                Christian non-profit making organization founded on August 2006 
                and officially launched an year later on August 2007 by Evangelist 
                Lucy Wa Ngunjiri. PBB Ministries is registered under the Societies 
                Act of the Government of Kenya.
                <br /><br />
                At PBB Ministries, everybody is somebody – we all have a place at 
                the table – and prayer is our lifestyle. Borrowing heavily from Daniel, 
                we also give place to sound teachings from God’s Word. In all these, 
                Transformation of lives across board remains our main aim.
                </p>
            </div>
            <div>
                <button type="button">Our Story</button>
            </div>
            </div>
            <div className="bio-right">
                <img
                src="/Images/Assets/founders-image.jpg"
                alt="Founders"
                />
            </div>
        </section>
    )
}

export default Bio;