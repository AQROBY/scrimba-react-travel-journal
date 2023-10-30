import React from "react"

function Card(props) {
    return (
        <div className="cards">
            <img src={props.imageUrl} />
            <div className="card">
                <div className="location">
                    <img src="../images/location.png" />
                    <h6>{props.location}</h6>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h6 className="date">{props.startDate} - {props.endDate}</h6>
                <p className="text">{props.description}</p>
            </div>
        </div>
    )
}

export default Card