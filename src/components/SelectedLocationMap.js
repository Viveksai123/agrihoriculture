import React, { useEffect, useRef } from 'react';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css';

const SelectedLocationMap = ({ latitude, longitude, onClose }) => {
    const viewport = {
        latitude,
        longitude,
        zoom: 12,
        width: '100%',
        height: '300px'
    };

    return (
        <div className="selected-location-map">
            <button onClick={onClose} className="close-button">X</button>
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken="8c550ca580b845dcb95648d8f8b84a10"
            >
                <div
                    className="marker"
                    latitude={latitude}
                    longitude={longitude}
                >
                    <span role="img" aria-label="pin">📍</span>
                </div>
            </MapGL>
        </div>
    );
};

export default SelectedLocationMap;
