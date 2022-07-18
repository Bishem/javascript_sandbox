"use strict";
export function addElement(name, parent, content, attributes) {

	const element = document.createElement(name);

	parent.appendChild(element);
	element.textContent = content;
	Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

	return element;
}