"use strict";
export function addElement(name, parent, content, attributes) {

	const element = document.createElement(name);

	parent.appendChild(element);
	element.textContent = content;
	if(attributes) Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));

	return element;
	
}