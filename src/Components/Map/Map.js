import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import './Map.css';

import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGllZ29wYXNzb3MzMiIsImEiOiJjbDFnbTNjdmcxYjV1M2NwY2cxZjN4a21sIn0.hR59EPg3ycWwvIpu8mG_9g';

const Map = () => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });

    return ( 
        <>
            <div ref={mapContainer} className="map-container"/>
        </>
     );
}
 
export default Map;