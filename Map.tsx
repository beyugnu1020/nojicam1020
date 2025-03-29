
import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c70022d9b554b46cc2259d0011436714&autoload=false";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (!container) return;

          const options = {
            center: new window.kakao.maps.LatLng(35.6479, 128.7374),
            level: 4
          };

          const map = new window.kakao.maps.Map(container, options);

          const markerPosition = new window.kakao.maps.LatLng(35.6479, 128.7374);
          const marker = new window.kakao.maps.Marker({ position: markerPosition });
          marker.setMap(map);
        });
      }
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "300px" }}></div>;
};

export default Map;
