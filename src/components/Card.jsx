import React from "react";

import mapLogo from "/assets/logo-map.svg";

export default function Card(props) {
    let key = props.itemId;
    let item = props.item;
    
    return (
        <div className="card" id="key">
            <img src={item.imageUrl}/>
            <div className="card-info">
                <div className="location-data">
                    <img className="location-logo" src={mapLogo}/>
                    <p className="location">{item.location.toUpperCase()}</p>
                    <a className="location-link"href={item.googleMapsUrl}><p>View on Google Maps</p></a>
                </div>
                    <h1 className="location-title">{item.title}</h1>
                    <h3 className="location-date">{item.startDate} - {item.endDate}</h3>
                    <p className="location-description">{item.description}</p>


            </div>



        </div>
    )
}