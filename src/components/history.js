import React from "react";

function HistoryComponent(props) {
  return (
    <>
      <div
        style={{
          background: "black",
          color: "white",
          padding: "15px",
        }}
        onClick={this.handleImageOnclick}
      >
        Title : {this.props.title}
        <br />
        Details: {this.props.details}
        <br />
        EventDate: {this.props.event_date_utc}
        <br />
        FlightNumber: {this.props.flight_number}
        <br />
      </div>
    </>
  );
}

export default HistoryComponent;
