import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div classname="chart-bar">
      <div className="chart-bar_inner">
        <div className="chart-bar_fill" style={{ height: barFillHeight }}></div>
        {/* the outer curly brace is for dynamic value while the inner curly brace is a javascript object */}
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
