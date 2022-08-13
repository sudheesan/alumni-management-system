import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import * as echarts from "echarts"

function Chart({ options }) {
  const myChart = useRef(null)
  useEffect(() => {
    const chart = echarts.init(myChart.current)
    chart.setOption(options)
  }, [options])

  return (
    <div
      ref={myChart}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  )
}


export default Chart;