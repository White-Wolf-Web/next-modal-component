# Next Modal Component

Ce composant offre une modal simple, flexible et hautement personnalisable pour vos applications Next.js.

## Installation

npm install [next-modal-component] --save

## Utilisation

Pour utiliser le composant Modal, importez-le simplement dans votre fichier et utilisez-le comme n'importe quel autre composant React :

import Modal from "[next-modal-component]";

```javascript
<Modal
    isOpen={isOpen}
    onClose={handleClose}
    title="Votre titre ici"
    content="Votre contenu ici"
    textColor="La couleur du texte choisi"
	modalWidth="largeur du modal voulu"
    backgroundColor="couleur arriere plan"
    borderColor="couleur de la bordure"
    titleFontSize="Taille des caractères du titre"
    contentFontSize="Taille des caractères du paragraphe"
	content="le contenu souhaité"
	contentAlign="gauche centre droite"
    closeBtnStyle={}   />
```

## Props

**Le composant Modal accepte les props suivantes :**

1. isOpen (booléen, requis) : Indique si la modal doit être affichée ou non.

2. onClose (fonction, requis) : Fonction qui sera appelée lorsque l'utilisateur tente de fermer la modal.

3. content (élément JSX/string, requis) : Le contenu à afficher dans la modal.

4. title (string, requis) : Le titre à afficher en haut de la modal.

5. textColor (string, optionnel, valeur par défaut: "black") : La couleur du texte dans la modal.

6. backgroundColor (string, optionnel, valeur par défaut: "white") : La couleur d'arrière-plan de la modal.

7. borderColor (string, optionnel, valeur par défaut: "red") : La couleur de la bordure de la modal.

8. titleFontSize (string, optionnel, valeur par défaut: "24px") : La taille de la police du titre.

9. contentFontSize (string, optionnel, valeur par défaut: "16px") : La taille de la police du contenu.

10. contentAlign (string, optionnel, valeur par défaut: "left") : L'alignement du texte du contenu. Les valeurs acceptées sont "left", "right", "center", et "justify".

11. modalWidth (string, optionnel, valeur par défaut: "70%") : La largeur de la modal.

12. customStyles (objet, optionnel) : Styles personnalisés pour la modal. Les sous-objets acceptés sont:

-   header: Styles appliqués à l'en-tête de la modal.
-   content: Styles appliqués au contenu de la modal.
-   overlay: Styles appliqués à l'arrière-plan/overlay de la modal.
-   modal: Styles appliqués à la modal elle-même.
-   closeBtnStyle (objet, optionnel) : Styles appliqués au bouton de fermeture de la modal.

## Personnalisation

Vous pouvez personnaliser la modal en passant des styles spécifiques via les props. Par exemple :

```javascript
<Modal
	isOpen={isConfirmationOpen}
	onClose={() => setConfirmationOpen(false)}
	title="Employee Created!"
	textColor="red"
	modalWidth="50%"
	backgroundColor="black"
	borderColor="#0cc7ba"
	titleFontSize="30px"
	contentFontSize="18px"
	content=""
	contentAlign="center"
	closeBtnStyle={{ color: "white", fontSize: "20px" }}
	customStyles={{
		header: { padding: "20px" },
		content: { fontWeight: "bold" },
		overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
		modal: { boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)" },
	}}
/>
```

## Licence
MIT

![Exemple](/img/modal.gif)
