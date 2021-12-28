import React from "react"
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
} from "@progress/kendo-react-charts"
import "hammerjs"
import "@progress/kendo-theme-default/dist/all.css"


const labelContent = props => {
  let formatedNumber = Number(props.dataItem.value)
  return `${props.dataItem.category} ${formatedNumber}`
}

const ChartContainer = ({ rocketData }) => {
  return (
    <Chart>
      <ChartTitle text="Rocket Launches" />
      <ChartLegend position="bottom" />
      <ChartSeries>
        <ChartSeriesItem
          type="pie"
          data={rocketData}
          field="value"
          categoryField="category"
          labels={{
            visible: true,
            content: labelContent,
          }}
        />
      </ChartSeries>
    </Chart>
  )
}

export default ChartContainer
