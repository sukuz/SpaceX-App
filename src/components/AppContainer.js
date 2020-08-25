import React, { useEffect, useState } from "react";

import ImageComponent from "./history";
import PayloadComponent from "./payload";

import searchIcon from "./searchIcon.png";
import { connect } from "react-redux";
import fetchData from "./actions/pagenameActions";
import propTypes from "prop-types";

function AppContainer(props) {
  const [searchText, setSearchText] = useState("");
  const path = props.location.pathname;

  useEffect(() => {
    if (path) {
      props.fetchData(path);
    }
  }, [path]);

  const renderData = (path) => {
    if (path === "/SpacexHistory") {
      return props.history.map((hist) => (
        <ImageComponent key={hist.id} {...hist} />
      ));
    }
    if (path === "/Payload") {
      return props.payloadSpacex.map((payL) => (
        <PayloadComponent key={payL.payload_id} {...payL} />
      ));
    }
    return [];
  };

  const renderFilteredData = (path, searchText) => {
    if (path === "/SpacexHistory") {
      const data = props.history.filter((hist) =>
        hist.title.toLowerCase().includes(searchText.toLowerCase())
      );

      return data.map((hist) => <ImageComponent key={hist.id} {...hist} />);
    }
    if (path === "/Payload") {
      const data = props.payloadSpacex.filter((payL) =>
        payL.payload_id.toLowerCase().includes(searchText.toLowerCase())
      );

      return data.map((payL) => (
        <PayloadComponent key={payL.payload_id} {...payL} />
      ));
    }
    return [];
  };

  return (
    <>
      <div>
        <div className="uppercontainer">
          <input
            className="search-box"
            type="text"
            placeholder="  Search here..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img className="searchIcon" src={searchIcon} alt="search" />
        </div>
        <div className="container">
          {searchText.length
            ? renderFilteredData(path, searchText)
            : renderData(path)}
        </div>
      </div>
      <div className="loadmorediv">
        <button className="btnstyle">Load more</button>
      </div>
    </>
  );
}
AppContainer.propTypes = {
  fetchData: propTypes.func.isRequired,
  history: propTypes.array.isRequired,
  payloadSpacex: propTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  history: state.history.History,
  payloadSpacex: state.payloadSpacex.Payload,
});

export default connect(mapStateToProps, { fetchData })(AppContainer);
