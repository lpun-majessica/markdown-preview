import { PanelResizeHandle } from "react-resizable-panels";
import "../styles/ResizeHandle.scss";

function ResizeHandle() {
	return (
		<PanelResizeHandle className="resize-handle">
			<div className="handle-icon"></div>
		</PanelResizeHandle>
	);
}

export default ResizeHandle;
