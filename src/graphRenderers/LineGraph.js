import React from "react";
import { ResponsiveLine } from "nivo/lib/components/charts/line";
import lineData from "../data/lineData.json";
import "../App.css";

const LineGraph = () => {
	return (
		<div className="graphContainer">
			<ResponsiveLine
				data={lineData}
				margin={{
					top: 10,
					right: 10,
					bottom: 10,
					left: 10,
				}}
				stacked={true}
				dotSize={10}
				dotColor="inherit:darker(0.3)"
				dotBorderWidth={2}
				dotBorderColor="#ffffff"
				enableDotLabel={false}
			/>
		</div>
	);
};

export default LineGraph;
