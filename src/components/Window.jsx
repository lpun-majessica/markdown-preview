import { PropTypes } from "prop-types";
import Editor from "./Editor";
import Previewer from "./Previewer";

import "../styles/Window.scss";

function Window({ headerName }) {
	const contentMapping = { Editor, Previewer };
	let Content = contentMapping[headerName];

	return (
		<div className={`window ${headerName.toLowerCase()}`}>
			<div className="header" id={`${headerName.toLowerCase()} header`}>
				<span className="title">{headerName}</span>
			</div>

			<Content />
		</div>
	);
}

Window.propTypes = { headerName: PropTypes.string.isRequired };

export default Window;
