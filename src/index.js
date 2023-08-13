import React from "react";

export default function Modal({
	isOpen,
	onClose,
	content,
	title,
	textColor = "black",
	backgroundColor = "white",
	borderColor = "red",
	titleFontSize = "24px",
	contentFontSize = "16px",
	contentAlign = "left",
	customStyles = {},
	closeBtnStyle = {},
	modalWidth = "70%",
}) {
	if (!isOpen) return null;

	const overlayDefaultStyle = {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	};

	const modalDefaultStyle = {
		backgroundColor: 'black',
		borderRadius: '10px',
		padding: '20px',
		width: '70%',
		maxWidth: '500px',
	};

	const headerDefaultStyle = {
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	};

	const closeButtonDefaultStyle = {
		position: 'absolute',
		top: '5px',
		right: '5px',
		backgroundColor: 'transparent',
		border: 'none',
		cursor: 'pointer',
		fontSize: '20px',
		lineHeight: 1,
		padding: 0,
		outline: 'none',
	};

	const headerStyles = {
		color: textColor,
		backgroundColor: backgroundColor,
		fontSize: titleFontSize,
		...headerDefaultStyle,
		...customStyles.header,
	};

	const contentStyles = {
		color: textColor,
		fontSize: contentFontSize,
		textAlign: contentAlign,
		...customStyles.content,
	};

	const overlayStyles = {
		...overlayDefaultStyle,
		...customStyles.overlay,
	};

	const modalStyles = {
		...modalDefaultStyle,
		width: modalWidth,
		border: `1px solid ${borderColor}`,
		...customStyles.modal,
	};

	return (
		<div style={overlayStyles}>
			<div style={modalStyles}>
				<div style={headerStyles}>
					<h2>{title}</h2>
					<button onClick={onClose} style={{ ...closeButtonDefaultStyle, color: textColor, ...closeBtnStyle }}>
						X
					</button>
				</div>
				<div style={contentStyles}>
					{content}
				</div>
			</div>
		</div>
	);
}
