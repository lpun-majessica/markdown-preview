import Window from "./Window";
import { Panel, PanelGroup } from "react-resizable-panels";
import ResizeHandle from "./ResizeHandle";
import "../styles/App.scss";

function App() {
	return (
		<div className="app">
			<PanelGroup className="panel" direction="horizontal">
				<Panel defaultSize={45} collapsible={true}>
					<Window headerName="Editor" />
				</Panel>

				<ResizeHandle />

				<Panel defaultSize={55} collapsible={true}>
					<Window headerName="Previewer" />
				</Panel>
			</PanelGroup>
		</div>
	);
}

export default App;
