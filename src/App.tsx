import React, { useState, useEffect } from "react";
import { APILoader, Map, Marker, CustomOverlay } from "@uiw/react-baidu-map";

function useData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData([
        { lng: 121.466008, lat: 31.220001 },
        { lng: 121.500934, lat: 31.23088 },
        { lng: 121.550934, lat: 31.23088 },
      ]);
    }, 1000);
  });
  return data;
}

const Demo = () => {
  const [count, setCount] = useState(0);
  const data = useData();
  function markerRef(props) {
    if (props && props.customOverlay) {
      console.log(
        "CustomOverlay::",
        props.customOverlay,
        props.map,
        props.BMap
      );
    }
  }
  function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    setCount(count + 1);
  }
  return (
    <div style={{ width: "1000px", height: "1000px" }}>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <Map widget={["NavigationControl"]} zoom={13}>
          {data.map((position) => (
            <CustomOverlay key={position.lng} position={position}>
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: 5,
                  borderRadius: 10,
                  whiteSpace: "nowrap",
                  border: "1px solid #333",
                }}
              >
                自定义的覆盖物，第二个
              </div>
            </CustomOverlay>
          ))}
        </Map>
      </APILoader>
    </div>
  );
};
export default Demo;
