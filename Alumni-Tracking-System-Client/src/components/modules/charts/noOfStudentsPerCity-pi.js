import React from "react";
import Chart from "../charts";

export default function NoOfStudentsPerCityPiChart({studentsByCity}) {

  let dataToLoad = [];

  for (const property in studentsByCity) {
    dataToLoad.push({ value: studentsByCity[property], name: property });
  }

  const options = {
    title: {
      text: 'No of Students',
      subtext: 'By City',
      left: 'right'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: dataToLoad,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <Chart options={options} />
    </React.Fragment>
  );
}
