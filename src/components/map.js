import React, { useState, useEffect, useRef } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css';
import SelectedLocationMap from './SelectedLocationMap';

const MapComponent = () => {
    const [viewport, setViewport] = useState({
        latitude: 20.5937,    // Center on India
        longitude: 78.9629,  // Center on India
        zoom: 5,             // Zoom level for country view
        width: '100%',
        height: '500px'
    });
    const [markers, setMarkers] = useState([]);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const [latitude, longitude] = await getCoordinates(location);

        // Add marker for current user
        setMarkers([...markers, { latitude, longitude, name, location }]);

        // Update viewport to center on the new marker
        setViewport({
            ...viewport,
            latitude,
            longitude,
            zoom: 8 // Zoom in closer to the new marker
        });

        // Update selected location to show on the smaller map
        setSelectedLocation({ latitude, longitude });

        // Send location to server
        try {
            await fetch('/api/add-alumni-location', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, location, latitude, longitude })
            });
            alert('Location marked successfully!');
        } catch (error) {
            console.error('Error marking location:', error);
        }
    };

    // Function to get coordinates from location name
    const getCoordinates = async (location) => {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=8c550ca580b845dcb95648d8f8b84a10`);
        const data = await response.json();
        return [parseFloat(data.results[0].geometry.lat), parseFloat(data.results[0].geometry.lng)];
    };

    return (
        <div className="map-container" style={{marginTop:"15vh"}}>
            <h1>Farms</h1>
            <MapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken="8c550ca580b845dcb95648d8f8b84a10"
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        latitude={marker.latitude}
                        longitude={marker.longitude}
                    >
                        <div className="marker">
                            <span role="img" aria-label="pin">📍</span>
                        </div>
                    </Marker>
                ))}
            </MapGL>
            <div className="form-container">
                <form id="locationForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="alumniName"
                        placeholder="farm type"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id="alumniLocation"
                        placeholder="Your Location (e.g., New York)"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                    <button type="submit">Mark Location</button>
                </form>
            </div>
            {selectedLocation && (
                <SelectedLocationMap
                    latitude={selectedLocation.latitude}
                    longitude={selectedLocation.longitude}
                    onClose={() => setSelectedLocation(null)}
                />
            )}
        </div>
    );
};

export default MapComponent;
