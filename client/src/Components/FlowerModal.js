import React from "react";
import "./FlowerModal.css";

const FlowerModal = (props) => {
  let y = {};
  if (props.selected.length === 0) {
    y = { display: "none" };
  }

  return (
    <div className="flower-modal">
      <div className="flower-modal-section" style={y}>
        <img
          className="selectedImage"
          style={{ backgroundImage: `url(/Images/${props.selected[2]}.jpg)` }}
        />
        <h2 className="selectedName"> {props.selected[0]} </h2>
        <p className="selectedDescription"> {props.selected[1]} </p>
      </div>
    </div>
  );
};

export default FlowerModal;
