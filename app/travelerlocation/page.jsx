"use client";
import { useState, useEffect } from "react";
import io from "socket.io-client";

const TravelerLocation = () => {
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [address, setAddress] = useState("");
    const [guideLocation, setGuideLocation] = useState("");

    useEffect(() => {
        // Get the current location
        navigator.geolocation.getCurrentPosition((position) => {
            setLongitude(position.coords.longitude);
            setLatitude(position.coords.latitude);
            getCurrentAddress(position.coords.latitude, position.coords.longitude);
        });

        // Connect to the WebSocket server
        const socket = io("http://localhost:3001");

        // Listen for guide location updates
        socket.on("location/guide", (data) => {
            setGuideLocation(data);
        });

        // Share your location with the guide
        socket.emit("locationUpdate", {
            role: "traveler",
            latitude,
            longitude
        });
    }, [latitude, longitude]);

    const getCurrentAddress = async (lat, lng) => {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=f3a6d1c2bee04fdeb6fa30af41dd63eb&q=${lat}%2C+${lng}&pretty=1&no_annotations=1`)
        const data = await response.json()
        setAddress(data.results[0].formatted)
    };


    return (
        <div>
            <h1>Tour Guide Location</h1>
            <iframe
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${guideLocation.latitude},${guideLocation.longitude}&z=16&output=embed`}
                allowFullScreen
            ></iframe>

        </div>
    );
};

export default TravelerLocation;