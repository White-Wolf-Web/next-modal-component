import React from "react";
import styles from "./Modal.module.css";

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

	const headerStyles = {
		color: textColor,
		backgroundColor: backgroundColor,
		fontSize: titleFontSize,
		...customStyles.header,
	};

	const contentStyles = {
		color: textColor,
		fontSize: contentFontSize,
        textAlign: contentAlign,
		...customStyles.content,
	};

	const overlayStyles = {
		...customStyles.overlay,
	};

	const modalStyles = {
		width: modalWidth,
		...customStyles.modal,
		border: `1px solid ${borderColor}`,
	};

	return (
		<div className={styles.overlay} style={overlayStyles}>
			<div className={styles.modal} style={modalStyles}>
				<div className={styles.header} style={headerStyles}>
					<h2>{title}</h2>
					<button onClick={onClose} className={styles.closeButton} style={{ color: textColor, ...closeBtnStyle }}>
						X
					</button>
				</div>
				<div className={styles.content} style={contentStyles}>
					{content}
				</div>
			</div>
		</div>
	);
}
