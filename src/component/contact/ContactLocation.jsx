import React from 'react';
import LocationData from '../../data/contact/LocationData.json';
const PUBLIC_URL = import.meta.env.VITE_API_URL;

const allData = LocationData;

const ContactLocation = () => {
    return (
        <>
            {allData.map((data, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="office-location">
                        <div className="thumbnail">
                            <img src={PUBLIC_URL + data.thumb} alt="Office" />
                        </div>
                        <div className="content">
                            <h4 className="title">{data.title}</h4>
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ContactLocation;