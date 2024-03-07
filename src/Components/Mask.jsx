import React from "react";

const Mask = () => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 3,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Content for mask-top */}
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Content for mask-bottom */}
      </div>
    </div>
  );
};

export default Mask;
