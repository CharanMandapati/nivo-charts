import React from "react";
import { ResponsivePie } from "nivo/lib/components/charts/pie";
import pieData from "../data/pieData.json";
import "../App.css";

const PieGraph = () => {
	return (
		<div className="graphContainer">
			<ResponsivePie
				data={pieData}
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				innerRadius={0.5}
				enableRadialLabels={false}
				enableSlicesLabels={false}
			/>
		</div>
	);
};

export default PieGraph;
