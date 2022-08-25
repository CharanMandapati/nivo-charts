import React from "react";
import BarGraph from "./graphRenderers/BarGraph";
import LineGraph from "./graphRenderers/LineGraph";
import PieGraph from "./graphRenderers/PieGraph";
import TableImg from "./graphRenderers/tableImg";

const GraphRenderer = (props) => {
	switch (props.index) {
		case 1:
			return <BarGraph />;
		case 2:
			return <LineGraph />;
		case 3:
			return <PieGraph />;
		case 4:
			return <TableImg />;
		default:
			return <BarGraph />;
	}
};

export default GraphRenderer;
