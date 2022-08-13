import React from "react";
import Chart from ".";

export default function JobsByTagPiChart({jobsByTag}) {

  let dataToLoad = [];

  for (const property in jobsByTag) {
    dataToLoad.push({ value: jobsByTag[property], name: property });
  }

  const options = {
    title: {
      text: "No of Jobs Available",
      subtext: "By Tag",
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
