import React from 'react';

import '../../styles/Contact.css';

import Map from '../../assets/img/HomePage/LocationSection/Map.png';

const Contact = () => {
    return (
        <div>
            <h2 class="ContactTitle">Contact</h2>
    <div class="Contact">

        {/* Google Maps Import */}
        <div class="ContactLeftSide">
            <img src={Map} alt=""/>
        </div>

        <div class="ContactRightSide">
            <div class="ContactItem">
                <label>Name</label>
                <input type="text" placeholder="FullName"/>
            </div>

            <div class="ContactItem">
                <label>Email</label>
                <input type="text" placeholder="email@gmail.com"/>
            </div>

            <div class="ContactItem">
                <label>Phone</label>
                <input type="text" placeholder="000-000-000"/>
            </div>

            <div class="ContactItem">
                <label>Comment</label>
                <input id="ContactDescriptionInput" type="text" placeholder="Leave a message here"/>
            </div>

            <button>Send</button>
        </div>
    </div>
        </div>
    );
}

export default Contact;
