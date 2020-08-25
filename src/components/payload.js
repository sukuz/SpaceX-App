import React from "react";

function PayloadComponent(props) {
  return (
    <>
      <div
        style={{
          background: "black",
          color: "white",
          padding: "15px",
        }}
      >
        payload_id : {props.payload_id}
        <br />
        nationality: {props.nationality}
        <br />
        payload_type: {props.payload_type}
        <br />
        manufacturer: {props.manufacturer}
        <br />
      </div>
    </>
  );
}
export default PayloadComponent;
