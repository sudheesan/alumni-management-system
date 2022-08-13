import React from "react";
import Chart from "../charts";

export default function NoOfAdsPerLocationPiChart({ jobsByState }) {
  let dataToLoad = [];

  for (const property in jobsByState) {
    dataToLoad.push({ value: jobsByState[property], name: property });
  }

  const options = {
    title: {
      text: "No of Jobs Ads",
      subtext: "By State",
      left: "right",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: dataToLoad,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <Chart options={options} />
    </React.Fragment>
  );
}
