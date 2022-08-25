import React, { useState } from "react";
import { render } from "react-dom";
import GraphRenderer from "./GraphRenderer";

function App() {
	let [graphIndex, setGraphIndex] = useState(1);
	const indexChangeHandle = () => {
		if (graphIndex !== 4) {
			setGraphIndex(++graphIndex);
		} else {
			setGraphIndex(1);
		}
	};
	return (
		<div className="page">
			<GraphRenderer index={graphIndex} />
			<button onClick={indexChangeHandle}>Change Graph</button>
		</div>
	);
}

render(<App />, document.getElementById("root"));
