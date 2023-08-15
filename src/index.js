import React from "react";

export default function Modal({   // Ce sont tous des PROPS
	isOpen,                       
	onClose,
	content,
	title,
	textColor = "black",          // Couleur du texte par défaut
	backgroundColor = "white",    // Couleur d'arrière-plan par défaut
	borderColor = "red",          // Couleur de la bordure par défaut
	titleFontSize = "24px",       // Taille de la police du titre par défaut
	contentFontSize = "16px",     // Taille de la police du contenu par défaut
	contentAlign = "left",        // Alignement du contenu par défaut
	customStyles = {},            // Styles personnalisés
	closeBtnStyle = {},           // Styles du bouton de fermeture
	modalWidth = "70%",           // Largeur de la fenêtre modale par défaut
}) {
	if (!isOpen) return null;

	const overlayDefaultStyle = {      // Styles par défaut pour loverlay qui recouvre toute la page
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

	const modalDefaultStyle = {        // Styles par défaut pour la fenêtre modale
		backgroundColor: 'black',
		borderRadius: '10px',
		padding: '20px',
		width: '70%',
		maxWidth: '500px',
	};

	const headerDefaultStyle = {       // Styles par défaut pour l'en-tête de la fenêtre modale
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	};

	const closeButtonDefaultStyle = {  // Styles par défaut pour le bouton de fermeture
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

	const headerStyles = {             // Fusion des styles par défaut et personnalisés pour l'en-tête
		color: textColor,
		backgroundColor: backgroundColor,
		fontSize: titleFontSize,
		...headerDefaultStyle,
		...customStyles.header,
	};

	const contentStyles = {            // Fusion des styles par défaut et personnalisés pour le contenu
		color: textColor,
		fontSize: contentFontSize,
		textAlign: contentAlign,
		...customStyles.content,
	};

	const overlayStyles = {            // Fusion des styles par défaut et personnalisés pour le contenu
		...overlayDefaultStyle,
		...customStyles.overlay,
	};

	const modalStyles = {              // Fusion des styles par défaut et personnalisés pour la modale
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
