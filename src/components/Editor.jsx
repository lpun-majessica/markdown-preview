import { useEffect, useState } from "react";
import initialMarkdown from "../assets/initialMarkdown";
import { marked } from "marked";
import "../styles/Editor.scss";

function Editor() {
	const [editorValue, setEditorValue] = useState(initialMarkdown);

	const handleChange = (event) => {
		const updatedInput = event.target.value;
		setEditorValue(updatedInput);
	};

	const handleTab = (event) => {
		const tabSize = 4;
		const tabString = " ".repeat(tabSize);

		if (event.key === "Tab") {
			event.preventDefault();
			const textArea = event.target;

			const selectionStart = textArea.selectionStart;
			const selectionEnd = textArea.selectionEnd;
			const beforeStart = textArea.value.slice(0, selectionStart);
			const afterEnd = textArea.value.slice(
				selectionEnd,
				textArea.value.length
			);

			if (!event.shiftKey) {
				setEditorValue(() => beforeStart + tabString + afterEnd);
			}

			setTimeout(() => {
				textArea.selectionStart = textArea.selectionEnd = selectionStart + 4;
			});
		}
	};

	useEffect(() => {
		const parseMarkdown = (markdown) => marked.parse(markdown);
		const syncPreviewer = (inputData) => {
			const htmlOutput = parseMarkdown(inputData);

			document.getElementById("previewer-content").innerHTML = htmlOutput;
		};
		syncPreviewer(editorValue), [editorValue, syncPreviewer];
	});

	return (
		<div className="editor-container">
			<textarea
				className="editor-field"
				value={editorValue}
				onChange={handleChange}
				onKeyDown={handleTab}
				spellCheck="false"
				autoCapitalize="off"
			/>
		</div>
	);
}

export default Editor;
