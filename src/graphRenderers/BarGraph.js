import React from "react";
import { ResponsiveBar } from "nivo/lib/components/charts/bar";
import "../App.css";
import barData from "../data/barData.json";

const BarGraph = () => {
	return (
		<div className="graphContainer">
			<ResponsiveBar
				data={barData}
				keys={["degrees"]}
				indexBy="day"
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				padding={0.7}
				valueScale={{ type: "linear" }}
				colors="#2739DD"
				enableLabel={false}
				axisTop={null}
				axisRight={null}
				axisLeft={null}
				borderRadius={4}
			/>
		</div>
	);
};

export default BarGraph;
